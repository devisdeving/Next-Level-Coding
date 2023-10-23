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
    },    
    {
        artistName: "Flume",
        mL: 10092810,
        song1: "Never Be Like You (feat. Kai)",
        song1Streams: 708659231,
        song2: "You & Me - Flume Remix",
        song2Streams: 591741788,
        song3: "Say It (feat. Tove Lo)",
        song3Streams: 376302619,
        song4: "Drop The Game",
        song4Streams: 289477592,
        dateIssued: "May 2022",
        issueNo: 114,
        src: "artistImages/flume.png",
        fill: "#ac9c2a"
    },
    {
        artistName: "FISHER",
        mL: 10502570,
        song1: "Losing It",
        song1Streams: 478641567,
        song2: "Stop It",
        song2Streams: 144451558,
        song3: "World, Hold On - FISHER Rework",
        song3Streams: 137248923,
        song4: "TAKE IT OFF",
        song4Streams: 35300239,
        dateIssued: "March 2019",
        issueNo: 591,
        src: "artistImages/fisher.png",
        fill: "#ac9c2a"
    },    
    {
        artistName: "SOPHIE",
        mL: 460734,
        song1: "Immaterial",
        song1Streams: 27001095,
        song2: "Faceshopping",
        song2Streams: 12499411,
        song3: "Ponyboy",
        song3Streams: 10658460,
        song4: "Sweat - SOPHIE Remix",
        song4Streams: 7167395,
        dateIssued: "July 2019",
        issueNo: 595,
        src: "artistImages/sophie.png",
        fill: "#ac9c2a"
    },
    {
        artistName: "WHIPPED CREAM",
        mL: 878208,
        song1: "Light of Mine",
        song1Streams: 8751796,
        song2: "Be Here (La La La)",
        song2Streams: 5868807,
        song3: "All Eyes On Me",
        song3Streams: 4818570,
        song4: "Rewind.. (But I Love You)",
        song4Streams: 3554881,
        dateIssued: "February 2023",
        issueNo: 123,
        src: "artistImages/whippedCream.png",
        fill: "#ac9c2a"
    }];

    let lastObject = null;
  
  function getRandomObject(objects, lastObject) {
	let object = lastObject;
	while (object === lastObject) {
	  object = objects[Math.floor(Math.random() * objects.length)];
	}
	return object;
}

const selectedObject = getRandomObject(set, lastObject);

    console.log(selectedObject.artistName);

function customLogo() {

    const monthly = selectedObject.mL / 500000;
    let songOneStreams = selectedObject.song1Streams;
    let songTwoStreams = selectedObject.song2Streams;
    let songThreeStreams = selectedObject.song3Streams;
    let songFourStreams = selectedObject.song4Streams;
    const totalStreams = songOneStreams + songTwoStreams + songThreeStreams + songFourStreams;

    console.log(totalStreams);

    const songOneStreamsStyle = songOneStreams * 100 / totalStreams;
    const songTwoStreamsStyle = songTwoStreams * 100 / totalStreams;
    const songThreeStreamsStyle = songThreeStreams * 100 / totalStreams;
    const songFourStreamsStyle = songFourStreams * 100 / totalStreams;
    const monthlyStyle = map(monthly, 0, 2000, 60, 160);

    console.log(songFourStreamsStyle);
    console.log(songOneStreamsStyle);

    // const songOneStreamsStyle = map(songOneStreams, 0, 1000, 20, 200);
    // const songTwoStreamsStyle = map(songTwoStreams, 0, 1000, 20, 200);
    // const songThreeStreamsStyle = map(songThreeStreams, 0, 1000, 20, 200);
    // const songFourStreamsStyle = map(songFourStreams, 0, 1000, 20, 200);
    // const monthlyStyle = map(monthly, 0, 2000, 60, 160);

    // ripple1.style.transform = `scaleX(${songOneStreamsStyle}%)`;
    // ripple2.style.transform = `scaleX(${songTwoStreamsStyle}%)`;
    // ripple3.style.transform = `scaleX(${songThreeStreamsStyle}%)`;
    // ripple4.style.transform = `scaleX(${songFourStreamsStyle}%)`;
    ripple1.style.width = `${songOneStreamsStyle}%`;
    ripple2.style.width = `${songTwoStreamsStyle}%`;
    ripple3.style.width = `${songThreeStreamsStyle}%`;
    ripple4.style.width = `${songFourStreamsStyle}%`;
    
    disc.style.transform = `scale(${monthlyStyle}%)`;
    container.style.transform = `scale(${monthlyStyle}% * 2)`;

    // ripple1.style.backgroundImage = `url('${selectedObject.src}')`;
    // ripple2.style.backgroundImage = `url('${selectedObject.src}')`;
    // ripple3.style.backgroundImage = `url('${selectedObject.src}')`;
    // ripple4.style.backgroundImage = `url('${selectedObject.src}')`;
    // disc.style.backgroundImage = `url('${selectedObject.src}')`;
};

customLogo();

function map(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    };

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
       