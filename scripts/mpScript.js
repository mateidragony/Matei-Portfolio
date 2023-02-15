//const header = document.getElementById("header_heading");
const arcadeImg = document.getElementById("arcadeBG");
const screenDiv = document.getElementById("screen");
const buttOne = document.getElementById("buttOne");
const tetris = document.getElementById("tetrisImg");
const frogger = document.getElementById("froggerImg");


window.addEventListener("resize", e => changeWidths());
window.addEventListener("DOMContentLoaded", e => changeWidths());

function changeWidths(){
    //header.style.fontSize = (window.innerWidth / 30)+"px";
    const arcadeBGW = 535.0;
    116, 198;
    changeElementSizeAndLocation(screenDiv, arcadeImg, 276.0/353.0, 353.0/arcadeBGW, 99.0/353.0, 184.0/353.0); // Resize screen div
    changeElementSizeAndLocation(buttOne, arcadeImg, 23.0/29.0, 29.0/arcadeBGW, 127.0/29.0, 527.0/29.0); // Resize butt one
    changeElementSizeAndLocation(tetris, arcadeImg, 1, 56.0/arcadeBGW, 116.0/56.0, 198.0/56.0);
    changeElementSizeAndLocation(frogger, arcadeImg, 1, 56.0/arcadeBGW, 186.0/56.0, 198.0/56.0);

}

function changeElementSizeAndLocation(element, container, whRatio, wRatio, offXRatio, offYRatio){
    let w = Math.round(container.clientWidth * wRatio);
    element.style.width = w + "px";
    element.style.height = Math.round(w * whRatio) + "px";
    element.style.top = Math.round(w * offYRatio) + container.offsetTop + "px";
    element.style.left = Math.round(w * offXRatio) + container.offsetLeft + "px";
}
