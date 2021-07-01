class Net {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      Matter.Body.setVelocity(this.body,{x:-1,y:0})
     /*  if(net.body.position.x>15){
        Matter.Body.setVelocity(this.body,{x:-1,y:0})
      }
      else{
        Matter.Body.applyForce(this.body,this.body.position,{x:50,y:0})
        Matter.Body.setVelocity(this.body,{x:1,y:0})
      } */

    }
  };
