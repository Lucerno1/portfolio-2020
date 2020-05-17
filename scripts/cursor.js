// bron: http://jsfiddle.net/BfLAh/1/ & Rens Nooren

$(document).mousemove(function (e) {
    var imageX = e.pageX - ($("#image").width() / 2);
    var imageY = e.pageY - ($("#image").height() / 2);
    $("#image").css({ left: imageX, top: imageY });
});


// Ik cursor image
document.getElementById("ik").addEventListener("mouseover", ikShow);
document.getElementById("ik").addEventListener("mouseout", imageHidden);

function ikShow() {
    image.style.display = "block";
    image.src = "../images/pf-bram.png";
}

// Designer cursor image
document.getElementById("designer").addEventListener("mouseover", designerShow);
document.getElementById("designer").addEventListener("mouseout", imageHidden);

function designerShow() {
    image.style.display = "block";
    image.src = "../images/futura-poster.png";
    
}

// Frontend cursor image
document.getElementById("frontend").addEventListener("mouseover", frontendShow);
document.getElementById("frontend").addEventListener("mouseout", imageHidden);

function frontendShow() {
    image.style.display = "block";
    image.src = "../images/joyah-macbook.png";
}


// View Projects cursor image
document.getElementById("arrow").addEventListener("mouseover", outlinedArrow);
document.getElementById("arrow").addEventListener("mouseout", filledArrow);

function outlinedArrow() {
    arrow.src = "../images/outlined-arrow.png";
}

function filledArrow() {
    arrow.src = "../images/arrow.png";
}




// Hide cursor image
function imageHidden() {
    image.style.display = "none";
}