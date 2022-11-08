const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)
checkBoxes();
function checkBoxes() {
    window.innerHeight / 5 * 4;
}