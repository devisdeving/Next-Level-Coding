const ripple1 = document.getElementById('ripple1');
const ripple2 = document.getElementById('ripple2');
const ripple3 = document.getElementById('ripple3');
const ripple4 = document.getElementById('ripple4');
const disc = document.getElementById('disc');
const container = document.getElementById('container')
const info = document.getElementById('info');
const right = document.getElementById('right');
const ripple = document.querySelectorAll('ripple');
const hover = document.getElementById('hover');

const set =[
    {
        artistName: "LP Giobbi",
        mL: 3934806,
            songs: [
            {
                song: "Can't Let You Go",
                streams: 5387629
            }, {
                song: "All In A Dream",
                streams: 14584852
            },{
                song: "Forever And A Day",
                streams: 18661938
            },{
                song: "Antibodies - LP Giobbi Remix",
                streams: 26774794
            }
        ],
        dateIssued: "August 2023",
        issueNo: 129,
        src: "artistImages/lPGiobbi.png",
        fill: "#603F15"
    },
    {
        artistName: "Aluna",
        mL: 4229523,
        songs: [
            {
                song: "Beggin'",
                streams: 30797317
            }, {
                song: "Forget About Me",
                streams: 30167368
            }, {
                song: "Body Pump - Lady Bee Remix",
                streams: 18736101
            },{
                song: "More Baby",
                streams: 4232323
            }
        ],
        dateIssued: "April 2022",
        issueNo: 113,
        src: "artistImages/aluna.png",
        fill: "#48B2FF"
    },
    {
        artistName: "Zeds Dead",
        mL: 2360883,
        songs: [
            {
                song: "Eyes On Fire - Zeds Dead Remix",
                streams: 53597365
            }, {
                song: "Alive",
                streams: 30643625
            }, {
                song: "Gassed Up",
                streams: 15502516
            },{
                song: "One Three Nine",
                streams: 8863126
            }
        ],
        dateIssued: "July 2019",
        issueNo: 60,
        src: "artistImages/zedsDead.png",
        fill: "#4EB8C9"
    },    
    {
        artistName: "Flume",
        mL: 10092810,
        songs: [
            {
                song: "Drop The Game",
                streams: 289477592
            },{
                song: "Say It (feat. Tove Lo)",
                streams: 376302619
            },{
                song: "Never Be Like You (feat. Kai)",
                streams: 708659231
            },{
                song: "You & Me - Flume Remix",
                streams: 591741788
            }
        ],
        dateIssued: "May 2022",
        issueNo: 114,
        src: "artistImages/flume.png",
        fill: "#F27B38"
    },
    {
        artistName: "FISHER",
        mL: 10502570,
        songs: [
            {
                song: "Losing It",
                streams: 478641567
            },{
                song: "TAKE IT OFF",
                streams: 35300239
            },{
                song: "Stop It",
                streams: 144451558
            },{
                song: "World, Hold On - FISHER Rework",
                streams: 137248923
            }
        ],
        dateIssued: "March 2019",
        issueNo: 591,
        src: "artistImages/fisher.png",
        fill: "#013C66"
    },    
    {
        artistName: "SOPHIE",
        mL: 460734,
        songs: [
            {
                song: "Immaterial",
                streams: 27001095
            }, {
                song: "Faceshopping",
                streams: 12499411
            }, {
                song: "Ponyboy",
                streams: 10658460
            },{
                song: "Sweat - SOPHIE Remix",
                streams: 7167395
            }
        ],
        dateIssued: "July 2019",
        issueNo: 595,
        src: "artistImages/sophie.png",
        fill: "#51095C"
    },
    {
        artistName: "WHIPPED CREAM",
        mL: 878208,
        songs: [
            {
                song: "Light of Mine",
                streams: 8751796
            }, {
                song: "Be Here (La La La)",
                streams: 5868807
            }, {
                song: "All Eyes On Mee",
                streams: 4818570
            },{
                song: "Rewind.. (But I Love You)",
                streams: 3554881
            }
        ],
        dateIssued: "February 2023",
        issueNo: 123,
        src: "artistImages/whippedCream.png",
        fill: "#57000B"
    },
    {
        artistName: "Jayda G",
        mL: 1436799,
        songs: [
            {
                song: "Both Of Us - Edit",
                streams: 46414753
            }, {
                song: "Mine O Mine",
                streams: 10093828
            }, {
                song: "All I Need (DJ-Kicks) - Edit",
                streams: 8898585
            },{
                song: "Anti-Hero - Jayda G Remix",
                streams: 5500839
            }
        ],
        dateIssued: "May 2023",
        issueNo: 641,
        src: "artistImages/jaydaG.png",
        fill: "#171E2B"
    },
    {
        artistName: "overmono",
        mL: 915619,
        songs: [
            {
                song: "Good Lies",
                streams: 8533477
            }, {
                song: "So U Kno",
                streams: 7804453
            }, {
                song: "Is U",
                streams: 5367065
            },{
                song: "Freedom 2",
                streams: 2430660
            }
        ],
        dateIssued: "April 2022",
        issueNo: 628,
        src: "artistImages/overmono.png",
        fill: "#E9E4F3"
    },
    {
        artistName: "Dimitri Vegas & Like Mike",
        mL: 9051650,
        songs: [
            {
                song: "Instagram",
                streams: 290208496
            }, {
                song: "Say My Name",
                streams: 161179361
            }, {
                song: "Tremor - Sensation 2014 Anthem",
                streams: 117429705
            },{
                song: "Mammoth",
                streams: 75618246
            }
        ],
        dateIssued: "November 2019",
        issueNo: 599,
        src: "artistImages/dVLM.png",
        fill: "#7F9198"
    },
    {
        artistName: "Martin Garrix",
        mL: 23457965,
        songs: [
            {
                song: "In the Name of Love",
                streams: 1342840133
            }, {
                song: "Scared to Be Lonely",
                streams: 1174665086
            }, {
                song: "There for You",
                streams: 591531920
            },{
                song: "Ocean (feat. Khalid)",
                streams: 510971336
            }
        ],
        dateIssued: "November 2022",
        issueNo: 120,
        src: "artistImages/mG.png",
        fill: "#795C51"
    },
    {
        artistName: "TOKiMONSTA",
        mL: 1068475,
        songs: [
            {
                song: "Realla",
                streams: 42106748
            }, {
                song: "Smoke & Mirrors",
                streams: 21814327
            }, {
                song: "Rose's Thorn",
                streams: 21320322
            },{
                song: "Darkest (Dim)",
                streams: 14244990
            }
        ],
        dateIssued: "September 2019",
        issueNo: 62,
        src: "artistImages/tokimonsta.png",
        fill: "#EED100"
    }
];

