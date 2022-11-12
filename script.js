console.log("Page loading...");

function changeImage(img) {     
    img.src = img.src.replace("-1", "-2"); 
}
function changeImageBack(img) {     
    img.src = img.src.replace("-2", "-1"); 
}



var alertBox = document.querySelector("#cookieBox");

function accept(element) {
    element.remove();
    alertBox.remove();
}