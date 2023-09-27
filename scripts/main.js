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

//Search bar
const  inputValue = document.getElementById("search-box");
const searchedLocation = $("#seach-location");

//map
var map = $("#map");

//Current wearher main panel
const searchedLocationAvgTemp = $("#current-location-avg-temp");
const searchedLocationCondition = $("#current-weather-status");
const searchedLocationConditionImg = $("#current-cundition-img");

//Current weather sub panel
const searchedLocationCurrentHumidity = $("#current-location-humidity");
const searchedLocationFeelslike = $("#current-location-feel-temp");
const searchedLocationWinSpreed = $("#current-location-win-speed");
const searchedLocationPressure = $("#current-location-air-pressure");
const searchedLocationUv = $("#current-location-uv-index");
const searchedLocationPrecipitation = $("#current-location-precipitation");

//Astrlogy container
const searchedLocationSunrise = $("#current-sun-rise-time");
const searchedLocationSunset = $("#current-sun-set-time");
const searchedLocationMoonrise = $("#current-moon-rise-time");
const searchedLocationMoonset = $("#current-moon-set-time");

//hour container
const zeroForecastImg = $("#in-zero-hour-image");
const oneForecastImg = $("#in-one-hour-image");
const twoForecastImg = $("#in-two-hour-image");
const threeForecastImg = $("#in-three-hour-image");
const fourForecastImg = $("#in-four-hour-image");
const fiveForecastImg = $("#in-five-hour-image");
const sixForecastImg = $("#in-six-hour-image");
const sevenForecastImg = $("#in-seven-hour-image");
const eightForecastImg = $("#in-eight-hour-image");
const nineForecastImg = $("#in-nine-hour-image");
const tenForecastImg = $("#in-ten-hour-image");
const elevenForecastImg = $("#in-eleven-hour-image");
const twelveForecastImg = $("#in-twlve-hour-image");
const thirteenForecastImg = $("#in-thirteen-hour-image");
const fourteenForecastImg = $("#in-fourteen-hour-image");
const fifteenForecastImg = $("#in-fifteen-hour-image");
const sixteenForecastImg = $("#in-sixteen-hour-image");
const seventeenForecastImg = $("#in-seventeen-hour-image");
const eighteenForecastImg = $("#in-eighteen-hour-image");
const nineteenForecastImg = $("#in-nineteen-hour-image");
const twentyForecastImg = $("#in-twenty-hour-image");
const twentyoneForecastImg = $("#in-twenty-one-hour-image");
const twentytwoForecastImg = $("#in-twenty-two-hour-image");
const twentythreeForecastImg = $("#in-twenty-three-hour-image");

const zeroForecastTemp = $("#in-zero-hour-avg-temp");
const oneForecastTemp = $("#in-one-hour-avg-temp");
const twoForecastTemp = $("#in-two-hour-avg-temp");
const threeForecastTemp = $("#in-three-hour-avg-temp");
const fourForecastTemp = $("#in-four-hour-avg-temp");
const fiveForecastTemp = $("#in-five-hour-avg-temp");
const sixForecastTemp = $("#in-six-hour-avg-temp");
const sevenForecastTemp = $("#in-seven-hour-avg-temp");
const eightForecastTemp = $("#in-eight-hour-avg-temp");
const nineForecastTemp = $("#in-nine-hour-avg-temp");
const tenForecastTemp = $("#in-ten-hour-avg-temp");
const elevenForecastTemp = $("#in-eleven-hour-avg-temp");
const twelveForecastTemp = $("#in-twlve-hour-avg-temp");
const thirteenForecastTemp = $("#in-thirteen-hour-avg-temp");
const fourteenForecastTemp = $("#in-fourteen-hour-avg-temp");
const fifteenForecastTemp = $("#in-fifteen-hour-avg-temp");
const sixteenForecastTemp = $("#in-sixteen-hour-avg-temp");
const seventeenForecastTemp = $("#in-seventeen-hour-avg-temp");
const eighteenForecastTemp = $("#in-eighteen-hour-avg-temp");
const nineteenForecastTemp = $("#in-nineteen-hour-avg-temp");
const twentyForecastTemp = $("#in-twenty-hour-avg-temp");
const twentyoneForecastTemp = $("#in-twenty-one-hour-avg-temp");
const twentytwoForecastTemp = $("#in-twenty-two-hour-avg-temp");
const twentythreeForecastTemp = $("#in-twenty-three-hour-avg-temp");

