const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)
checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            boxes.classList.add(show)
        } else {
            boxes.classList.remove(show)
        }
    })
}