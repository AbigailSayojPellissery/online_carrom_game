class Coin{
    constructor(coinType){
        this.body = Matter.Bodies.circle(innerWidth / 2, innerHeight / 2, 12, 
            {
              isStatic: false,
              restitution: 0.5
            });
        
        this.image = "";

        this.coinType = coinType

        Matter.World.add(world, this.body);
    }

    display(){
        push();
        fill(this.coinType)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 12, 12);
        pop();
    }
}