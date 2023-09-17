const gallery = document.getElementById('gallery');

window.onmousemove = e => {
    const mouseX = e.clientX,
    mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
    
    const maxX = (gallery.offsetWidth - window.innerWidth),
        maxY = (gallery.offsetHeight - window.innerHeight) / 8;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}

// let field = document.getElementById("field");

// for (let i = 0; i < 50; i++) {
//   let tile = document.createElement("div");
//   tile.className = 'tile';
//   tile.id = 'tile' + i;
//   field.appendChild(tile);
// }

// let tilesPlaced = []; // Stores the tiles index placed

// while (tilesPlaced.length < 20) { // Stop only if 20 tiles is added
//   let randomIndex = parseInt(49 * Math.random()); // Generate a random number between 0 and 49

//   // Only add the tile if it doesn't exist already
//   if (tilesPlaced.indexOf(randomIndex) === -1) {
//     tilesPlaced.push(randomIndex);
//     document.getElementById('tile' + randomIndex).style.borderColor = 'red';
//   }
// }

