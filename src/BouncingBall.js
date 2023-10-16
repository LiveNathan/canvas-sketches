import {Draw} from "./Draw";

export class BouncingBall {
    constructor(canvas, point, velocity, radius, color) {
        this.canvas = canvas;
        this.point = point;
        this.velocity = velocity;
        this.radius = radius;
        this.draw = new Draw(canvas);
        this.color = color;
    }

    animate() {
        this.draw.circle(this.point, this.radius, this.color);

        if (this.point.x + this.radius > this.canvas.width || this.point.x - this.radius < 0) this.velocity.x = -this.velocity.x;
        if (this.point.y + this.radius > this.canvas.height || this.point.y - this.radius < 0) this.velocity.y = -this.velocity.y;

        this.point.add(this.velocity);
    }

    startAnimation() {
        this.animate();
    }
}