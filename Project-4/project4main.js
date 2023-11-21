
const dataParent = document.getElementById("dataGoesHere");
const body = document.querySelector("body");
const mGDotSVG = `<path d="M102 27C102 41.9117 89.9117 54 75 54C60.0883 54 48 41.9117 48 27C48 12.0883 60.0883 0 75 0C89.9117 0 102 12.0883 102 27Z" fill="white"/>
<path d="M249 27C249 41.9117 236.912 54 222 54C207.088 54 195 41.9117 195 27C195 12.0883 207.088 0 222 0C236.912 0 249 12.0883 249 27Z" fill="white"/>
<path d="M357 135C357 149.912 344.912 162 330 162C315.088 162 303 149.912 303 135C303 120.088 315.088 108 330 108C344.912 108 357 120.088 357 135Z" fill="white"/>
<path d="M114 162C128.912 162 141 149.912 141 135C141 120.088 128.912 108 114 108C99.0883 108 87 120.088 87 135C87 149.912 99.0883 162 114 162Z" fill="white"/>
<path d="M75 216C89.9117 216 102 228.088 102 243C102 257.912 89.9117 270 75 270C60.0883 270 48 257.912 48 243C48 228.088 60.0883 216 75 216Z" fill="white"/>
<path d="M54 92C54 106.912 41.9117 119 27 119C12.0883 119 0 106.912 0 92C0 77.0883 12.0883 65 27 65C41.9117 65 54 77.0883 54 92Z" fill="white"/>
<path d="M27 151C41.9117 151 54 163.088 54 178C54 192.912 41.9117 205 27 205C12.0883 205 0 192.912 0 178C0 163.088 12.0883 151 27 151Z" fill="white"/>
<path d="M342 27C342 41.9117 354.088 54 369 54C383.912 54 396 41.9117 396 27C396 12.0883 383.912 0 369 0C354.088 0 342 12.0883 342 27Z" fill="white"/>
<path d="M369 216C354.088 216 342 228.088 342 243C342 257.912 354.088 270 369 270C383.912 270 396 257.912 396 243C396 228.088 383.912 216 369 216Z" fill="white"/>
<path d="M390 92C390 106.912 402.088 119 417 119C431.912 119 444 106.912 444 92C444 77.0883 431.912 65 417 65C402.088 65 390 77.0883 390 92Z" fill="white"/>
<path d="M417 151C402.088 151 390 163.088 390 178C390 192.912 402.088 205 417 205C431.912 205 444 192.912 444 178C444 163.088 431.912 151 417 151Z" fill="white"/>
<path d="M249 135C249 149.912 236.912 162 222 162C207.088 162 195 149.912 195 135C195 120.088 207.088 108 222 108C236.912 108 249 120.088 249 135Z" fill="white"/>
<path d="M222 270C236.912 270 249 257.912 249 243C249 228.088 236.912 216 222 216C207.088 216 195 228.088 195 243C195 257.912 207.088 270 222 270Z" fill="white"/>
`;

let sheetID = "1ldVnyJrQqH5YEfouNe9L6qGe8bMWsgLeCB7HdNnfcZI";
let tabName = 'sheet1'

let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        const topPart = document.getElementById("topPart");
        const midPart = document.getElementById("midPart");
        const botPart = document.getElementById("botPart");

        // colorInput1.addEventListener("input", changeTopColor);
        // colorInput2.addEventListener("input", changeMidColor);
        // colorInput3.addEventListener("input", changeBotColor);

        for (let datapoint of data) {
        const satMapped = datapoint.satisfaction;
        console.log(satMapped);

        const priColor = datapoint.priColor;
        const secColor = datapoint.secColor;
        const terColor = datapoint.terColor;

        const colors = [priColor, secColor, terColor];

        for (let i = 0; i < satMapped * 12; i++) {
          let dots = document.createElement("DIV");
          dots.classList.add("confetti");
          dots.style.left = Math.random() * 100 + "%";
          dots.style.top = Math.random() * 100 + "%";
          dots.style.transform = `rotate(${datapoint.reviews * 360}deg)`;
          dots.style.backgroundColor = randomFromArray(colors);

        //   if (datapoint.feeling < 5) {
        //     console.log("calm");
        //     dots.style.margin = "5em";
        // }

          topPart.appendChild(dots);
          appendSVG(dots);
      }

        for (let i = 0; i < satMapped * 5; i++) {
          let dots = document.createElement("DIV");
          dots.classList.add("confetti");
          dots.style.left = Math.random() * 100 + "%";
          dots.style.top = Math.random() * 100 + "%";
          dots.style.transform = `rotate(${Math.random() * 360}deg)`;
          dots.style.backgroundColor = randomFromArray(colors);
          midPart.appendChild(dots);
        }

        for (let i = 0; i < satMapped * 50; i++) {
          let dots = document.createElement("DIV");
          dots.classList.add("confetti");
          dots.style.left = Math.random() * 100 + "%";
          dots.style.top = Math.random() * 100 + "%";
          dots.style.transform = `rotate(${Math.random() * 360}deg)`;
          dots.style.backgroundColor = randomFromArray(colors);
          botPart.appendChild(dots);

    }
      }

      const imageDiv = document.createElement("div");
imageDiv.id = "imageDiv";

// Append imageDiv to the body
document.body.appendChild(imageDiv);

      // function changeTopColor() {
      //   let topDots = document.querySelectorAll('#topPart .confetti');        
      //   topDots.forEach(function (dot) {
      //     dot.style.backgroundColor = colorInput1.value;
      //   });
      // }

      // function changeMidColor() {
      //   let midDots = document.querySelectorAll('#midPart .confetti');
      //   midDots.forEach(function (dot) {
      //     dot.style.backgroundColor = colorInput2.value;
      //   });
      // }

      // function changeBotColor() {
      //   let botDots = document.querySelectorAll('#botPart .confetti');
      //   botDots.forEach(function (dot) {
      //     dot.style.backgroundColor = colorInput3.value;
      //   });
      // }

      function appendSVG(parent) {
                let svgContainer = document.createElement("SVG");
                svgContainer.innerHTML = mGDotSVG;
                parent.appendChild(svgContainer);
      }
    });

    function randomFromArray(arr){
      return arr[Math.floor(Math.random()*arr.length)]
    }


    // .catch(function (err) {
    //     console.log("Something went wrong!", err);
    // });