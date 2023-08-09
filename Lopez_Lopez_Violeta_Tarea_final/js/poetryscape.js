///*POETRYSCAPE*/// página oculta, acceso a través de [|] en el inicio
///Pasando sobre los elementos y clickándolos se genera un paisaje poético

///VARIABLES DIV PADRE Y DIVS HIJOS
const parent = document.querySelector('.poetryscape');
const children = parent.querySelectorAll('.verso');
///HOVER OVER DIVS REPRODUCE 1 SONIDO DISTINTO EN CADA UNO
///hago un solo event listener para los 22 divs y llamo al sonido correspondiente a cada uno
function hoverSound(event) {
    const id = event.currentTarget.id;
    const audio = new Audio(`assets/sounds/sound${id}.mp3`);
    audio.play();   
  }
  
children.forEach((child, index) => {
    child.id = index + 1;
    child.addEventListener("mouseover", hoverSound);
  });
///CLICK EN DIVS MUESTRA UNA IMAGEN POR CADA UNO EN EL CENTRO DURANTE UN TIEMPO DETERMINADO
///un event listener para los 22 divs, mostrando la imagen correspondiente a cada uno con el click
function clickImage(event) {
    const id = event.currentTarget.id;
    const picture = document.querySelector(`#image${id}`);
    picture.style.display = "block";

  setTimeout(function() {
    picture.style.display = "none";
  }, 1200);
  }
  
children.forEach((child, index) => {
    child.id = index + 1;
    child.addEventListener("click", clickImage);
  });
///VARIABLES POESÍA CENTRAL
const palabras = document.getElementById("12");
const poem = document.getElementById("poem");
///CLICK EN EL DIV CENTRAL MUESTRA LA POESÍA POR UN TIEMPO DETERMINADO
palabras.addEventListener("click", displayPoem);
function displayPoem() {
    poem.style.display = "block";
    setTimeout(function() {
        poem.style.display = "none";
      }, 3500);
  }