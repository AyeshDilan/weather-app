// get current date and time

//get current date
const formattedDate = getFormattedDate();
document.getElementById("date-container").innerHTML = formattedDate;

function getFormattedDate() {
    const date = new Date();
    const dayOfWeek = date.toLocaleString("en", { weekday: "long" });
    const month = date.toLocaleString("en", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${"Today is "+day} ${month} ${year} ${ "\t"+dayOfWeek}`;
}

//get current time

function updateTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    document.getElementById("time-container").innerHTML = formattedTime;
}
  
setInterval(updateTime, 1000);

//--------------------------------
const inputValue = document.getElementById("search-box");
var map =document.getElementById("map");
const searchedLocation = $("#seach-location");
const searchedLocationAvgTemp = $("#current-location-avg-temp");
const searchedLocationCondition = $("#current-weather-status");
const searchedLocationConditionImg = $("#current-cundition-img");
const searchedLocationCurrentHumidity = $("#current-location-humidity");
const searchedLocationFeelslike = $("#current-location-feel-temp");
const searchedLocationWinSpreed = $("#current-location-win-speed");
const searchedLocationPressure = $("#current-location-air-pressure");
const searchedLocationUv = $("#current-location-uv-index");
const searchedLocationPrecipitation = $("#current-location-precipitation");
const searchedLocationSunrise = $("#current-sun-rise-time");
const searchedLocationSunset = $("#current-sun-set-time");
const searchedLocationMoonrise = $("#current-moon-rise-time");
const searchedLocationMoonset = $("#current-moon-set-time");
var map = $("#map");

function searchBtnOnClick() {
    console.log(inputValue.value); // Use .value to get the value of the input field
    var newSrc = `https://maps.google.com/maps?q=${inputValue.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    map.attr("src",newSrc);

    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/current.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);

            searchedLocation.text(resp.location.name);
            searchedLocationAvgTemp.text((resp.current.temp_c)+"°C");
            searchedLocationCondition.text(resp.current.condition.text);
            searchedLocationConditionImg.attr("src", resp.current.condition.icon);
            searchedLocationCurrentHumidity.text((resp.current.humidity)+"%");
            searchedLocationFeelslike.text((resp.current.feelslike_c)+"°C");
            searchedLocationWinSpreed.text((resp.current.wind_kph)+"kph");
            searchedLocationPressure.text((resp.current.pressure_mb)+"mb");
            searchedLocationUv.text(resp.current.uv);
            searchedLocationPrecipitation.text((resp.current.precip_mm)+"mm");
            
        }
    })

    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/astronomy.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);

           
            searchedLocationSunrise.text(resp.astronomy.astro.sunrise);
            searchedLocationSunset.text(resp.astronomy.astro.sunset);
            searchedLocationMoonrise.text(resp.astronomy.astro.moonrise);
            searchedLocationMoonset.text(resp.astronomy.astro.moonset);
        }
    })

    



  
}

  
  
  