const zeroForecastStatus = $("#in-zero-hour-status");
const oneForecastStatus = $("#in-one-hour-status");
const twoForecastStatus = $("#in-two-hour-status");
const threeForecastStatus = $("#in-three-hour-status");
const fourForecastStatus = $("#in-four-hour-status");
const fiveForecastStatus = $("#in-five-hour-status");
const sixForecastStatus = $("#in-six-hour-status");
const sevenForecastStatus = $("#in-seven-hour-status");
const eightForecastStatus = $("#in-eight-hour-status");
const nineForecastStatus = $("#in-nine-hour-status");
const tenForecastStatus = $("#in-ten-hour-status");
const elevenForecastStatus = $("#in-eleven-hour-status");
const twelveForecastStatus = $("#in-twlve-hour-status");
const thirteenForecastStatus = $("#in-thirteen-hour-status");
const fourteenForecastStatus = $("#in-fourteen-hour-status");
const fifteenForecastStatus = $("#in-fifteen-hour-status");
const sixteenForecastStatus = $("#in-sixteen-hour-status");
const seventeenForecastStatus = $("#in-seventeen-hour-status");
const eighteenForecastStatus = $("#in-eighteen-hour-status");
const nineteenForecastStatus = $("#in-nineteen-hour-status");
const twentyForecastStatus = $("#in-twenty-hour-status");
const twentyoneForecastStatus = $("#in-twenty-one-hour-status");
const twentytwoForecastStatus = $("#in-twenty-two-hour-status");
const twentythreeForecastStatus = $("#in-twenty-three-hour-status");

//next 6 days container
const dayOneForecastDay = $("#after-one-day");
const dayTwoForecastDay = $("#after-two-day");
const dayThreeForecastDay = $("#after-three-day");
const dayFourForecastDay = $("#after-four-day");
const dayFiveForecastDay = $("#after-five-day");
const daySixForecastDay = $("#after-six-day");

const dayOneForecastImg = $("#after-one-day-img");
const dayTwoForecastImg = $("#after-two-day-img");
const dayThreeForecastImg = $("#after-three-day-img");
const dayFourForecastImg = $("#after-four-day-img");
const dayFiveForecastImg = $("#after-five-day-img");
const daySixForecastImg = $("#after-six-day-img");

const dayOneForecastTemp = $("#after-one-day-temp");
const dayTwoForecastTemp = $("#after-two-day-temp");
const dayThreeForecastTemp = $("#after-three-day-temp");
const dayFourForecastTemp = $("#after-four-day-temp");
const dayFiveForecastTemp = $("#after-five-day-temp");
const daySixForecastTemp = $("#after-six-day-temp");

const dayOneForecastStatus = $("#after-one-day-status");
const dayTwoForecastStatus = $("#after-two-day-status");
const dayThreeForecastStatus = $("#after-three-day-status");
const dayFourForecastStatus = $("#after-four-day-status");
const dayFiveForecastStatus = $("#after-five-day-status");
const daySixForecastStatus = $("#after-six-day-status");

