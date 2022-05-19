const getWeather = async (city) =>{
    const url = `./api/${city}`;
    try{
        
        const res = await fetch(url);
        const data = await res.json();

        document.querySelector("#"+city+"Weather").innerText = `${data.main.temp}°C`;

        weatherIcon = data['weather'][0]['icon'];

        document.querySelector("#"+city+"Icon").src = "http://openweathermap.org/img/wn/"+weatherIcon+".png";

    }
    catch (error) {
        return error;
    }
    }
    

getWeather("tallinn");
getWeather("tartu");
getWeather("parnu");
getWeather("narva");
getWeather("kuressaare");
getWeather("voru");
getWeather("paide");
getWeather("kardla");
getWeather("rakvere");