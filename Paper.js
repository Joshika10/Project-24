class Paper {
  constructor(x, y,Radius) {
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.x=x;
    this.y=y;
    this.Radius=Radius;
    this.body = Bodies.circle(this.x, this.y,this.Radius/2, options);
   
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);

   fill("white");
   ellipseMode(RADIUS);
   ellipse(0,0,this.Radius/2);

    pop();
}
}