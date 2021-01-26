class Striker{
    constructor(){
        this.body = Matter.Bodies.circle(innerWidth / 2 - 50, innerHeight / 2.5, 15, 
            {
              isStatic: false,
              restitution: 0.5
            });
        
        this.image = "";

        Matter.World.add(world, this.body);

        this.arrow = {
            x: this.body.position.x,
            y: this.body.position.y,
        };
    }

    arrow(){

    }

    display(){
        push();
        fill(255)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 15, 15);
        pop();

        line(this.body.position.x, this.body.position.y, this.arrow.x, this.arrow.y);
    }
}