shuffle(set);

let selectedIndex = getIndex(set);

const randomSelectedObject = randomFromArray(set);
const songs = randomSelectedObject.songs;

shuffle(songs);

const shuffledSongs = [...songs];

const streams = shuffledSongs[0].streams;

customLogo(randomSelectedObject);

function customLogo(selectedObject) {
    const monthly = selectedObject.mL / 500000;
    const totalStreams = selectedObject.songs[0].streams + selectedObject.songs[1].streams + selectedObject.songs[2].streams + selectedObject.songs[3].streams;

    const songOneStreamsStyle = selectedObject.songs[0].streams * 150 / totalStreams;
    const songTwoStreamsStyle = selectedObject.songs[1].streams * 150 / totalStreams;
    const songThreeStreamsStyle = selectedObject.songs[2].streams * 150 / totalStreams;
    const songFourStreamsStyle = selectedObject.songs[3].streams * 150 / totalStreams;
    const monthlyStyle = map(monthly, 0, 2000, 60, 100);

    ripple1.style.width = `${songOneStreamsStyle}%`;
    ripple2.style.width = `${songTwoStreamsStyle}%`;
    ripple3.style.width = `${songThreeStreamsStyle}%`;
    ripple4.style.width = `${songFourStreamsStyle}%`;
    
    disc.style.transform = `scale(${monthlyStyle}%)`;
    container.style.transform = `scale(${monthlyStyle}% * 2)`;
    right.style.backgroundColor = `${selectedObject.fill}`;
    // right.style.backgroundImage = `url('${selectedObject.src}')`;

    const artistInfoSkeleton = `
    <p>Artist Name</p>
    <h2>${selectedObject.artistName}</h2>
        <p>Monthly Listeners</p>
        <h2>${selectedObject.mL}</h2>
        <p>Issue #</p>
        <h2>${selectedObject.issueNo}</h2>
        <p>Date Issued</p>
        <h2>${selectedObject.dateIssued}</h2>
        <img id="artistImage" src="${selectedObject.src}" alt="Artist Image">
    `;

    info.innerHTML = artistInfoSkeleton;

    const hoverInfo = `
    <p>${selectedObject.songs[0].song}</p>
    <p>${selectedObject.songs[0].streams}</p>
    `;

    hover.innerHTML = hoverInfo;
};