//more details day one
const moreDetailsMaxTemp = $("#btn-more-details-day-one-max-temp");
const moreDetailsMinTemp = $("#btn-more-details-day-one-min-temp");
const moreDetailsChanceToRain = $("#btn-more-details-day-one-israin");
const moreDetailsChanceToSnow = $("#btn-more-details-day-one-is-snow");
const moreDetailsPrecipitation = $("#btn-more-details-day-one-avg-precipitation");
const moreDetailsAvgVisibility = $("#btn-more-details-day-one-avg-visibility");
const moreDetailsAvgHumidity = $("#btn-more-details-day-one-avg-humidity");
const moreDetailsUvIndex = $("#btn-more-details-day-one-uv");
const moreDetailsSunrise = $("#btn-more-details-day-one-sunrise");
const moreDetailsSunset = $("#btn-more-details-day-one-sunset");

//input section to search btn key forcus
inputValue.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputValue.value != ""){
        document.getElementById("btn-search").focus();
    }
})

//click event search button
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

    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}&days=7`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);
            //Hour-by-hour weather conditions today
            zeroForecastImg.attr("src",resp.forecast.forecastday[0].hour[0].condition.icon);
            oneForecastImg.attr("src",resp.forecast.forecastday[0].hour[1].condition.icon);
            twoForecastImg.attr("src",resp.forecast.forecastday[0].hour[2].condition.icon);
            threeForecastImg.attr("src",resp.forecast.forecastday[0].hour[3].condition.icon);
            fourForecastImg.attr("src",resp.forecast.forecastday[0].hour[4].condition.icon);
            fiveForecastImg.attr("src",resp.forecast.forecastday[0].hour[5].condition.icon);
            sixForecastImg.attr("src",resp.forecast.forecastday[0].hour[6].condition.icon);
            sevenForecastImg.attr("src",resp.forecast.forecastday[0].hour[7].condition.icon);
            eightForecastImg.attr("src",resp.forecast.forecastday[0].hour[8].condition.icon);
            nineForecastImg.attr("src",resp.forecast.forecastday[0].hour[9].condition.icon);
            tenForecastImg.attr("src",resp.forecast.forecastday[0].hour[10].condition.icon);
            elevenForecastImg.attr("src",resp.forecast.forecastday[0].hour[11].condition.icon);
            twelveForecastImg.attr("src",resp.forecast.forecastday[0].hour[12].condition.icon);
            thirteenForecastImg.attr("src",resp.forecast.forecastday[0].hour[13].condition.icon);
            fourteenForecastImg.attr("src",resp.forecast.forecastday[0].hour[14].condition.icon);
            fifteenForecastImg.attr("src",resp.forecast.forecastday[0].hour[15].condition.icon);
            sixteenForecastImg.attr("src",resp.forecast.forecastday[0].hour[16].condition.icon);
            seventeenForecastImg.attr("src",resp.forecast.forecastday[0].hour[17].condition.icon);
            eighteenForecastImg.attr("src",resp.forecast.forecastday[0].hour[18].condition.icon);
            nineteenForecastImg.attr("src",resp.forecast.forecastday[0].hour[19].condition.icon);
            twentyForecastImg.attr("src",resp.forecast.forecastday[0].hour[20].condition.icon);
            twentyoneForecastImg.attr("src",resp.forecast.forecastday[0].hour[21].condition.icon);
            twentytwoForecastImg.attr("src",resp.forecast.forecastday[0].hour[22].condition.icon);
            twentythreeForecastImg.attr("src",resp.forecast.forecastday[0].hour[23].condition.icon);

            zeroForecastTemp.text((resp.forecast.forecastday[0].hour[0].temp_c)+"°C");
            oneForecastTemp.text((resp.forecast.forecastday[0].hour[1].temp_c)+"°C");
            twoForecastTemp.text((resp.forecast.forecastday[0].hour[2].temp_c)+"°C");
            threeForecastTemp.text((resp.forecast.forecastday[0].hour[3].temp_c)+"°C");
            fourForecastTemp.text((resp.forecast.forecastday[0].hour[4].temp_c)+"°C");
            fiveForecastTemp.text((resp.forecast.forecastday[0].hour[5].temp_c)+"°C");
            sixForecastTemp.text((resp.forecast.forecastday[0].hour[6].temp_c)+"°C");
            sevenForecastTemp.text((resp.forecast.forecastday[0].hour[7].temp_c)+"°C");
            eightForecastTemp.text((resp.forecast.forecastday[0].hour[8].temp_c)+"°C");
            nineForecastTemp.text((resp.forecast.forecastday[0].hour[9].temp_c)+"°C");
            tenForecastTemp.text((resp.forecast.forecastday[0].hour[10].temp_c)+"°C");
            elevenForecastTemp.text((resp.forecast.forecastday[0].hour[11].temp_c)+"°C");
            twelveForecastTemp.text((resp.forecast.forecastday[0].hour[12].temp_c)+"°C");
            thirteenForecastTemp.text((resp.forecast.forecastday[0].hour[13].temp_c)+"°C");
            fourteenForecastTemp.text((resp.forecast.forecastday[0].hour[14].temp_c)+"°C");
            fifteenForecastTemp.text((resp.forecast.forecastday[0].hour[15].temp_c)+"°C");
            sixteenForecastTemp.text((resp.forecast.forecastday[0].hour[16].temp_c)+"°C");
            seventeenForecastTemp.text((resp.forecast.forecastday[0].hour[17].temp_c)+"°C");
            eighteenForecastTemp.text((resp.forecast.forecastday[0].hour[18].temp_c)+"°C");
            nineteenForecastTemp.text((resp.forecast.forecastday[0].hour[19].temp_c)+"°C");
            twentyForecastTemp.text((resp.forecast.forecastday[0].hour[20].temp_c)+"°C");
            twentyoneForecastTemp.text((resp.forecast.forecastday[0].hour[21].temp_c)+"°C");
            twentytwoForecastTemp.text((resp.forecast.forecastday[0].hour[22].temp_c)+"°C");
            twentythreeForecastTemp.text((resp.forecast.forecastday[0].hour[23].temp_c)+"°C");

            zeroForecastStatus.text(resp.forecast.forecastday[0].hour[0].condition.text);
            oneForecastStatus.text(resp.forecast.forecastday[0].hour[1].condition.text);
            twoForecastStatus.text(resp.forecast.forecastday[0].hour[2].condition.text);
            threeForecastStatus.text(resp.forecast.forecastday[0].hour[3].condition.text);
            fourForecastStatus.text(resp.forecast.forecastday[0].hour[4].condition.text);
            fiveForecastStatus.text(resp.forecast.forecastday[0].hour[5].condition.text);
            sixForecastStatus.text(resp.forecast.forecastday[0].hour[6].condition.text);
            sevenForecastStatus.text(resp.forecast.forecastday[0].hour[7].condition.text);
            eightForecastStatus.text(resp.forecast.forecastday[0].hour[8].condition.text);
            nineForecastStatus.text(resp.forecast.forecastday[0].hour[9].condition.text);
            tenForecastStatus.text(resp.forecast.forecastday[0].hour[10].condition.text);
            elevenForecastStatus.text(resp.forecast.forecastday[0].hour[11].condition.text);
            twelveForecastStatus.text(resp.forecast.forecastday[0].hour[12].condition.text);
            thirteenForecastStatus.text(resp.forecast.forecastday[0].hour[13].condition.text);
            fourteenForecastStatus.text(resp.forecast.forecastday[0].hour[14].condition.text);
            fifteenForecastStatus.text(resp.forecast.forecastday[0].hour[15].condition.text);
            sixteenForecastStatus.text(resp.forecast.forecastday[0].hour[16].condition.text);
            seventeenForecastStatus.text(resp.forecast.forecastday[0].hour[17].condition.text);
            eighteenForecastStatus.text(resp.forecast.forecastday[0].hour[18].condition.text);
            nineteenForecastStatus.text(resp.forecast.forecastday[0].hour[19].condition.text);
            twentyForecastStatus.text(resp.forecast.forecastday[0].hour[20].condition.text);
            twentyoneForecastStatus.text(resp.forecast.forecastday[0].hour[21].condition.text);
            twentytwoForecastStatus.text(resp.forecast.forecastday[0].hour[22].condition.text);
            twentythreeForecastStatus.text(resp.forecast.forecastday[0].hour[23].condition.text);  

            //weather forcast of next 6 days
            dayOneForecastDay.text(resp.forecast.forecastday[1].date);
            dayTwoForecastDay.text(resp.forecast.forecastday[2].date);
            dayThreeForecastDay.text(resp.forecast.forecastday[3].date);
            dayFourForecastDay.text(resp.forecast.forecastday[4].date);
            dayFiveForecastDay.text(resp.forecast.forecastday[5].date);
            daySixForecastDay.text(resp.forecast.forecastday[6].date);

            dayOneForecastImg.attr("src",resp.forecast.forecastday[1].day.condition.icon);
            dayTwoForecastImg.attr("src",resp.forecast.forecastday[2].day.condition.icon);
            dayThreeForecastImg.attr("src",resp.forecast.forecastday[3].day.condition.icon);
            dayFourForecastImg.attr("src",resp.forecast.forecastday[4].day.condition.icon);
            dayFiveForecastImg.attr("src",resp.forecast.forecastday[5].day.condition.icon);
            daySixForecastImg.attr("src",resp.forecast.forecastday[6].day.condition.icon);

            dayOneForecastTemp.text((resp.forecast.forecastday[1].day.avgtemp_c)+"°C");
            dayTwoForecastTemp.text((resp.forecast.forecastday[2].day.avgtemp_c)+"°C");
            dayThreeForecastTemp.text((resp.forecast.forecastday[3].day.avgtemp_c)+"°C");
            dayFourForecastTemp.text((resp.forecast.forecastday[4].day.avgtemp_c)+"°C");
            dayFiveForecastTemp.text((resp.forecast.forecastday[5].day.avgtemp_c)+"°C");
            daySixForecastTemp.text((resp.forecast.forecastday[6].day.avgtemp_c)+"°C");

            dayOneForecastStatus.text(resp.forecast.forecastday[1].day.condition.text);
            dayTwoForecastStatus.text(resp.forecast.forecastday[2].day.condition.text);
            dayThreeForecastStatus.text(resp.forecast.forecastday[3].day.condition.text);
            dayFourForecastStatus.text(resp.forecast.forecastday[4].day.condition.text);
            dayFiveForecastStatus.text(resp.forecast.forecastday[5].day.condition.text);
            daySixForecastStatus.text(resp.forecast.forecastday[6].day.condition.text);

         
            // day one details
            moreDetailsMaxTemp.text((resp.forecast.forecastday[1].day.maxtemp_c)+"°C");
            moreDetailsMinTemp.text((resp.forecast.forecastday[1].day.mintemp_c)+"°C");
            moreDetailsChanceToRain.text((resp.forecast.forecastday[1].day.daily_chance_of_rain)+"%");
            moreDetailsChanceToSnow.text((resp.forecast.forecastday[1].day.daily_chance_of_snow)+"%");
            moreDetailsPrecipitation.text((resp.forecast.forecastday[1].day.totalprecip_mm)+"mm");
            moreDetailsAvgVisibility.text((resp.forecast.forecastday[1].day.avgvis_km)+"km");
            moreDetailsAvgHumidity.text((resp.forecast.forecastday[1].day.avghumidity)+"%");
            moreDetailsUvIndex.text(resp.forecast.forecastday[1].day.uv);
            moreDetailsSunrise.text(resp.forecast.forecastday[1].astro.sunrise);
            moreDetailsSunset.text(resp.forecast.forecastday[1].astro.sunset);       
        }
    });   
}
//select next week forcast buttons
let productButtons = document.querySelectorAll('button.btn-more-details');

productButtons.forEach(productButton => {
  productButton.addEventListener('click', e => {
    let button = e.currentTarget;
    productButtons.forEach(btn => btn !== button && btn.classList.remove('selected'));
    button.classList.toggle('selected');
  });
});

//frcast day one more details
function moreDetailsDayOne(){
    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}&days=7`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);
           
            moreDetailsMaxTemp.text((resp.forecast.forecastday[1].day.maxtemp_c)+"°C");
            moreDetailsMinTemp.text((resp.forecast.forecastday[1].day.mintemp_c)+"°C");
            moreDetailsChanceToRain.text((resp.forecast.forecastday[1].day.daily_chance_of_rain)+"%");
            moreDetailsChanceToSnow.text((resp.forecast.forecastday[1].day.daily_chance_of_snow)+"%");
            moreDetailsPrecipitation.text((resp.forecast.forecastday[1].day.totalprecip_mm)+"mm");
            moreDetailsAvgVisibility.text((resp.forecast.forecastday[1].day.avgvis_km)+"km");
            moreDetailsAvgHumidity.text((resp.forecast.forecastday[1].day.avghumidity)+"%");
            moreDetailsUvIndex.text(resp.forecast.forecastday[1].day.uv);
            moreDetailsSunrise.text(resp.forecast.forecastday[1].astro.sunrise);
            moreDetailsSunset.text(resp.forecast.forecastday[1].astro.sunset);
                  
        }
    });
}

