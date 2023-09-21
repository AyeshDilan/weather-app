// get current date and time
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

function updateTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    document.getElementById("time-container").innerHTML = formattedTime;
}
  
setInterval(updateTime, 1000);
  
  
