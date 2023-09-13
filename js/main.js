
//VARIABLES DIVS INICIO
const uno = document.getElementById("div1");
const dos = document.getElementById("div2");
const tres = document.getElementById("div3");
const cinco = document.getElementById("div5");
const diez = document.getElementById("div10");
const once = document.getElementById("div11");
const doce = document.getElementById("div12");

//VARIABLES ELEMENTOS INICIO y BIO
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const sound = document.getElementById("sound");
const sound2 = document.getElementById("sound2");
const poesia = document.getElementById("poesia");
const text3 = document.getElementById("myText");

//frases de la bio, aparece una cada vez que se pulsa "Inventar" en orden random
let frases = [
  "Violeta López López nació al borde del color, en la línea breve que separa el gesto del sonido cada vez que la ola se rompe contra el acantilado. Al no haber sido elegida por los astros, subió al volcán y desde allí observa cómo el fuego y la tierra se funden escribiendo la más bella y amenazadora de las tesis doctorales.", 
  "Violeta López López es un animal mamífero a la vez que ave migratoria. Nacida en zonas rocosas, descendió al mar a vuelo raso. Se tiende al sol en primavera, otoño, invierno y verano. Es herbívora, bípeda y de pelaje castaño.", 
  "Violeta López López existe como existen las formas de las nubes: idea subjetiva, identidad del viento. Llegó a la meta en primeros puestos en varias carreras universitarias y, tras mucho correr, descubrió que su verdadera vocación era mirar el cielo.", 
  "Violeta López López son tres palabras que, como todas las palabras, perdieron el vínculo con aquello que pretendían designar. La distancia es insalvable. El yo es indecible.",
  "01010110 01101001 01101111 01101100 01100101 01110100 01100001 00100000 01001100 01101111 01110000 01100101 01111010 00100000 01001100 01101111 01110000 01100101 01111010 00100000 01101110 01101111 00100000 01110000 01110101 01100101 01100100 01100101 00100000 01110011 01100101 01110010 00100000 01110010 01100101 01100100 01110101 01100011 01101001 01100100 01100001 00100000 01100001 00100000 01101100 01101111 01110011 00100000 01101100 01101001 01101101 01101001 01110100 01100101 01110011 00100000 01100100 01100101 00100000 01110101 01101110 00100000 01100011 01101111 01100100 01101001 01100111 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01101001 01101111 00101110"
];

//VENTANA
let windowW = window.innerWidth;
let windowH = window.innerHeight;


//EVENT LISTENERS inicio
//en el div central superior aparece/desaparece POESÍA OCULTA según el cursor está encima o no
uno.addEventListener("mouseover", revealText);
uno.addEventListener("mouseout", backToBlack);
//click sobre el div izquierdo superior para escuchar un sonido
dos.addEventListener("click", soundPlay);
//click sobre el div derecho superior para escuchar otro sonido
tres.addEventListener("click", soundPlay2);
//hover over div central de segunda fila para cambiar texto "bajo el negro" a "que vela y revela" y de vuelta al primero al salir del div
cinco.addEventListener("mouseenter", replaceText);
cinco.addEventListener("mouseleave", firstText);
//hover over el div inferior izquierdo para escuchar una poesía a 3 voces, sólo mientras el cursor está encima y retoma desde dónde se paró si se vuelve dentro
diez.addEventListener("mouseover", escucha);
diez.addEventListener("mouseout", silencia);
//texto que aparece/desaparece cuando el cursor está dentro/fuera invitando a entrar por la puerta [|]
once.addEventListener("mouseover", revealText);
once.addEventListener("mouseout", backToBlack);
//click en "Busca" para mostrar la poesía a 3 voces del audio de "escucha", saliendo en ubicación random que cambia con cada click
doce.addEventListener("click", finder);


//FUNCIONES inicio

function revealText() {
  text.style.display = "block"; 
  text2.style.display = "block"; 
}
function backToBlack() {
  text.style.display = "none";
  text2.style.display = "none";
}
function soundPlay() {
    sound.play();
}
function soundPlay2() {
    sound2.play();
}
function replaceText() {
    div5.innerHTML = "that veils and reveals";
}
function firstText() {
    div5.innerHTML = "Beneath the black";
}
function escucha() {
  poesia.play();
}
function silencia() {
  poesia.pause();

}
//función para colocar el texto poesía en ubicación random 
function finder() {
  text3.style.display = "block";
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  text3.style.left = x + "px";
  text3.style.top = y + "px";
}
//función para sacar las frases en orden random en la bio
function inventar() {
    var randomIndex = Math.floor(Math.random() * frases.length);
    document.getElementById("biorandom").innerHTML = frases[randomIndex];
  }


