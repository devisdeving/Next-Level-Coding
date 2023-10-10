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

  const video = document.getElementById('video');
  
  // Define a function to handle the mousemove event
  function handleMouseMove(event) {
    // Calculate the horizontal position of the mouse within the video element
    const mouseX = event.clientX - video.getBoundingClientRect().left;
    
    // Calculate the percentage of the video's duration based on the mouse position
    const percentage = (mouseX / video.clientWidth) * 100;
    
    // Set the video's playback position as a percentage of its duration
    video.currentTime = (percentage / 100) * video.duration;
  }
  
  // Add a mousemove event listener to the video element
  video.addEventListener('mousemove', handleMouseMove);





// shapes.forEach((shape) => {
//     const randomX = Math.floor(Math.random() * (gallery.clientWidth - shape.clientWidth));
//     const randomY = Math.floor(Math.random() * (gallery.clientHeight - shape.clientHeight));

//     shape.style.position = 'absolute';
//     shape.style.left = randomX + 'px';
//     shape.style.top = randomY + 'px';

//     gallery.appendChild(shape);
// });


