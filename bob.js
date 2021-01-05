class Bob {
    constructor(x,y){
        var options = {
            isStatic: false,
            frictionAir: 0.06,
            density: 1.2
        }

        this.x = x;
        this.y = y;

        this.body = Bodies.circle(this.x,this.y,160/2,options);

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;

        fill("blue");
       ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 160, 160);

    }
}