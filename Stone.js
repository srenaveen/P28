class Stone extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("stone.png");
  }
  display(){
    super.display();
  }

};
