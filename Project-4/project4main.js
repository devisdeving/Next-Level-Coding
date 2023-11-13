
const dataParent = document.getElementById("dataGoesHere");
// save your sheet ID and name of the tab as variables for use
let sheetID = "1ldVnyJrQqH5YEfouNe9L6qGe8bMWsgLeCB7HdNnfcZI";
let tabName = 'sheet1'

// format them into Ben's uri
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
  
        for (let datapoint of data) {
          
          let dataElem = document.createElement("DIV");
          dataElem.classList.add("week");
          dataElem.innerHTML = datapoint.time;
          
          const timeMapped = datapoint.time * 10;
          console.log(timeMapped);
          
          // make dots
          for (let i=0;i<timeMapped;i++) {

            const dotsElem = document.createElement("DIV");
            const dotsSVG = document.createElement("IMG");

            dotsSVG.id = "dotsSVG"
            dotsSVG.src = "https://www.datocms-assets.com/99382/1699899730-mgdot.svg";
            
            dotsElem.classList.add("dots");
            dotsElem.style.left = Math.random() * 100 + "%";
            dotsElem.style.top = Math.random() * 100 + "%";
            dotsElem.style.transform = `rotate(${Math.random() * 360}deg)`;
            dotsElem.style.background = `hsl(${Math.random()*360}, 60%, 60%)`;
            dotsElem.addEventListener("mouseover", function(){
            dotsElem.style.left = Math.random() * 100 + "%";
            dotsElem.style.top = Math.random() * 100 + "%";})

            dataElem.appendChild(dotsElem);
            dotsElem.appendChild(dotsSVG);
          }
          
          if (datapoint.crit){
            console.log("there is a crit this week");
            dataElem.style.background = "#efefef";
          }
          
          dataParent.appendChild(dataElem);
          
        }
    })

    .catch(function (err) {
        console.log("Something went wrong!", err);
    });