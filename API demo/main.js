let myUrl = 'https://api.weatherapi.com/v1/current.json?key=43a0610734b24e6f82505625231710&q=London&aqi=no';
let logoElem = document.getElementById('logo');

fetch(myUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        const windDeg = data.current.wind_degree;
        const windSpeed = data.current.wind_mph;

        const windDegStyle = map(windDeg, 0, 360, -70, 70);
        const windSpeedStyle = map(windSpeed, 0, 80, 0, 15);

        console.log(windDeg, windSpeed);

        logoElem.style.transform = `skew(${windDegStyle}deg)`;
        logoElem.style.filter = `blur(${windSpeedStyle}px)`;
    })

    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

    function map(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }