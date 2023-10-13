import './index.css'

const canvas = document.getElementById("canvas");
[canvas.width, canvas.height] = [300, 300];
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(200, 0, 0)' // red
ctx.fillRect(10, 10, 300, 300); // starting x, starting y, width, height
ctx.clearRect(50, 50, 50, 50);
ctx.strokeRect(100, 100, 50, 50);
ctx.strokeRect(110, 110, 50, 50);
ctx.strokeRect(120, 120, 50, 50);

ctx.strokeStyle = '#AE81DB'
ctx.beginPath()
ctx.moveTo(250, 30)
ctx.lineTo(50, 250)
ctx.stroke()

function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, color = 'black') {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
}

drawTriangle(ctx, 50, 50, 100, 100, 50, 200);

function drawCircle(x, y, r, color = "black") {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
}

drawCircle(150, 150, 50);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(point) {
        this.x += point.x
        this.y += point.y
    }
}

const origin = new Point(0, 0);
const offset = new Point(10, 10);
origin.add(offset);