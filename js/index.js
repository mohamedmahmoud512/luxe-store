var show = document.getElementById("imgShow");
var imgs = Array.from(document.getElementsByTagName("img"));
var photo = document.getElementById("img");
document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case 39:
            nextImag()
            break;
        case 37:
            prevImag()
            break;
        case 32:
            showImg()
            break;
        case 27:
            closeImag()
            break;
    }
})
var count = 0;
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) { showImage(e) });
    imgs[i].setAttribute("data-number", i)
}
function showImage(e) {
    show.classList.replace("d-none", "d-flex");
    show.classList.add("position-absolute")
    photo.src = e.target.src;
    count = e.target.getAttribute("data-number")
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling effect
        });
}
function closeImag() {
    show.classList.replace("d-flex", "d-none");
}
function nextImag() {
    count++;
    if (count == imgs.length) {
        count = 0;
    }
    photo.src = imgs[count].src;
}
function prevImag() {
    if (count == 0) {
        count = imgs.length;
    }
    count--;
    photo.src = imgs[count].src;
}
function showImg() {
    show.classList.replace("d-none", "d-flex");
    photo.src = imgs[0].src;

}