//frcast day two more details
function moreDetailsDayTwo(){
    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}&days=7`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);
           
            moreDetailsMaxTemp.text((resp.forecast.forecastday[2].day.maxtemp_c)+"°C");
            moreDetailsMinTemp.text((resp.forecast.forecastday[2].day.mintemp_c)+"°C");
            moreDetailsChanceToRain.text((resp.forecast.forecastday[2].day.daily_chance_of_rain)+"%");
            moreDetailsChanceToSnow.text((resp.forecast.forecastday[2].day.daily_chance_of_snow)+"%");
            moreDetailsPrecipitation.text((resp.forecast.forecastday[2].day.totalprecip_mm)+"mm");
            moreDetailsAvgVisibility.text((resp.forecast.forecastday[2].day.avgvis_km)+"km");
            moreDetailsAvgHumidity.text((resp.forecast.forecastday[2].day.avghumidity)+"%");
            moreDetailsUvIndex.text(resp.forecast.forecastday[2].day.uv);
            moreDetailsSunrise.text(resp.forecast.forecastday[2].astro.sunrise);
            moreDetailsSunset.text(resp.forecast.forecastday[2].astro.sunset);
                  
        }
    });
}

//frcast day three more details
function moreDetailsDayThree(){
    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}&days=7`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);
           
            moreDetailsMaxTemp.text((resp.forecast.forecastday[3].day.maxtemp_c)+"°C");
            moreDetailsMinTemp.text((resp.forecast.forecastday[3].day.mintemp_c)+"°C");
            moreDetailsChanceToRain.text((resp.forecast.forecastday[3].day.daily_chance_of_rain)+"%");
            moreDetailsChanceToSnow.text((resp.forecast.forecastday[3].day.daily_chance_of_snow)+"%");
            moreDetailsPrecipitation.text((resp.forecast.forecastday[3].day.totalprecip_mm)+"mm");
            moreDetailsAvgVisibility.text((resp.forecast.forecastday[3].day.avgvis_km)+"km");
            moreDetailsAvgHumidity.text((resp.forecast.forecastday[3].day.avghumidity)+"%");
            moreDetailsUvIndex.text(resp.forecast.forecastday[3].day.uv);
            moreDetailsSunrise.text(resp.forecast.forecastday[3].astro.sunrise);
            moreDetailsSunset.text(resp.forecast.forecastday[3].astro.sunset);
                  
        }
    });
}

