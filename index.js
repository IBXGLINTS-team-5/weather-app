const link = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'

fetch(`${link}`)
    .then(response => {
        return response.json()

    })
    .then(data => {
        console.log(data)

        console.log(`data longtitude ${data.coord.lon} data latitude${data.coord.lat}
    data weather = id : ${data.weather[0].id} main:${data.weather[0].main} descriptions:${data.weather[0].description} icons:${data.weather[0].icon}
    data base = ${data.base}
    data main = temperature :${data.main.temp} feels_like:${data.main.feels_like} temp_min:${data.main.temp_min} temp_max:${data.main.temp_max} pressure:${data.main.preesure} humidity:${ data.main.humidity}
    data country${data.sys.country}
    data ${data.name}`)
        //     const weatherHTML = `data longtitude ${data.coord.lon} data latitude${data.coord.lat}
        // data weather = id : ${data.weather[0].id} main:${data.weather[0].main} descriptions:${data.weather[0].description} icons:${data.weather[0].icon}
        // data base = ${data.base}
        // data main = temperature :${data.main.temp} feels_like:${data.main.feels_like} temp_min:${data.main.temp_min} temp_max:${data.main.temp_max} pressure:${data.main.preesure} humidity:${ data.main.humidity}
        // data country${data.sys.country}
        // data ${data.name}`

        const weatherHTML = `
            <div class="col text-center">
                <h3>cuaca hari ini di kota ${data.name} adaalah ${data.weather[0].main}</h3>
                <p>gambaran cuaca hari ini ${data.weather[0].description} dengan temperatur minimal ${data.main.temp_min} temperatur maksimal ${data.main.temp_max}<p>
               
            </div>
        `
        // const stringHTML = `
        // //         <div class="col-sm-6 col-md-4">
        // //             <img width="100%" height="100px" src="${serverWanderlink}${item.images && item.images[0]}" />
        // //             ${item.destinationName}
        // //             <br>
        // //             ${item.address}
        // //             <br>
        // //             ${item.city}
        // //         </div>
        // //         `
        document.getElementById('weather').innerHTML = weatherHTML
    })