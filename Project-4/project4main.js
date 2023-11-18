
const dataParent = document.getElementById("dataGoesHere");
const colorInputs = document.getElementsByClassName("colorInput");
const colorInput1 = document.getElementById("colorInput1");
const colorInput2 = document.getElementById("colorInput2");
const colorInput3 = document.getElementById("colorInput3");
const body = document.querySelector("body");

let sheetID = "1ldVnyJrQqH5YEfouNe9L6qGe8bMWsgLeCB7HdNnfcZI";
let tabName = 'sheet1'

let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        const threeParts = `
        <img id="mask" src="perfumeMask.png">
        <div id="topPart" class="part topPart"></div>
        <div id="midPart" class="part midPart"></div>
        <div id="botPart" class="part botPart"></div>
        `;

        dataParent.insertAdjacentHTML('beforeend', threeParts);

        const topPart = document.getElementById("topPart");
        const midPart = document.getElementById("midPart");
        const botPart = document.getElementById("botPart");

        colorInput1.addEventListener("input", changeTopColor);
        colorInput2.addEventListener("input", changeMidColor);
        colorInput3.addEventListener("input", changeBotColor);

        for (let datapoint of data) {
        const satMapped = datapoint.satisfaction;
        console.log(satMapped);

        for (let i = 0; i < satMapped; i++) {
          let dots = document.createElement("DIV");
          dots.classList.add("confetti");
          dots.style.left = Math.random() * 100 + "%";
          dots.style.top = Math.random() * 100 + "%";
          dots.style.transform = `rotate(${Math.random() * 360}deg)`;
          topPart.appendChild(dots);
        }

        for (let i = 0; i < satMapped * 5; i++) {
          let dots = document.createElement("DIV");
          dots.classList.add("confetti");
          dots.style.left = Math.random() * 100 + "%";
          dots.style.top = Math.random() * 100 + "%";
          dots.style.transform = `rotate(${Math.random() * 360}deg)`;
          midPart.appendChild(dots);
        }

        for (let i = 0; i < satMapped * 10; i++) {
          let dots = document.createElement("DIV");
          dots.classList.add("confetti");
          dots.style.left = Math.random() * 100 + "%";
          dots.style.top = Math.random() * 100 + "%";
          dots.style.transform = `rotate(${Math.random() * 360}deg)`;
          botPart.appendChild(dots);
        }
      }

      dataParent.body.appendChild(imageDiv);

      function changeTopColor() {
        let topDots = document.querySelectorAll('#topPart .confetti');        
        topDots.forEach(function (dot) {
          dot.style.backgroundColor = colorInput1.value;
        });
      }

      function changeMidColor() {
        let midDots = document.querySelectorAll('#midPart .confetti');
        midDots.forEach(function (dot) {
          dot.style.backgroundColor = colorInput2.value;
        });
      }

      function changeBotColor() {
        let botDots = document.querySelectorAll('#botPart .confetti');
        botDots.forEach(function (dot) {
          dot.style.backgroundColor = colorInput3.value;
        });
      }
    });


    // .catch(function (err) {
    //     console.log("Something went wrong!", err);
    // });