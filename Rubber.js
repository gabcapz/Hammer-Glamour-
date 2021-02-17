class Rubber {
    constructor(x, y, width, height){
     var options = {
         'restitution':0.3, 
         'friction':5, 
         'density': 1    
     }
    this.body = Bodies.circle(x, y, 35, options);
    this.diameter = 80;

    World.add(world, this.body);
    }
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke("black");
    rectMode(CENTER);
    fill("blue");
    circle(0, 0, this.diameter);
    pop();
}
};