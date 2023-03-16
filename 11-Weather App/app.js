const input = document.querySelector(".inputText");
const weatherIcon = document.querySelector(".weatherIcon")
const btn = document.querySelector(".btn");


btn.addEventListener("click", function () {
    getData(input.value)
})

function getData(data) {
    const API_key = "2912d6deb1d8181f1cf27ae9e55889ed";
    const dataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_key}&units=metric`;
    fetch(dataUrl)
        .then(res => res.json())
        .then(data => {
            const { name, sys: { country }, main: { temp, feels_like }, weather: [{ description }] } = data;
            console.log(name, country, temp, feels_like, description);

            document.querySelector(".temp").innerHTML = `${temp} °C`;
            document.querySelector(".weather").innerHTML = `${description}`;
            document.querySelector(".feel").innerHTML = `Hissedilen: ${feels_like} °C`;
            document.querySelector(".city").innerHTML = `${name} - ${country}`;

            if (data.weather[0].main == "Sunny") {
                weatherIcon.src = "img/sun.png"
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "img/rain.png"
            } else if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "img/cloudy.png"
            } else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "img/snowy.png"
            }
        })
        .catch(err => console.log(err))
}