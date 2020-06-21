class Box {
    constructor(size, roughness) {
        this.size = size;
        this.pos = createVector(100, 450);
        this.friction = 0;
        this.speed = 0;
        this.cOfFriction = roughness;
        this.weight = this.size.x * this.size.y;
    };
    show() {
        fill(100);
        stroke(0);
        strokeWeight(1);
        let yToDraw = this.pos.y - this.size.y;
        let xToDraw = this.pos.x;
        if (this.pos.x > width) {
            xToDraw = width - this.size.x;
        }    
        rect(xToDraw, yToDraw, this.size.x, this.size.y);
    };
    move() {
        this.speed -= this.friction;
        this.pos.x += this.speed;
        this.friction = 0;
    };
    calculateFriction() {
        let frictionalForce = this.weight * this.cOfFriction * this.speed * this.speed / 10000;
        this.friction += frictionalForce;
    };
    run() {
        this.show();
        this.calculateFriction();
        this.move();
    };
}
