import './index.css'
import {Draw} from "./Draw";
import {Point} from "./Point";

const canvas = document.getElementById("canvas");
const draw = new Draw(canvas);
draw.background("black");

const circleOrigin = new Point(canvas.width/2, canvas.height/2);
draw.circle(circleOrigin, 10);

let [xChange, yChange] = [0.3, 0.1];
function animate(){
    draw.background("gold");

    p.x += xChange;
    p.y += yChange;

    draw.circle(p, r, "black");
    setTimeout(animate, 10);
}

animate()