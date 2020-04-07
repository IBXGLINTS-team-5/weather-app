const link = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'

fetch(`${link}`)
    .then(response => {
        return response.json()

    })
    .then(data => {
        console.log(data)

        console.log(`data longtitude ${data.coord.lon} data latitude ${data.coord.lat} 
    data weather = id : ${data.weather[0].id} main: ${data.weather[0].main} descriptions: ${data.weather[0].description} icons: ${data.weather[0].icon}
    data base = ${data.base}
    data main = temperature : ${data.main.temp} feels_like: ${data.main.feels_like} temp_min: ${data.main.temp_min} temp_max: ${data.main.temp_max} pressure: ${data.main.preesure} humidity: ${ data.main.humidity}
    data country ${data.sys.country}
    data ${data.name}`)
        //     const weatherHTML = `data longtitude ${data.coord.lon} data latitude${data.coord.lat}
        // data weather = id : ${data.weather[0].id} main:${data.weather[0].main} descriptions:${data.weather[0].description} icons:${data.weather[0].icon}
        // data base = ${data.base}
        // data main = temperature :${data.main.temp} feels_like:${data.main.feels_like} temp_min:${data.main.temp_min} temp_max:${data.main.temp_max} pressure:${data.main.preesure} humidity:${ data.main.humidity}
        // data country${data.sys.country}
        // data ${data.name}`

        const weatherHTML = `
            <div class="col text-center">
                <h3>Today's weather in the city of ${data.name} is ${data.weather[0].main}</h3>
                <p>overview of today's weather ${data.weather[0].description} with a minimum temperature ${data.main.temp_min} and maximum temperature ${data.main.temp_max}<p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.6529516481!2d106.68942891339466!3d-6.22938669747817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1586254416252!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        `
       
        document.getElementById('weather').innerHTML = weatherHTML
    })