ripple1.addEventListener('mouseover', function() {
    hover.style.display = 'block';
});

ripple1.addEventListener('mouseout', function() {
    hover.style.display = 'none';
});

ripple2.addEventListener('mouseover', function() {
    hover.style.display = 'block';
});

ripple2.addEventListener('mouseout', function() {
    hover.style.display = 'none';
});

ripple3.addEventListener('mouseover', function() {
    hover.style.display = 'block';
});

ripple3.addEventListener('mouseout', function() {
    hover.style.display = 'none';
});

ripple4.addEventListener('mouseover', function() {
    hover.style.display = 'block';
});

ripple4.addEventListener('mouseout', function() {
    hover.style.display = 'none';
});


document.addEventListener('mousemove', (e) => {
    // Update the position of the div to follow the mouse cursor
    hover.style.left = e.pageX + 'px';
    hover.style.top = e.pageY + 'px';
  });
  
  // Show the div when the mouse enters the window
  document.addEventListener('mouseenter', () => {
    hover.style.display = 'block';
  });
  
  // Hide the div when the mouse leaves the window
  document.addEventListener('mouseleave', () => {
    hover.style.display = 'none';
  });

const button = document.getElementById('button');

button.addEventListener('click', function () {
    location.reload(); // Reloads the page
  });
  

function map(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    };

function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    function getIndex(object) {
        return Math.floor(Math.random() * object.length);
    }


    function randomFromArray(arr){
        return arr[Math.floor(Math.random()*arr.length)]
    }

        // ripple1.style.backgroundImage = `url('${selectedObject.src}')`;
    // ripple2.style.backgroundImage = `url('${selectedObject.src}')`;
    // ripple3.style.backgroundImage = `url('${selectedObject.src}')`;
    // ripple4.style.backgroundImage = `url('${selectedObject.src}')`;
    // disc.style.backgroundImage = `url('${selectedObject.src}')`;


//RAPID API METHOD
//     const url = 'https://spotify-scraper.p.rapidapi.com/v1/track/download?track=Lego%20House%20Ed%20Sheeran';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3a5bbb1dd7mshffb5b1fd5cb1d64p1a7b82jsn5c555b7faa62',
//             'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
//         }
//     };

// fetch(url, options)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         // Handle the data here
//     })
//     .catch(function (error) {
//         console.error("Something went wrong!", error);
//     });


// let myUrl = 'https://api.weatherapi.com/v1/current.json?key=43a0610734b24e6f82505625231710&q=London&aqi=no';
// let logoElem = document.getElementById('logo');

// fetch(myUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);

//         const windDeg = data.current.wind_degree;
//         const windSpeed = data.current.wind_mph;

//         const windDegStyle = map(windDeg, 0, 360, -70, 70);
//         const windSpeedStyle = map(windSpeed, 0, 80, 0, 15);

//         console.log(windDeg, windSpeed);

//         logoElem.style.transform = `skew(${windDegStyle}deg)`;
//         logoElem.style.filter = `blur(${windSpeedStyle}px)`;
//     })

//     .catch(function (err) {
//         console.log("Something went wrong!", err);
//     });

//     function map(value, low1, high1, low2, high2) {
//         return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
//     }

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
// background(255);

// const red = color(251, 2, 7);
// const black = color(0, 0, 0);
// const white = color(255, 255, 255);

// fill(red);
// noStroke();

// beginShape();
// vertex(71, 58);
// bezierVertex(125, 59, 300, 70, 300, 138);
// bezierVertex(300, 138, 300, 205, 125, 216);
// vertex(71, 218);
// vertex(71, 137);
// bezierVertex(98, 137, 149, 132, 149, 110);
// bezierVertex(149, 110, 149, 83, 71, 83.1);
// vertex(71, 82.6);
// vertex(71, 58);
// endShape();

// beginShape();
// vertex(311, 110);
// bezierVertex(320, 119, 415, 225, 266, 300);
// bezierVertex(266, 300, 209, 329, 110, 337);
// vertex(71, 339);
// vertex(71, 253);
// bezierVertex(115, 253, 178, 250, 251, 222);
// vertex(251, 222);
// bezierVertex(318, 196, 343, 156, 311, 110);

// endShape();
       