//frcast day fore more details
function moreDetailsDayFour(){
    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}&days=7`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);
           
            moreDetailsMaxTemp.text((resp.forecast.forecastday[4].day.maxtemp_c)+"°C");
            moreDetailsMinTemp.text((resp.forecast.forecastday[4].day.mintemp_c)+"°C");
            moreDetailsChanceToRain.text((resp.forecast.forecastday[4].day.daily_chance_of_rain)+"%");
            moreDetailsChanceToSnow.text((resp.forecast.forecastday[4].day.daily_chance_of_snow)+"%");
            moreDetailsPrecipitation.text((resp.forecast.forecastday[4].day.totalprecip_mm)+"mm");
            moreDetailsAvgVisibility.text((resp.forecast.forecastday[4].day.avgvis_km)+"km");
            moreDetailsAvgHumidity.text((resp.forecast.forecastday[4].day.avghumidity)+"%");
            moreDetailsUvIndex.text(resp.forecast.forecastday[4].day.uv);
            moreDetailsSunrise.text(resp.forecast.forecastday[4].astro.sunrise);
            moreDetailsSunset.text(resp.forecast.forecastday[4].astro.sunset);
                  
        }
    });
}

//frcast day five more details
function moreDetailsDayFive(){
    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}&days=7`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);
           
            moreDetailsMaxTemp.text((resp.forecast.forecastday[5].day.maxtemp_c)+"°C");
            moreDetailsMinTemp.text((resp.forecast.forecastday[5].day.mintemp_c)+"°C");
            moreDetailsChanceToRain.text((resp.forecast.forecastday[5].day.daily_chance_of_rain)+"%");
            moreDetailsChanceToSnow.text((resp.forecast.forecastday[5].day.daily_chance_of_snow)+"%");
            moreDetailsPrecipitation.text((resp.forecast.forecastday[5].day.totalprecip_mm)+"mm");
            moreDetailsAvgVisibility.text((resp.forecast.forecastday[5].day.avgvis_km)+"km");
            moreDetailsAvgHumidity.text((resp.forecast.forecastday[5].day.avghumidity)+"%");
            moreDetailsUvIndex.text(resp.forecast.forecastday[5].day.uv);
            moreDetailsSunrise.text(resp.forecast.forecastday[5].astro.sunrise);
            moreDetailsSunset.text(resp.forecast.forecastday[5].astro.sunset);
                  
        }
    });
}

