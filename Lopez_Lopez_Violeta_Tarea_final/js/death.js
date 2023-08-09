/* 
var image1 = document.getElementById('image1');

image1.addEventListener('click', function() {
    image1.src = '../../../assets/images/death.png';
});  */




////SONIDOS///////
 ///VARIABLES DIV PADRE Y DIVS HIJOS
/* const parent = document.querySelector('.death');
const children = parent.querySelectorAll('.row');
///HOVER OVER DIVS REPRODUCE 1 SONIDO DISTINTO EN CADA UNO

function hoverSound(event) {
    const id = event.currentTarget.id;
    const audio = new Audio(`../../../assets/sounds/sound${id}.mp3`);
    audio.play();   
  }
 
children.forEach((child, index) => {
    child.id = index + 1;
    child.addEventListener("mouseover", hoverSound);
  });
 */
/*   const parent = document.querySelector('.death');
const rows = parent.querySelectorAll('.row');

function hoverSound(event) {
  const row = event.currentTarget;
  const id = row.id;
  const audio = new Audio(`../../../assets/sounds/sound${id}.mp3`);
  audio.play(); 
  event.stopPropagation();   
}

rows.forEach((row) => {
  row.addEventListener("mouseover", hoverSound);
}); */
const parent = document.querySelector('.death');

function hoverSound(event) {
  const row = event.target.closest('.row');
  if (row) {
    const id = row.id;
    const audio = new Audio(`../../../assets/sounds/sound${id}.mp3`);
    audio.play();
  }
}

parent.addEventListener("mouseover", hoverSound);


////////////////

//////TEXT RANDOM POSITION//////
var div7 = document.getElementById('image7');
var text2 = document.getElementById('mytext2');

div7.addEventListener('click', showText);

function showText() {
  text2.style.display = 'block';

}
var div2 = document.getElementById("image2");
var text1 = document.getElementById("mytext1");
div2.addEventListener("click", finder);
function finder() {
    text1.style.display = "block";
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    text1.style.left = x + "px";
    text1.style.top = y + "px";
}
//////

/* //////CAMBIO IMAGEN ON CLICK////
var image1 = document.getElementById('image1');
var originalSrc = image1.src; // Store the original image source

image1.addEventListener('click', function() {
  image1.src = '../../../assets/images/death.png';

  // Set a timeout to revert the image back to the original after 10 seconds
  setTimeout(function() {
    image1.src = originalSrc; // Restore the original image source
  }, 10000); // 10000 milliseconds = 10 seconds
}); 
///////// */
/* 
function showRandomText() {
    // Obtén una referencia al elemento contenedor
    var texto1 = document.getElementById('image2');
  
    // Crea un nuevo elemento de texto
    var textElement = document.createElement('div');
    textElement.className = 'random-text';
    textElement.textContent = 'Texto aleatorio';
  
    // Genera posiciones aleatorias para el elemento de texto
    var randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randomY = Math.floor(Math.random() * (window.innerHeight - 100));
  
    // Establece las posiciones aleatorias
    textElement.style.left = randomX + 'px';
    textElement.style.top = randomY + 'px';
  
    // Agrega el elemento de texto al contenedor
    texto1.appendChild(textElement);
  }
 */
