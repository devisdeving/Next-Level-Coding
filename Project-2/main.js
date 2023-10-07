const stack = document.getElementById("stack"),
      vectors = stack.getElementsByClassName("vector");

const getActive = () => document.body.dataset.active === "true",
      setActiveTo = active => document.body.dataset.active = active;

const shift = (vector, index, rangeX, rangeY) => {
  const active = getActive();
        
  const translationIntensity = active ? 24 : 4,
        maxTranslation = translationIntensity * (index + 1),
        currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
  
  const scale = active ? 1 + (index * 0.4) : 1;
  
  vector.animate({ 
    translate: currentTranslation, 
    scale 
  }, { duration: 750, fill: "forwards", easing: "ease" });
}

const shiftAll = (vectors, rangeX, rangeY) => {
    vectors.forEach((vector, index) => shift(vector, index, rangeX, rangeY));
}

const shiftStack = (e, vectors) => {  
  const rect = stack.getBoundingClientRect(),
        radius = 1000;
  
  const centerX = rect.left + (rect.width / 2),
        centerY = rect.top + (rect.height / 2);
  
  const rangeX = (e.clientX - centerX) / radius,
        rangeY = (e.clientY - centerY) / radius;
  
  shiftAll(vectors, rangeX, rangeY);
}

const resetStack = () => {
  setActiveTo(false);
  shiftAll(vectors, 0.4, -0.7);
}

window.onmousemove = e => shiftStack(e, vectors);

document.body.onmouseleave = () => {
  if(!getActive()) resetStack();
}

window.onmousedown = e => {
  setActiveTo(true);
  shiftStack(e, vectors);
}

window.onmouseup = e => resetStack();

resetStack();





// window.addEventListener('mousemove', (e) => {
//     console.log(e)

//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const anchor = document.getElementById('stack')
//     const rekt = anchor.getBoundingClientRect();
//     const anchorX = rekt.left + rekt.width / 2;
//     const anchorY = rekt.top + rekt.height / 2;
    
//     const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

//     console.log(angleDeg)

//     const pupils = document.getElementsByClassName('vector')
//     pupils.forEach(pupil => {
//         pupil.style.transform = `rotate(${90 = angleDeg}deg)`;
//     })
// })

// function angle(cx, cy, ex, ey) {
//     const dy = ey - ey;
//     const dx = ex - ex;
//     const rad = atan2(dy, dx);
//     const deg = rad * 180 / Math.PI;
//     return deg;
// }
