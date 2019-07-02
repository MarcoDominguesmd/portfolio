
// CV
const navCV = document.getElementById('navCV');
const sectionCV = document.getElementById('section-cv');
const closeCV = document.getElementById('close-cv');
navCV.addEventListener('click', function(){
  sectionCV.style.display = "block";
});
closeCV.addEventListener('click', function(){
  sectionCV.style.display = "none";
});



// CHECKBOX hide Navmenu
var navBar = document.querySelector('#navBar')
const navCheckbox = document.querySelector('#navMenu');
const hideNav = function(){
  navCheckbox.checked = false;
  navBar.style.display = "none";
  navCheckbox.style.boxShadow = "initial";
  setTimeout(function(){
    navCheckbox.style.backgroundImage = "url(./items/navlogo.png)";
  },300)
}

navCheckbox.addEventListener('change', function(e){
  if(navCheckbox.checked){
    navBar.style.display = "block";
    this.style.boxShadow = "0em 0em 5em 10em rgba(45, 105, 128, 0.3)";
    this.style.backgroundImage = "none";
  }
  else{hideNav()}
});
//navCheckbox.addEventListener('blur', hideNav);