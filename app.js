import axios from "axios";

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
    function getWeather(position) {
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
      // document.getElementById(
      //   "lat"
      // ).innerHTML = `latitude: ${position.coords.latitude}`;
      // document.getElementById(
      //   "lon"
      // ).innerHTML = `longitude: ${position.coords.longitude}`;
      const lat = document.getElementById("lat").value;
      const long = document.getElementById("lon").value;
      axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a12fa8ba1700f08e4754061a67fae535&units=metric`
      )
        .then(function (data) {
          return data;
        })

        .then(function (jsonData) {
          console.log(jsonData);
          document.getElementById(
            "city"
          ).innerText = `Current location: ${jsonData.data.name}`;
          document.getElementById(
            "temprature"
          ).innerText = `Current temp: ${jsonData.data.main.temp}`;
        })
        .catch(function (error) {
          console.error(error);
          document.getElementById("country").innerText = "can not get country";
          document.getElementById("city").innerText = "can not get city";
          document.getElementById("temprature").innerText = "temprature";
          document.getElementById("main").innerText =
            "can not get weather describtion";
        });
    }
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
getLocation();
const getBackgroundImage = () => {
  axios(
    "https://api.unsplash.com/photos/random/?client_id=KfJXYaZ3WhirQrXp0xrVLektxpzGX9rL6joi_KWlVi8"
  )
    .then(function (data) {
      return data;
    })

    .then(function (jsonData) {
      console.log(jsonData);
      document.getElementById(
        "creator"
      ).innerText = `Photo credit: ${jsonData.data.user.name}`;
      document.body.style.backgroundImage = `url(${jsonData.data.urls.regular})`;
    })
    .catch(function (error) {
      console.error(error);
      document.getElementById("creator").innerText = "can not get user";
      document.body.style.backgroundColor = "red";
    });
};
getBackgroundImage();

const getJoke = () => {
  axios("https://official-joke-api.appspot.com/random_joke")
    .then(function (data) {
      return data;
    })

    .then(function (jsonData) {
      console.log(jsonData);
      // document.getElementById("setup").innerText = `${jsonData.data.setup}`;
      document.getElementById(
        "punchline"
      ).innerHTML = `${jsonData.data.punchline}`;
    })
    .catch(function (error) {
      console.error(error);
      // document.getElementById("setup").innerText = "can not get joke ";
      document.getElementById("punchline").innerHTML =
        "can not get punchline joke";
    });
};
getJoke();

const getActivity = () => {
  axios("https://www.boredapi.com/api/activity")
    .then(function (data) {
      return data;
    })

    .then(function (jsonData) {
      console.log(jsonData);
      document.getElementById(
        "activity"
      ).innerText = `do this if bored: ${jsonData.data.activity}`;
    })
    .catch(function (error) {
      console.error(error);
      document.getElementById("activity").innerText =
        "can not ger random activity";
    });
};
getActivity();

setInterval(function timeCounter() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let time =
    h +
    ":" +
    m +
    ":" +
    s +
    " " +
    "\n" +
    "\n" +
    year +
    "--" +
    month +
    "--" +
    date;
  document.getElementById("clock").innerText = time;
}, 1000);
