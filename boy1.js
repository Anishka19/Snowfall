class Boy1{
    constructor(x,y) {
        var options = {
            isStatic : true,
            friction : 0
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.image = loadImage("kid1.png");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
      }
}