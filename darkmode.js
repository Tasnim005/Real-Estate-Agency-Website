const images = document.images
const textContainer = document.querySelectorAll('.textContainer')
const aboutLanding = document.querySelectorAll('.aboutLanding')
const contactLanding = document.querySelectorAll('.contactLanding')
console.log(contactLanding)

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('.mode');


const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  for(let i=0; i<images.length; i++){
    images[i].style.filter = 'brightness(80%)'
  }
  for(let i=0; i<textContainer.length; i++){
    textContainer[i].style.background= 'rgba(15, 15, 15, 0.8)'
  }
  for(let i=0; i<aboutLanding.length; i++){
    aboutLanding[i].style.backgroundBlendMode = "darken"
  }
  for(let i=0; i<contactLanding.length; i++){
    contactLanding[i].style.backgroundBlendMode = "darken"
  }
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
  for(let i=0; i<images.length; i++){
    images[i].style.filter = 'brightness(100%)'
  }
  for(let i=0; i<textContainer.length; i++){
    textContainer[i].style.background= 'rgba(255, 255, 255, 0.4)'
  }
  for(let i=0; i<aboutLanding.length; i++){
    aboutLanding[i].style.backgroundBlendMode = "normal"
  }  
  for(let i=0; i<contactLanding.length; i++){
    contactLanding[i].style.backgroundBlendMode = "normal"
  }  
  // contactLanding.style.backgroundBlendMode = "normal"
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }

  // *****
  
});

