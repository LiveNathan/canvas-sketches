import {Draw} from "./Draw";

export class BouncingBall {
    constructor(canvas, point, velocity, radius) {
        this.canvas = canvas;
        this.point = point;
        this.velocity = velocity;
        this.radius = radius;
        this.draw = new Draw(canvas);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.draw.clear();
        this.draw.circle(this.point, this.radius, "black");

        if (this.point.x + this.radius > this.canvas.width || this.point.x - this.radius < 0) this.velocity.x = -this.velocity.x;
        if (this.point.y + this.radius > this.canvas.height || this.point.y - this.radius < 0) this.velocity.y = -this.velocity.y;

        this.point.add(this.velocity);
    }

    startAnimation() {
        this.animate();
    }
}