class Rope {
    constructor(bodyA, bodyB,a,b){
        var option={
        bodyA : bodyA,
       bodyB: bodyB,
        stiffness: 1,
        length: 300
 }

this.rope = Constraint.create(option);
World.add(world, this.rope);
this.a=a;
this.b=b;
//console.log(this.rope.bodyA.position.y);
}

display(){
    
        var point1=this.rope.bodyA.position;
        var point2=this.rope.bodyB.position;
        console.log(this.rope.bodyA.position.y);
        strokeWeight(4);
        line(point1.x, point1.y, point2.x+this.a, point2.y+this.b);
       // console.log(point1.x, point1.y);
     
}


}
