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

function updateFijiTime() {
  let FijiElement = document.querySelector("#fiji");
  if (FijiElement) {
    let FijiDateElement = FijiElement.querySelector(".date");
    let FijiTimeElement = FijiElement.querySelector(".time");
    let FijiTime = moment().tz("Pacific/Fiji");
    FijiDateElement.innerHTML = FijiTime.format("MMMM Do,YYYY");
    FijiTimeElement.innerHTML = FijiTime.format(
      "h:mm:ss [<small>]A[</small>] "
    );
  }
}
updateFijiTime();
setInterval(updateFijiTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  let homepage = document.querySelector("#homepage");
  if (homepage) {
    homepage.innerHTML = '<a href="index.html">Return to homepage</a>';
  }

  citiesElement.innerHTML = `
        <div class="city" >
          <div class="city-date">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do,YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        ${homepage.innerHTML}`;
}

//function toHomePage() {}

//toHomePage();

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
