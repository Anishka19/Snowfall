class Boy2{
    constructor(x,y) {
        var options = {
            friction : 0.4,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, 100, 10, options);
        this.image = loadImage("kid2.png");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 150);
        pop();

       /* if(keyDown("LEFT_ARROW")) {
          Matter.Body.setStatic(this.body, false);
          this.body.position.x = this.body.position.x-5;
      } else {
        Matter.Body.setStatic(this.body, true);
      }*/

      }

      //keyPressed() {
        //if(keyCode === 37){
          //Matter.Body.setStatic(this.body, false);
          //this.body.position.x = this.body.position.x-0.5;
         // }// else if(keyCode === 39) {
            //Matter.Body.setStatic(this.body, false);
            //this.body.position.x = this.body.position.x+1;
          //}
          //if(keyCode === 38 && this.body.position.y > 550) {
            //Matter.Body.setStatic(this.body, false);
            //this.body.position.y = this.body.position.y-10;
         // }
      //}
      //}
}