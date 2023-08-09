// Array of texts to display randomly
const texts = [
    "a movement that sculpts the shape of some immaterial body",
    "infinite frequency wave, limitless attraction until it ceases to be",
    "and caress the fall, the warmest transparency, that signs with its brightness the sky in the name of decay",
    
  ];
  
  function addRandomText(event) {
    const randomIndex = Math.floor(Math.random() * texts.length); // Generate a random index
  
    // Create a new <p> element
    const newText = document.createElement("p");
    newText.className = "random-text";
   /*  newText.style.left = `${event.clientX}px`; // Set X position based on click event
    newText.style.top = `${event.clientY}px`; // Set Y position based on click event */
    newText.textContent = texts[randomIndex];
   
    const x = Math.floor(Math.random() * window.innerWidth-100);
    const y = Math.floor(Math.random() * window.innerHeight-100);
    newText.style.left = x + "px";
    newText.style.top = y + "px";

    document.getElementById("randpoem").appendChild(newText); // Append the new <p> element to the container
    newText.style.display = "block"; // Display the text element
  
    newText.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent click event from bubbling to the container
    });
  }
  