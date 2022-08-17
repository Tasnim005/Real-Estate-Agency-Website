// Animated counter
const counters = document.querySelectorAll(".counter");
const speed = 100

counters.forEach(counter => {
    const updateCount = ()=>{
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText;
        const increment = target/speed

        if(count<target){
            counter.innerText = Math.ceil(count + increment)
            setTimeout(updateCount, 1)
        }else{
            count.innerText = target
        }
    }
    updateCount()
});

const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector("nav ul")

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open")
}
)

const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

let activeSlide = 0;

prevButton.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

nextButton.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

function setBgToBody() {
  carousel.style.backgroundImage = slides[activeSlide];
}

function setActiveSlide() {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
}

// Range slider
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

const accordion = document.querySelectorAll('.container.accordion')
const accordionBtn = document.querySelector('.btn2')
console.log(accordionBtn)

accordionBtn.addEventListener('click', slideDown)
function slideDown(e){
  for(let i=0; i<accordion.length; i++){
    accordion[i].style.display = 'block'
  }
  accordionBtn.style.display = 'none'
}