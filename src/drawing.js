import { pushTohistory } from "./history";

export function startPosition(e) {
    state.painting = true;
    draw(e)
}

export function finishedPosition() {
    state.painting = false;
    ctx.beginPath();
    pushTohistory();
}

export function draw(e) {
    if (!state.painting) return;
    ctx.lineWidth = state.width;
    ctx.strokeStyle = state.color;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
}