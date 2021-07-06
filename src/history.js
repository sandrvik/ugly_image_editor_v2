export function clear() {
    let changedImg = new Image();
    changedImg.src = state.history[0];
    pushTohistory();
    changedImg.addEventListener('load', () => ctx.drawImage(changedImg, 0, 0))
}


export function undo() {
    if (state.historyStep > 0) {
        state.historyStep--;
        let changedImg = new Image();
        changedImg.src = state.history[state.historyStep];
        changedImg.addEventListener('load', () => ctx.drawImage(changedImg, 0, 0))
    }
}

export function redo() {
    if (state.historyStep < state.history.length - 1) {
        state.historyStep++;
        let changedImg = new Image();
        changedImg.src = state.history[state.historyStep];
        changedImg.addEventListener('load', () => ctx.drawImage(changedImg, 0, 0))
    }
}

export function pushTohistory() {
    state.historyStep++;
    if (state.historyStep < state.history.length) { state.history.length = state.historyStep; }
    state.history.push(document.querySelector('#canvas').toDataURL());
}