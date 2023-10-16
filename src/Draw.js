import {Point} from "./Point";

export class Draw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.bgColor = '#ffffff';
    }

    setWidth(width) {
        this.canvas.width = width;
        this.width = width;
    }

    setHeight(height) {
        this.canvas.height = height;
        this.height = height;
    }

    background(color) {
        this.ctx.fillStyle = color;
        this.bgColor = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    clear() {
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    rectangle(origin, size, color) {  // origin is top left point
        this.ctx.fillStyle = color;
        this.ctx.fillRect(origin.x, origin.y, size.x, size.y);
    }

    triangle(point1, point2, point3, color = '#AE81DB') {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(point1.x, point1.y);
        this.ctx.lineTo(point2.x, point2.y);
        this.ctx.lineTo(point3.x, point3.y);
        this.ctx.closePath();
        this.ctx.fill();
    }

    circle(origin, radius, color = 'black') {
        this.ctx.beginPath();
        this.ctx.arc(origin.x, origin.y, radius, 0, Math.PI * 2);
        // this.ctx.fillStyle = color; // set fill color
        // this.ctx.fill(); // fill circle
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }
}