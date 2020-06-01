class Bob {
    constructor(x,y,radius) {
      var options = {
         isStatic : true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    launch(){
      var options = {
        isStatic : false,
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0,
       density:0.8
      }
    }
  
    display() {
      var pos = this.body.position;
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius);
    }
  }
      