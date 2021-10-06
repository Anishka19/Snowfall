class Flake{
    constructor(x,y) {
        var options = {
            restitution : 0.5,
            friction : 0,
            density : 1
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.image = loadImage("flake11.png");
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
    }
    
}