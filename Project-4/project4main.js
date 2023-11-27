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

    // Create options for the dropdown menu
    for (let i = 0; i < data.length; i++) {
      const optionName = document.createElement("OPTION");
      optionName.innerHTML = data[i].name;
      selector.appendChild(optionName);
    }

    // Event listener for the dropdown menu change
    selector.addEventListener("change", function () {
      const selectedName = selector.value;

      // Hide all scent boxes
      const scentBoxes = document.querySelectorAll(".scent");
      scentBoxes.forEach((box) => (box.style.display = "none"));

      // Show the selected scent box
      const selectedBox = document.querySelector(`.scent[data-name="${selectedName}"]`);
      if (selectedBox) {
        selectedBox.style.display = "block";
      }
    });

    for (let datapoint of data) {
      const scentBox = document.createElement("DIV");
      scentBox.classList.add("scent");
      scentBox.setAttribute("data-name", datapoint.name);
      
      // LOGO AND DYNAMIC NAME  
      const textInfo = document.createElement("DIV");
      textInfo.classList.add("textInfo");

      const logoContainer = document.createElement("DIV");
      logoContainer.id = "logoContainer";

      const logo = document.createElement("img");
      logo.src = "mgLogo.png";

      logoContainer.appendChild(logo);

      const textContainer = document.createElement("DIV");
      textContainer.id = "textContainer";

      const nameElement = document.createElement("DIV");
      nameElement.textContent = datapoint.name;

      const flOzElement = document.createElement("DIV");
      flOzElement.textContent = `${datapoint.flOz} fl. oz.e ${datapoint.mL} ml`;

      textContainer.appendChild(nameElement);
      textContainer.appendChild(flOzElement);

      textInfo.appendChild(logoContainer);
      textInfo.appendChild(textContainer);

      scentBox.appendChild(textInfo);

      const satMapped = datapoint.satisfaction;
      const feeling = datapoint.feeling * 5;
      const priColor = datapoint.priColor;
      const secColor = datapoint.secColor;
      const terColor = datapoint.terColor;
      const accentColor = datapoint.accentColor;
      const colors = [priColor, priColor, priColor, secColor, secColor, terColor, accentColor];

      const mask = document.createElement("img");
      mask.src = "perfumeMask.png";
      mask.classList.add("mask");

      scentBox.appendChild(mask);

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

        for (let i = 0; i < satMapped * partIndex * 2 * 50; i++) {
          let dots = document.createElement("DIV");
          dots.classList.add("confetti");
          dots.style.left = Math.random() * 100 + "%";
          dots.style.top = Math.random() * 100 + "%";
          dots.style.filter = `blur(${feeling / 20}px)`;
          dots.style.backgroundColor = randomFromArray(colors);

          if (topPart) {
            topPart.appendChild(dots);
          } else if (midPart) {
            midPart.appendChild(dots);
          } else if (botPart) {
            botPart.appendChild(dots);
          }

          if (priColor == null) {
            console.log("no priCOlor");
            dots.style.background = `hsl(${Math.random()*120}, 60%, 60%)`;
          }

          if (secColor == null) {
            console.log("no priCOlor");
            dots.style.background = `hsl(${Math.random()*120}, 60%, 60%)`;
          }
        }
      }

      if (datapoint.day) {
        console.log("wear this perfume in the day");
        partContainer.style.transform = "scaleY(-1)";
        partContainer.style.top = "-35" + "%";
      }

      dataParent.appendChild(scentBox);
    }
  });

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
