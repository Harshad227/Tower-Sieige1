class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
          var pointA = this.sling.bodyA;
          var pointB = this.pointB;

          strokeWeight(4);
           fill("red");
           line(pointA.x,pointB.y,pointB.x,pointB.y);
        }
    }
}