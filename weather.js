 var weather = {
     "apikey": "09e5dd371210cca39d4148f99ca3fa36",
     fetchWeather: function(city){
         fetch(
             "http://api.openweathermap.org/data/2.5/weather?q="
             + city +
              "&&units=metric&appid=09e5dd371210cca39d4148f99ca3fa36"
             ).then((response)=>response.json())
             .then((data)=>this.displayWeather(data));
     },
     displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".humidity").innerText = "humidity :" + humidity + "%";
        document.querySelector(".speed").innerText = "wind-speed :" + speed + "Km/hr";
        var element = document.getElementById("update");
        element.innerHTML = new Date().toLocaleString();
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
  }; 
  document.querySelector(".search-button").addEventListener("click", function(){
        weather.search();
  });
  document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        weather.search();
    }
}

  