/////////CAMBIOS IMAGEN SECUENCIA////////

  
   function changeOthers(index) {
    var newImages = [
      "../../../assets/images/gain1.png",
      "../../../assets/images/gain2.png",
      "../../../assets/images/gain3.png",
      "../../../assets/images/gain4.png",
      "../../../assets/images/gain5.png",
      "../../../assets/images/gain6.png",
      "../../../assets/images/gain7.png",
      "../../../assets/images/gain8.png",
      "../../../assets/images/gain9.png",
      "../../../assets/images/gain10.png",
      "../../../assets/images/gain11.png",
      "../../../assets/images/gain12.png",
      "../../../assets/images/gain13.png",
      "../../../assets/images/gain14.png",
      "../../../assets/images/gain15.png",
      "../../../assets/images/gain16.png",
      "../../../assets/images/gain17.png",
      "../../../assets/images/gain18.png",
      "../../../assets/images/gain19.png",
      "../../../assets/images/gain20.png",
      "../../../assets/images/gain21.png",
      "../../../assets/images/gain22.png",
      "../../../assets/images/gain23.png",
      "../../../assets/images/gain24.png",
      "../../../assets/images/gain25.png",
      "../../../assets/images/gain26.png",
      "../../../assets/images/gain27.png",
      "../../../assets/images/gain28.png",
      
      
    ];
  
    var originalImages = [
     
      "../../../assets/images/neutron_01.gif",
      "../../../assets/images/neutron_02.gif",
      "../../../assets/images/neutron_03.gif",
      "../../../assets/images/neutron_04.gif",
      "../../../assets/images/neutron_05.gif",
      "../../../assets/images/neutron_06.gif",
      "../../../assets/images/neutron_07.gif",
      "../../../assets/images/neutron_08.gif",
      "../../../assets/images/neutron_09.gif",
      "../../../assets/images/neutron_10.gif",
      "../../../assets/images/neutron_11.gif",
      "../../../assets/images/neutron_12.gif",
      "../../../assets/images/neutron_13.gif",
      "../../../assets/images/neutron_14.gif",
      "../../../assets/images/neutron_15.gif",
      "../../../assets/images/neutron_16.gif",
      "../../../assets/images/neutron_17.gif",
      "../../../assets/images/neutron_18.gif",
      "../../../assets/images/neutron_19.gif",
      "../../../assets/images/neutron_20.gif",
      "../../../assets/images/neutron_21.gif",
      "../../../assets/images/neutron_22.gif",
      "../../../assets/images/neutron_23.gif",
      "../../../assets/images/neutron_24.gif",
      "../../../assets/images/neutron_25.gif",
      "../../../assets/images/neutron_26.gif",
      "../../../assets/images/neutron_27.gif",
      "../../../assets/images/neutron_28.gif",
      
    ];
    var divs = document.getElementsByClassName("column");
  var delay = 150; // Delay between each image change (in milliseconds)

  for (var i = 0; i < divs.length; i++) {
    if (i !== index) {
      var div = divs[i];
      var image = div.querySelector("img");
      var newImageIndex = i % newImages.length; // Select new image based on index

      setTimeout(function (image, newImageIndex) {
        return function () {
          // Change the image source to the new image
          image.src = newImages[newImageIndex];

          setTimeout(function () {
            // Restore the original image source
            image.src = originalImages[newImageIndex];
          }, delay);
        };
      }(image, newImageIndex), delay * (i - index));
    }
  }
}

