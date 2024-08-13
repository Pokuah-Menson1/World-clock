function updateLaxTime() {
  let laxElement = document.querySelector("#lax");
  if (laxElement) {
    let laxDateElement = laxElement.querySelector(".date");
    let laxTimeElement = laxElement.querySelector(".time");
    let laxTime = moment().tz("America/Los_Angeles");
    laxDateElement.innerHTML = laxTime.format("MMMM Do,YYYY");
    laxTimeElement.innerHTML = laxTime.format("h:mm:ss [<small>]A[</small>] ");
  }
}
updateLaxTime();
setInterval(updateLaxTime, 1000);

function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do,YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city" >
          <div class="city-date">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do,YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
