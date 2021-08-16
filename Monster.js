class Monster extends BaseClass {
    constructor(x,y){
      super(x,y,200,200);
      this.image = loadImage("images/Monster-01.png");
   
    }


    display() {
       
      super.display();
    }
  }