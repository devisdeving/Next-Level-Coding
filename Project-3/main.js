const url = 'https://spotify23.p.rapidapi.com/artist_singles/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=20';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3a5bbb1dd7mshffb5b1fd5cb1d64p1a7b82jsn5c555b7faa62',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        console.log(result);
        const windDeg = data.current.wind_degree;
        const windSpeed = data.current.wind_mph;

        const windDegStyle = map(windDeg, 0, 360, -70, 70);
        const windSpeedStyle = map(windSpeed, 0, 80, 0, 15);

        console.log(windDeg, windSpeed);

        logoElem.style.transform = `skew(${windDegStyle}deg)`;
        logoElem.style.filter = `blur(${windSpeedStyle}px)`;
    })
    .catch(function (error) {
        console.error(error);
    });


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
       