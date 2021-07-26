class SlingShot {
    constructor(bodyA, bodyB){
        var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        'stiffness': 0.01,
        'length': 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot)
    }
    display(){
        //line (x1, y1, x2, y2)
        var pointA = this.slingshot.bodyA.position
        var pointB = this.slingshot.bodyB.position    
        line (pointA.x, pointA.y, pointB.x, pointB.y)}
}