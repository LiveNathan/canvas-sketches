import {Draw} from "./draw";

const canvas = document.getElementById("canvas");
const drawer = new Draw(canvas);
drawer.setHeight(300);
drawer.setWidth(300);
drawer.background('pink');
const ctx = drawer.ctx;

ctx.fillStyle = "#272822";
ctx.fillRect(0, 0, 300, 300);

ctx.strokeStyle = "rgb(122, 123, 117)";
let [r, g, b] = [150, 150, 117];

for (let i = 0; i !== 250; i += 5) {
    drawer.rectangle(i, i, 50, 50, `rgb(${r}, ${g}, ${b})`);
    r -= 1;
    g -= 2;
    b -= 3;
    ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
}

ctx.strokeStyle = "#AE81DB";
ctx.beginPath();
ctx.moveTo(250, 30);
ctx.lineTo(50, 250);
ctx.stroke();

let [x1, y1, x2, y2, x3, y3] = [290, 50, 290, 50, 290, 90];
let [red, green, blue] = [200, 255, 255];

for (let i = 0; i !== 20; i++) {
    drawer.triangle(x1, y1, x2, y2, x3, y3, `rgb(${red}, ${green}, ${blue})`);
    x1 -= 5;
    y1 += 3;
    x2 -= 6;
    y2 += 3;
    x3 -= 7;
    y3 -= 1;
    red -= 1;
    green -= 2;
    blue -= 3;
}

[x1, y1] = [30, 200];
let radius = 3;

for (let i = 0; i !== 20; i++) {
    drawer.circle(x1, y1, radius, `rgb(${r}, ${g}, ${b})`);
    x1 += 5;
    y1 += 3;
    radius += 1;
    r -= 1;
    g -= 2;
    b -= 10;
}