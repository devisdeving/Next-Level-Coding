const gallery = document.getElementById("gallery");
const shapes = document.querySelectorAll('.shape');

// Shuffle the grid items using the Fisher-Yates algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(Array.from(shapes));

// Append the shuffled grid items back to the grid container
shapes.forEach((shape) => {
    gallery.appendChild(shape);
});

window.onmousemove = e => {
    const mouseX = e.clientX,
          mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
          yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth,
          maxY = gallery.offsetHeight - window.innerHeight;

    const panX = gallery.offsetWidth * xDecimal * -1;
    const panY = gallery.offsetHeight * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 8000,
        fill: "forwards",
        easing: "ease"
    })
}



// shapes.forEach((shape) => {
//     const randomX = Math.floor(Math.random() * (gallery.clientWidth - shape.clientWidth));
//     const randomY = Math.floor(Math.random() * (gallery.clientHeight - shape.clientHeight));

//     shape.style.position = 'absolute';
//     shape.style.left = randomX + 'px';
//     shape.style.top = randomY + 'px';

//     gallery.appendChild(shape);
// });


