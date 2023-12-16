
const sesgoUno = document.querySelector(".header__span--uno"); 
const sesgoDos = document.querySelector(".header__span--dos"); 
window.addEventListener("scroll",
function(){
    const value1 = -15 + window.scrollY/45;/* -15 en css mismo dato */
    const value2 = 15 + window.scrollY/-45;/* 15 en css mismo dato */
    sesgoUno.style.transform = "skewY("+value1+"deg)";
    sesgoDos.style.transform = "skewY("+value2+"deg)";

})