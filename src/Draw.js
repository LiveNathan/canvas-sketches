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

    rectangleCenterOrigin(origin, size, color) {  // origin is center point
        this.ctx.fillStyle = color;
        let x = origin.x - size.x / 2;
        let y = origin.y - size.y / 2;
        this.ctx.fillRect(x, y, size.x, size.y);
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

    line(start, end, color = '#AE81DB', lineWidth = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(start.x, start.y);
        this.ctx.lineTo(end.x, end.y);
        this.ctx.stroke();
    }

    drawFractalTree(startPos, length, angle, depth) {
        const GOLDEN_RATIO = 1.61803398875
        if (depth === 0) {
            return;
        }

        // calculate the end position
        const endPos = new Point(
            startPos.x + length * Math.sin(angle),
            startPos.y - length * Math.cos(angle),
        );

        // convert the depth to a hex color for a gradual color change
        const depthColor = Math.floor((depth / 10) * 255).toString(16);
        const color = '#' + depthColor + depthColor + depthColor;

        // draw the branch
        this.line(startPos, endPos, color);

        // draw the next branches
        this.drawFractalTree(endPos, length / GOLDEN_RATIO, angle + Math.PI / 7, depth - 1);
        this.drawFractalTree(endPos, length / GOLDEN_RATIO, angle - Math.PI / 7, depth - 1);
    }
}