////
function changeOthers2(index) {
  var newImages = [
    "../../../assets/images/glow1.png", 
    "../../../assets/images/glow2.png",
    "../../../assets/images/glow3.png",
    "../../../assets/images/glow4.png",
    "../../../assets/images/glow5.png",
    "../../../assets/images/glow6.png",
    "../../../assets/images/glow7.png",
    "../../../assets/images/glow8.png",
    "../../../assets/images/glow9.png",
    "../../../assets/images/glow10.png",
    "../../../assets/images/glow11.png",
    "../../../assets/images/glow12.png",
    "../../../assets/images/glow13.png",
    "../../../assets/images/glow14.png",
    "../../../assets/images/glow15.png",
    "../../../assets/images/glow16.png",
    "../../../assets/images/glow17.png",
    "../../../assets/images/glow18.png",
    "../../../assets/images/glow19.png",
    "../../../assets/images/glow20.png",
    "../../../assets/images/glow21.png",
    "../../../assets/images/glow22.png",
    "../../../assets/images/glow23.png",
    "../../../assets/images/glow24.png",
    "../../../assets/images/glow25.png",
    "../../../assets/images/glow26.png",
    "../../../assets/images/glow27.png",
    "../../../assets/images/glow28.png",
    
    
  ];

  var originalImages = [
   
    "../../../assets/images/gifV_01.gif", 
    "../../../assets/images/gifV_02.gif",
    "../../../assets/images/gifV_03.gif",
    "../../../assets/images/gifV_04.gif",
    "../../../assets/images/gifV_05.gif",
    "../../../assets/images/gifV_06.gif",
    "../../../assets/images/gifV_07.gif",
    "../../../assets/images/gifV_08.gif",
    "../../../assets/images/gifV_09.gif",
    "../../../assets/images/gifV_10.gif",
    "../../../assets/images/gifV_11.gif",
    "../../../assets/images/gifV_12.gif",
    "../../../assets/images/gifV_13.gif",
    "../../../assets/images/gifV_14.gif",
    "../../../assets/images/gifV_15.gif",
    "../../../assets/images/gifV_16.gif",
    "../../../assets/images/gifV_17.gif",
    "../../../assets/images/gifV_18.gif",
    "../../../assets/images/gifV_19.gif",
    "../../../assets/images/gifV_20.gif",
    "../../../assets/images/gifV_21.gif",
    "../../../assets/images/gifV_22.gif",
    "../../../assets/images/gifV_23.gif",
    "../../../assets/images/gifV_24.gif",
    "../../../assets/images/gifV_25.gif",
    "../../../assets/images/gifV_26.gif",
    "../../../assets/images/gifV_27.gif",
    "../../../assets/images/gifV_28.gif",
    
  ];
  
  var divs = document.getElementsByClassName("column");
var delay = 150; // Delay between each image change (in milliseconds)

for (var i = 0; i < divs.length; i++) {
  if (i !== index) {
    var div = divs[i];
    var image = div.querySelector("img");
    var newImageIndex = i % newImages.length; // Select new image based on index

    setTimeout(function (image, newImageIndex) {
      return function () {
        // Change the image source to the new image
        image.src = newImages[newImageIndex];

        setTimeout(function () {
          // Restore the original image source
          image.src = originalImages[newImageIndex];
        }, delay);
      };
    }(image, newImageIndex), delay * (i - index));
  }
}
}

 
///////CAMBIO TODAS IMAGENES/////////
function changeAll(index) {
  var newImages = [
    "../../../assets/images/collide_01.gif",
    "../../../assets/images/collide_02.gif",
    "../../../assets/images/collide_03.gif",
    "../../../assets/images/collide_04.gif",
    "../../../assets/images/collide_05.gif",
    "../../../assets/images/collide_06.gif",
    "../../../assets/images/collide_07.gif",
    "../../../assets/images/collide_08.gif",
    "../../../assets/images/collide_09.gif",
    "../../../assets/images/collide_10.gif",
    "../../../assets/images/collide_11.gif",
    "../../../assets/images/collide_12.gif",
    "../../../assets/images/collide_13.gif",
    "../../../assets/images/collide_14.gif",
    "../../../assets/images/collide_15.gif",
    "../../../assets/images/collide_16.gif",
    "../../../assets/images/collide_17.gif",
    "../../../assets/images/collide_18.gif",
    "../../../assets/images/collide_19.gif",
    "../../../assets/images/collide_20.gif",
    "../../../assets/images/collide_21.gif",
    "../../../assets/images/collide_22.gif",
    "../../../assets/images/collide_23.gif",
    "../../../assets/images/collide_24.gif",
    "../../../assets/images/collide_25.gif",
    "../../../assets/images/collide_26.gif",
    "../../../assets/images/collide_27.gif",
    "../../../assets/images/collide_28.gif",
  ];

  var originalImages = [
    
    "../../../assets/images/neutron_01.gif",
    "../../../assets/images/neutron_02.gif",
    "../../../assets/images/neutron_03.gif",
    "../../../assets/images/neutron_04.gif",
    "../../../assets/images/neutron_05.gif",
    "../../../assets/images/neutron_06.gif",
    "../../../assets/images/neutron_07.gif",
    "../../../assets/images/neutron_08.gif",
    "../../../assets/images/neutron_09.gif",
    "../../../assets/images/neutron_10.gif",
    "../../../assets/images/neutron_11.gif",
    "../../../assets/images/neutron_12.gif",
    "../../../assets/images/neutron_13.gif",
    "../../../assets/images/neutron_14.gif",
    "../../../assets/images/neutron_15.gif",
    "../../../assets/images/neutron_16.gif",
    "../../../assets/images/neutron_17.gif",
    "../../../assets/images/neutron_18.gif",
    "../../../assets/images/neutron_19.gif",
    "../../../assets/images/neutron_20.gif",
    "../../../assets/images/neutron_21.gif",
    "../../../assets/images/neutron_22.gif",
    "../../../assets/images/neutron_23.gif",
    "../../../assets/images/neutron_24.gif",
    "../../../assets/images/neutron_25.gif",
    "../../../assets/images/neutron_26.gif",
    "../../../assets/images/neutron_27.gif",
    "../../../assets/images/neutron_28.gif",
  ]

  var divs = document.getElementsByClassName("column");
  for (var i = 0; i < divs.length; i++) {
    if (i !== index) {
      var div = divs[i];
      var image = div.querySelector("img");
      var newImageIndex = i % newImages.length; // Select new image based on index

      // Change the image source to the new image
      image.src = newImages[newImageIndex];

      // Wait for a quarter of a second (250 milliseconds)
      setTimeout(function(image, originalImage) {
        return function() {
          // Restore the original image source after a quarter of a second
          image.src = originalImage;
        };
      }(image, originalImages[i]), 350);
    }
  }
}


