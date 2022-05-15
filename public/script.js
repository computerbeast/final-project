const getWeather = async (city) =>{
    const url = `./api/${city}`;
    try{
        
        const res = await fetch(url);
        const data = await res.json();

        document.querySelector("#"+city+"Weather").innerText = `${data.main.temp}°C`
        
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
