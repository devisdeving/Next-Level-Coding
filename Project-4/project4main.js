
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
          
          // make confetti
          for (let i=0;i<timeMapped;i++) {
            //do whatever you want 1000 times here
            let confettiElem = document.createElement("DIV");
            confettiElem.classList.add("confetti");
            confettiElem.style.left = Math.random() * 100 + "%";
            confettiElem.style.top = Math.random() * 100 + "%";
            confettiElem.style.transform = `rotate(${Math.random() * 360}deg)`;
            confettiElem.style.background = `hsl(${Math.random()*360}, 60%, 60%)`;
            confettiElem.addEventListener("mouseover", function(){
              confettiElem.style.left = Math.random() * 100 + "%";
              confettiElem.style.top = Math.random() * 100 + "%";
            })
            dataElem.appendChild(confettiElem);
            
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