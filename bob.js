class Ball {

    constructor(x,y,r){
  
    var options={
      isStatic: false,
      restitution: 1,
      friction: 0,
      density: 0.8

    }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world, this.body);
    this.r = r;
    
    }

    display(){
        fill("pink")
  ellipse(this.body.position.x,this.body.position.y, this.r,this.r);
 
}
    
}