/////////CAMBIOS CON OTRO GIF///////
function changeAll2(index) {
  var newImages = [
    "../../../assets/images/merger_01.gif",
    "../../../assets/images/merger_02.gif",
    "../../../assets/images/merger_03.gif",
    "../../../assets/images/merger_04.gif",
    "../../../assets/images/merger_05.gif",
    "../../../assets/images/merger_06.gif",
    "../../../assets/images/merger_07.gif",
    "../../../assets/images/merger_08.gif",
    "../../../assets/images/merger_09.gif",
    "../../../assets/images/merger_10.gif",
    "../../../assets/images/merger_11.gif",
    "../../../assets/images/merger_12.gif",
    "../../../assets/images/merger_13.gif",
    "../../../assets/images/merger_14.gif",
    "../../../assets/images/merger_15.gif",
    "../../../assets/images/merger_16.gif",
    "../../../assets/images/merger_17.gif",
    "../../../assets/images/merger_18.gif",
    "../../../assets/images/merger_19.gif",
    "../../../assets/images/merger_20.gif",
    "../../../assets/images/merger_21.gif",
    "../../../assets/images/merger_22.gif",
    "../../../assets/images/merger_23.gif",
    "../../../assets/images/merger_24.gif",
    "../../../assets/images/merger_25.gif",
    "../../../assets/images/merger_26.gif",
    "../../../assets/images/merger_27.gif",
    "../../../assets/images/merger_28.gif",
  
  ];

  var originalImages = [
    
    "../../../assets/images/gifV_01.gif", 
    "../../../assets/images/gifV_02.gif",
    "../../../assets/images/gifV_03.gif",
    "../../../assets/images/gifV_04.gif",
    "../../../assets/images/gifV_05.gif",
    "../../../assets/images/gifV_06.gif",
    "../../../assets/images/gifV_07.gif",
    "../../../assets/images/gifV_08.gif",
    "../../../assets/images/gifV_09.gif",
    "../../../assets/images/gifV_10.gif",
    "../../../assets/images/gifV_11.gif",
    "../../../assets/images/gifV_12.gif",
    "../../../assets/images/gifV_13.gif",
    "../../../assets/images/gifV_14.gif",
    "../../../assets/images/gifV_15.gif",
    "../../../assets/images/gifV_16.gif",
    "../../../assets/images/gifV_17.gif",
    "../../../assets/images/gifV_18.gif",
    "../../../assets/images/gifV_19.gif",
    "../../../assets/images/gifV_20.gif",
    "../../../assets/images/gifV_21.gif",
    "../../../assets/images/gifV_22.gif",
    "../../../assets/images/gifV_23.gif",
    "../../../assets/images/gifV_24.gif",
    "../../../assets/images/gifV_25.gif",
    "../../../assets/images/gifV_26.gif",
    "../../../assets/images/gifV_27.gif",
    "../../../assets/images/gifV_28.gif",
  ];

  var divs = document.getElementsByClassName("column");
  for (var i = 0; i < divs.length; i++) {
    if (i !== index) {
      var div = divs[i];
      var image = div.querySelector("img");
      var newImageIndex = i % newImages.length; // Select new image based on index

      // Change the image source to the new image
      image.src = newImages[newImageIndex];

      // Wait for a quarter of a second (250 milliseconds)
      setTimeout(function(image, originalImage) {
        return function() {
          // Restore the original image source after a quarter of a second
          image.src = originalImage;
        };
      }(image, originalImages[i]), 4000);
    }
  }
}

/////////TEXTO///////////
/* var targetDiv = document.getElementById("yourDivId");
targetDiv.onclick = function() {
  showText(targetDiv);
};

function showText(div) {
  var overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.textContent = "verseverseverse";
  div.appendChild(overlay);

  // Prevent clicks on the overlay
  overlay.onclick = function(event) {
    event.stopPropagation();
  };

  // Allow clicks on other elements
  document.addEventListener("click", removeOverlay, true);

  setTimeout(function() {
    removeOverlay();
  }, 5000);
}

function removeOverlay() {
  var overlay = document.getElementById("overlay");
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
  
  // Remove the event listener
  document.removeEventListener("click", removeOverlay, true);
} */

///////




/*     var divs = document.getElementsByClassName("column");
  var delay = 100; // Delay between each image change (in milliseconds)

  for (var i = 0; i < divs.length; i++) {
    if (i !== index) {
      (function (i) {
        var div = divs[i];
        var image = div.querySelector("img");
        var newImageIndex = i % newImages.length; // Select new image based on index

        setTimeout(function () {
          // Change the image source to the new image
          image.src = newImages[newImageIndex];

          setTimeout(function () {
            // Restore the original image source
            image.src = originalImages[i];
          }, delay);
        }, i * delay);
      })(i);
    }
  }
} */