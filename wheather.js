const apiKey = "823ae386985fc14d397508cf98758f1b"
document.getElementById("searchBtn").addEventListener("click", getWeather)
async function getWeather() {
    const city = document.getElementById("city").value
    if(city === ""){
        alert("Enter city name")
        return;
    }
    try{
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        const data = await response.json()
        if(data.cod !== 200){
            document.getElementById("weatherResult").innerHTML =
            "<p>City not found</p>"
            return
        }
        document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2><br>
            <p>🌡️Temperature: ${data.main.temp} &degC</p><br>
            <p>☁️Weather: ${data.weather[0].description}</p><br>
            <p>💧Humidity: ${data.main.humidity}%</p><br>
            <p>💨Wind Speed: ${data.wind.speed} m/s</p>
        `
    }
    catch(error){
        document.getElementById("weatherResult").innerHTML =
        "<p>Error fetching data</p>"
    }
}