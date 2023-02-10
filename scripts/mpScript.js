const header = document.getElementById("header_heading");
const arcadeImg = document.getElementById("arcadeBG");
const screenDiv = document.getElementById("screen");
const buttOne = document.getElementById("buttOne");

const t = setInterval(changeWidths, 10)

function changeWidths(){
    header.style.fontSize = (window.innerWidth / 30)+"px";
    
    changeElementSizeAndLocation(screenDiv, arcadeImg, 276.0/353.0, 353.0/535.0, 99.0/353.0, 184.0/353.0); // Resize screen div
    changeElementSizeAndLocation(buttOne, arcadeImg, 23.0/29.0, 29.0/535.0, 127.0/29.0, 527.0/29.0); // Resize butt one

}

function changeElementSizeAndLocation(element, container, whRatio, wRatio, offXRatio, offYRatio){
    let w = Math.round(container.clientWidth * wRatio);
    element.style.width = w + "px";
    element.style.height = Math.round(w * whRatio) + "px";
    element.style.top = Math.round(w * offYRatio) + container.offsetTop + "px";
    element.style.left = Math.round(w * offXRatio) + container.offsetLeft + "px";
}
