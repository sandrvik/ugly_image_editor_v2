import { handleImage, show } from './displaying';
import { draw, finishedPosition, startPosition } from './drawing';
import { clear, redo, undo } from './history';
import './styles.css'

window.state = {
    width: 5,
    color: 'black',
    maxHeight: window.innerHeight * 0.6,
    maxWidth: window.innerWidth * 0.8,
    history: [],
    historyStep: -1,
    painting: false,
    src: "test-image.webp",
}

window.img = new Image();

window.canvas = document.querySelector('#canvas');
window.ctx = canvas.getContext('2d');

window.colorBtn = document.querySelector('#color');
colorBtn.addEventListener('change', () => {
    state.color = colorBtn.selectedOptions[0].value;
})

window.sizeSelect = sizeForm.size;
sizeSelect.addEventListener("change", () => {
    state.width = +sizeSelect.selectedOptions[0].value;
})

window.uploadBtn = document.querySelector('#myFile');
uploadBtn.addEventListener('change', handleImage)


canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

document.querySelector("#clear").addEventListener('click', clear);
document.querySelector("#undo").addEventListener('click', undo);
document.querySelector("#redo").addEventListener('click', redo);

show();