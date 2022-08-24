class Form{
    constructor(){

        this.button = createButton('Play');
        this.title = createElement('h1');
        this.reset = createButton("Reset");
        this.instructions = createElement("h1");
        this.instructions1 = createElement("h3");
        this.instructions2 = createElement("h3");
        this.instructions3 = createElement("h3");
       
    }
    resetbutton(){
        this.reset.show();
        this.reset.position(550,400);
        this.reset.style('width', '200px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'lightgreen');
        this.reset.style('font-family','cursive');
        this.reset.style('font-size','20px');
        this.reset.mousePressed(() => {
            gameState = PLAY
            score=0
            life=3
        })
    }
    hid() {

        this.button.hide();
        this.title.hide();
        this.reset.hide();
        this.instructions.hide();
        this.instructions1.hide();
        this.instructions2.hide();
        this.instructions3.hide();
    }
    display() {
        this.title.html("RISE OF RECYCLING");
        this.title.position(410,10);
        this.title.style('font-size', '70px');
        this.title.style('color', 'green');
        this.title.style('font-family', 'fantasy');
        this.button.position(550,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightgreen');
        this.button.style('font-family','cursive');
        this.button.style('font-size','20px');
        this.instructions.html("How to Play: "); 
        this.instructions.position(180,200); 
        this.instructions.style('color', 'green');
        this.instructions.style('font-family', 'fantasy');
        this.instructions1.html("→ Use your mouse to move the recycling bin"); 
        this.instructions1.position(200,265); 
        this.instructions1.style('font-family', 'cursive');
        this.instructions1.style('color', 'orange');
        this.instructions2.html("→ Collect and sort all the items that go inside the recycling bin"); 
        this.instructions2.position(200,305); 
        this.instructions2.style('font-family', 'cursive');
        this.instructions2.style('color', 'orange');
        this.instructions3.html("→ Aviod items that go in the garbage or compost"); 
        this.instructions3.position(200,355); 
        this.instructions3.style('font-family', 'cursive');
        this.instructions3.style('color', 'orange');
        this.reset.hide();
        
        
        this.button.mousePressed(() => {
         this.button.hide();
         this.title.hide();
         this.instructions.hide();
         gameState = PLAY;
            
        });
    

    }
}
