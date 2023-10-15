import './index.css'
import {Draw} from "./Draw";
import {Point} from "./Point";
import {BouncingBall} from './BouncingBall';

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const draw = new Draw(canvas);
draw.background("white");

let point = new Point(canvas.width / 2, canvas.height / 2);
let velocity = new Point(2, 2);
let radius = 10;

let ball = new BouncingBall(canvas, point, velocity, radius);
ball.startAnimation();