//frcast day six more details
function moreDetailsDaySix(){
    $.ajax({
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=f51823be6af44f489f3184638232409&q=${inputValue.value}&days=7`, // Use template literals to interpolate inputValue
        success: (resp) => {
            console.log(resp);
           
            moreDetailsMaxTemp.text((resp.forecast.forecastday[6].day.maxtemp_c)+"°C");
            moreDetailsMinTemp.text((resp.forecast.forecastday[6].day.mintemp_c)+"°C");
            moreDetailsChanceToRain.text((resp.forecast.forecastday[6].day.daily_chance_of_rain)+"%");
            moreDetailsChanceToSnow.text((resp.forecast.forecastday[6].day.daily_chance_of_snow)+"%");
            moreDetailsPrecipitation.text((resp.forecast.forecastday[6].day.totalprecip_mm)+"mm");
            moreDetailsAvgVisibility.text((resp.forecast.forecastday[6].day.avgvis_km)+"km");
            moreDetailsAvgHumidity.text((resp.forecast.forecastday[6].day.avghumidity)+"%");
            moreDetailsUvIndex.text(resp.forecast.forecastday[6].day.uv);
            moreDetailsSunrise.text(resp.forecast.forecastday[6].astro.sunrise);
            moreDetailsSunset.text(resp.forecast.forecastday[6].astro.sunset);
                  
        }
    });
}





  
  
  
