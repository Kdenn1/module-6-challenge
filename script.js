//declare variables 
function displayWeather(data) {
    const forecast = data.weather;
    const weatherDiv = document.getElementById("citydisplay");
}

//request the url 
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=&appid=6fcd46ca0bc9014cd6e642c6441a435a")
.then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Network Error");
    }
})
.then(data => {
    console.log(data);
    displayWeather(data)
})
.catch((error) => console.error("fetch error:", error));

//output code into DOM
const timezone = displayWeather.timezone;
const heading = document.createElement('div');
heading.innerHTML = precipitation;
citydisplayDiv.appendChild(div);
    

//questions i have for whoever grades this  

//im very confused as to how to pull data from every city when the api only allows you to pinpoint one city?
//how do you call one specific point of data to be displayed in the div?











