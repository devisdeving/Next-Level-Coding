const ripple1 = document.getElementById('ripple1');
const ripple2 = document.getElementById('ripple2');
const ripple3 = document.getElementById('ripple3');
const ripple4 = document.getElementById('ripple4');
const disc = document.getElementById('disc');
const container = document.getElementById('container')
const info = document.getElementById('info');

const set =[
    {
        artistName: "LP Giobbi",
        mL: 3934806,
        song1: "Antibodies - LP Giobbi Remix",
        song1Streams: 26774794,
        song2: "Forever And A Day",
        song2Streams: 18661938,
        song3: "All In A Dream",
        song3Streams: 14584852,
        song4: "Can't Let You Go",
        song4Streams: 5387629,
        dateIssued: "August 2023",
        issueNo: 129,
        src: "artistImages/lPGiobbi.png",
        fill: "#ac9c2a"
    },
    {
        artistName: "Aluna",
        mL: 4229523,
        song1: "Beggin'",
        song1Streams: 30797317,
        song2: "Forget About Me",
        song2Streams: 30167368,
        song3: "Body Pump - Lady Bee Remix",
        song3Streams: 18736101,
        song4: "More Baby",
        song4Streams: 4232323,
        dateIssued: "April 2022",
        issueNo: 113,
        src: "artistImages/aluna.png",
        fill: "#ac9c2a"
    },
    {
        artistName: "Zeds Dead",
        mL: 2360883,
        song1: "Eyes On Fire - Zeds Dead Remix'",
        song1Streams: 53597365,
        song2: "Alive",
        song2Streams: 30643625,
        song3: "Gassed Up",
        song3Streams: 15502516,
        song4: "One Three Nine",
        song4Streams: 8863126,
        dateIssued: "July 2019",
        issueNo: 60,
        src: "artistImages/zedsDead.png",
        fill: "#ac9c2a"
    }];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Shuffle the array
    shuffleArray(set);
    
    // Select the first object in the shuffled array
    const selectedObject = set[0];

    console.log(selectedObject.artistName);

// function customLogo() {

//     const monthly = selectedObject.mL / 70000;
//     const songOneStreams = selectedObject.song1Streams / 200000;
//     const songTwoStreams = selectedObject.song2Streams / 200000;
//     const songThreeStreams = selectedObject.song3Streams / 200000;
//     const songFourStreams = selectedObject.song4Streams / 200000;

//     const songOneStreamsStyle = map(songOneStreams, 0, 100, 80, 140);
//     const songTwoStreamsStyle = map(songTwoStreams, 0, 100, 80, 140);
//     const songThreeStreamsStyle = map(songThreeStreams, 0, 100, 80, 140);
//     const songFourStreamsStyle = map(songFourStreams, 0, 100, 80, 140);
//     const monthlyStyle = map(monthly, 0, 100, 80, 140);

//     ripple1.style.transform = `scaleX(${songOneStreamsStyle}%)`;
//     ripple2.style.transform = `scaleX(${songTwoStreamsStyle}%)`;
//     ripple3.style.transform = `scaleX(${songThreeStreamsStyle}%)`;
//     ripple4.style.transform = `scaleX(${songFourStreamsStyle}%)`;
//     disc.style.transform = `scale(${monthlyStyle}%)`;
//     document.body.style.backgroundColor = `${set.fill}`;
// };

// customLogo();

// function map(value, low1, high1, low2, high2) {
//         return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
//     };

//     const artistInfoSkeleton = `
//     <p>Artist Name</p>
//     <h2>${set.artistName}</h2>
//         <p>Monthly Listeners</p>
//         <h2>${set.mL}</h2>
//         <p>Issue #</p>
//         <h2>${set.issueNo}</h2>
//         <p>Date Issued</p>
//         <h2>${set.dateIssued}</h2>
//         <img id="artistImage" src="${set.src}" alt="Artist Image">
//     `;

// info.innerHTML = artistInfoSkeleton;

// SPOTIFY API ATTEMPT  
// const url = 'https://api.spotify.com/v1/tracks/4heve4ydl1u6V3AD4moZq9';
// const options = {
//     method: 'GET',
//     headers: {
//         'Authorization': 'Bearer 1POdFZRZbvb...qqillRxMr2z'
//     }
// };

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
       