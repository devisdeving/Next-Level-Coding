const dataParent = document.getElementById("dataGoesHere");
const body = document.querySelector("body");
const svg = document.querySelectorAll("path");
const selector = document.getElementById("selector");

let sheetID = "1ldVnyJrQqH5YEfouNe9L6qGe8bMWsgLeCB7HdNnfcZI";
let tabName = 'sheet1';

let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

fetch(opensheet_uri)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let datapoint of data) {
      const scentBox = document.createElement("DIV");
      scentBox.classList.add("scent");
      const nameDiv = document.createElement("DIV");
      nameDiv.classList.add("scentName");
    
      const name = datapoint.name;
      nameDiv.innerHTML = name;
    
      scentBox.appendChild(nameDiv);

      const partContainer = document.createElement("DIV");
      partContainer.classList.add("partContainer");

      for (let partIndex = 1; partIndex <= 3; partIndex++) {
        const partDiv = document.createElement("DIV");
        partDiv.classList.add("part");
        partDiv.id = `part${partIndex}`;
        
        partContainer.appendChild(partDiv);
        scentBox.appendChild(partContainer);

        // Set up topPart, midPart, and botPart references
        const topPart = partIndex === 1 ? partDiv : null;
        const midPart = partIndex === 2 ? partDiv : null;
        const botPart = partIndex === 3 ? partDiv : null;

        const satMapped = datapoint.satisfaction;
        const feeling = datapoint.feeling * 5;
        const priColor = datapoint.priColor;
        const secColor = datapoint.secColor;
        const terColor = datapoint.terColor;
        const colors = [priColor, priColor, priColor, secColor, secColor, terColor];

        for (let i = 0; i < satMapped * partIndex * 20; i++) {
          let dots = document.createElement("DIV");
          dots.classList.add("confetti");
          dots.style.left = Math.random() * 100 + "%";
          dots.style.top = Math.random() * 100 + "%";
          // dots.style.margin = `${feeling * 10}px`;
          dots.style.backgroundColor = randomFromArray(colors);

          if (topPart) {
            topPart.appendChild(dots);
          } else if (midPart) {
            midPart.appendChild(dots);
          } else if (botPart) {
            botPart.appendChild(dots);
          }
        }
      }

      if (datapoint.day){
        console.log("wear this perfume in the day");
        partContainer.style.transform = "scaleY(-1)";
      }
      selector.addEventListener("input", function(){
      for (let i = 0; i < data.length; i++) {
        const optionName = document.createElement("OPTION");
      
        optionName.innerHTML = name;
  
        if (optionName.value == selector.value){
          scentBox.style.display = "block";
        } else {
          scentBox.style.display = "none";
        }

        selector.appendChild(optionName);
        body.appendChild(selector);
      }
      });

      dataParent.appendChild(scentBox);
    }
  });

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
