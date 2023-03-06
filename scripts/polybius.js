const image = document.getElementsByClassName("polybius")[0];

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function changeImg(){
    await delay(3000);
    image.src = "./../assets/images/mpImages/polybius3.gif";
    console.log("Changed img");
}

changeImg();

// image.addEventListener("click", e => document.location.href = "https://sites.google.com/iu.edu/mega-puzzle/home");
// image.addEventListener("keydown", e => document.location.href = "https://sites.google.com/iu.edu/mega-puzzle/home")