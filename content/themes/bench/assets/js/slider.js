const arrows = document.getElementsByClassName("arrow");
const slider = document.getElementById("testimonial-slider_inner");
let sliderChildren = document.getElementsByClassName("our-work_slider");
const sliderKidsArray = [...sliderChildren];
console.log(sliderKidsArray);

let currentSlide = 1;

for (let arrow of arrows) {
    arrow.addEventListener('click', (e) => {
        console.log(e.target.dataset);
        
    });
}

