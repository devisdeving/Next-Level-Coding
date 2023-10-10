const gallery = document.getElementById("gallery");

window.onmousemove = e => {
    const mouseX = e.clientX,
          mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
          yDecimal = mouseY / window.innerHeight;

    // const maxX = gallery.offsetWidth - window.innerWidth,
    //       maxY = gallery.offsetHeight - window.innerHeight;

    const panX = gallery.offsetWidth * xDecimal * -1,
          panY = gallery.offsetHeight * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
}