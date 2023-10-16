import './index.css'
import {Draw} from "./Draw";
import {Point} from "./Point";
import {BouncingBall} from './BouncingBall';

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const draw = new Draw(canvas);
draw.background("black");

const balls = [];

for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 60;

    const position_x = Math.random() * canvas.width;
    const position_y = Math.random() * canvas.height;

    const divisor = 20;
    const velocity_x = ((Math.random() - 0.5) * 40) / divisor; // range: -4 to 4
    const velocity_y = ((Math.random() - 0.5) * 40) / divisor; // range: -4 to 4

    let point = new Point(position_x, position_y);
    let velocity = new Point(velocity_x, velocity_y);

    const color = getRandomColor();

    let ball = new BouncingBall(canvas, point, velocity, radius, color);
    balls.push(ball);
}

function animate() {
    requestAnimationFrame(animate);
    draw.clear();
    balls.forEach(ball => ball.animate());
}

animate();

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}