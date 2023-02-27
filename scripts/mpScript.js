//const header = document.getElementById("header_heading");
const arcadeImg = document.getElementById("arcadeBG");
const screenDiv = document.getElementById("screen");
const buttOne = document.getElementById("buttOne");
const polybius = document.getElementById("polybiusImg");


const gameImgs = document.getElementsByClassName("puzzImg");

window.addEventListener("resize", e => changeWidths());
window.addEventListener("DOMContentLoaded", e => changeWidths());

//Every ten seconds as well
const changeWInterval = setInterval(changeWidths, 10000);

function changeWidths(){
    //header.style.fontSize = (window.innerWidth / 30)+"px";
    const arcadeBGW = 535.0;
    const imgSqSize = 45.0;
    const xStartOffset = 121.0;
    const yStartOffset = 194.0;
    const margins = 8.0; 

    changeElementSizeAndLocation(screenDiv, arcadeImg, 276.0/353.0, 353.0/arcadeBGW, 94.0/353.0, 182.0/353.0); // Resize screen div
    changeElementSizeAndLocation(buttOne, arcadeImg, 23.0/29.0, 29.0/arcadeBGW, 127.0/29.0, 527.0/29.0); // Resize butt one

    for(let i=0; i<gameImgs.length - 1; i++){
        const imgsPerRow = 6;
        row = Math.floor(i/imgsPerRow);
        col = i%imgsPerRow;

        changeElementSizeAndLocation(gameImgs[i], arcadeImg, 1, imgSqSize/arcadeBGW,
            (xStartOffset + col * (imgSqSize + margins))/imgSqSize, (yStartOffset + row * (imgSqSize + margins))/imgSqSize);

    }
    changeElementSizeAndLocation(gameImgs[gameImgs.length-1], arcadeImg, 0.5, imgSqSize * 1.5/arcadeBGW, 
        (xStartOffset + 2.3 * (imgSqSize + margins))/(imgSqSize * 1.5), (yStartOffset + 3.1 * (imgSqSize + margins))/(imgSqSize * 1.5));

    // Polybius
    changeElementSizeAndLocation(polybius, arcadeImg, 750.0/650.0, 85.0/arcadeBGW, (xStartOffset + 113.0)/85.0, (yStartOffset + 55.0)/85.0);
}

function changeElementSizeAndLocation(element, container, whRatio, wRatio, offXRatio, offYRatio){
    let w = Math.round(container.clientWidth * wRatio);
    element.style.width = w + "px";
    element.style.height = Math.round(w * whRatio) + "px";
    element.style.top = Math.round(w * offYRatio) + container.offsetTop + "px";
    element.style.left = Math.round(w * offXRatio) + container.offsetLeft + "px";
}
