// let header = document.querySelector('header');

// function changeFontColorToWhite() {
//     header.style.opacity = '0%';
// }

// window.addEventListener('click', changeFontColorToWhite);
const canvas = document.getElementById('spline')
let isTextVisible = true;

function toggleTextOpacity() {
    const text = document.querySelector('header');
    if (isTextVisible) {
        text.style.zIndex = 0;
    } else {
        text.style.zIndex = 7;
    }
    isTextVisible = !isTextVisible;
}

window.onclick = toggleTextOpacity;

const toggleDivI = document.getElementById('index');
        const targetDivI = document.getElementById('articles');

        toggleDivI.addEventListener('click', function () {
            targetDivI.classList.toggle('hidden');
        });

        const toggleDivA = document.getElementById('about');
        const targetDivA = document.getElementById('about-text');

        toggleDivA.addEventListener('click', function () {
            targetDivA.classList.toggle('hidden');
        });

        document.addEventListener('DOMContentLoaded', function() {
            let divToHide = document.getElementById('light-up-box');
        
            if (divToHide) {
                window.addEventListener('click', function() {
                    divToHide.style.opacity = '0'; // Set opacity to 0 to initiate the fade-out
                });
            }
        });
        
// const gallery = document.getElementById("gallery");
// const shapes = document.querySelectorAll('.shape');

// window.onmousemove = e => {
//     const mouseX = e.clientX,
//           mouseY = e.clientY;

//     const xDecimal = mouseX / window.innerWidth,
//           yDecimal = mouseY / window.innerHeight;

//     const maxX = gallery.offsetWidth - window.innerWidth,
//           maxY = gallery.offsetHeight - window.innerHeight;

//     const panX = gallery.offsetWidth * xDecimal * -1;
//     const panY = gallery.offsetHeight * yDecimal * -1;

//     gallery.animate({
//         transform: `translate(${panX}px, ${panY}px)`
//     }, {
//         duration: 8000,
//         fill: "forwards",
//         easing: "ease"
//     })
// }

// UNUSED CODE

//   window.onload = () => {
//     shapes.forEach((shape) => {
//         const randomScale = Math.random() * (1 - 0.8) + 0.5;
//         shape.style.transform = `scale(${randomScale})`;
//     });
// };

// shapes.forEach((shape) => {
//     const maxTop = window.innerHeight * 0.8; // 80% of the viewport's height
//     const maxLeft = window.innerWidth * 0.8; // 80% of the viewport's width

//     const randomTop = Math.random() * maxTop;
//     const randomLeft = Math.random() * maxLeft;

//     shape.style.top = randomTop + 'px';
//     shape.style.left = randomLeft + 'px';
// });


//   const video = document.getElementById('video');
  
//   // Define a function to handle the mousemove event
//   function handleMouseMove(event) {
//     // Calculate the horizontal position of the mouse within the video element
//     const mouseX = event.clientX - video.getBoundingClientRect().left;
    
//     // Calculate the percentage of the video's duration based on the mouse position
//     const percentage = (mouseX / video.clientWidth) * 100;
    
//     // Set the video's playback position as a percentage of its duration
//     video.currentTime = (percentage / 100) * video.duration;
//   }

//     // Add a mousemove event listener to the video element
//     video.addEventListener('mousemove', handleMouseMove);




// // Shuffle the grid items using the Fisher-Yates algorithm
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// shuffle(Array.from(shapes));

// shapes.forEach((shape) => {
//     gallery.appendChild(shape);
// });

