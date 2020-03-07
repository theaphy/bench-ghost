const arrows = document.getElementsByClassName("arrow");
const slider = document.getElementById("testimonial-slider_inner");

for (let arrow of arrows) {
    arrow.addEventListener('click', (e) => {
        console.log(e.target.id);
        console.log(slider.style.transform = "translateX(-1210px)");
    });
}

