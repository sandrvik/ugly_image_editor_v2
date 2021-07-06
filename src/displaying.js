import { pushTohistory } from "./history";

export function renderImage() {
    img.height = (img.height > state.maxHeight) ? state.maxHeight : img.height;
    img.width = (img.width > state.maxWidth) ? state.maxWidth : img.width;
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    pushTohistory();
}

export function show(src = state.src) {
    img.src = state.src;
    img.addEventListener('load', () => {
        state.history = [];
        renderImage();
    })
}

export function handleImage(e){
    let reader = new FileReader();
    reader.onload = function(event){
        window.img = new Image();
        img.onload = show();
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}