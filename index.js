const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'


fetch (`${URL}`)
.then (response =>{
    return response.json()
    
})
.then (data => {
    console.log(data)
    console.log(`data longtitude ${data.coord.lon} data latitude${data.coord.lat}`)
    console.log(`data weather = id : ${data.weather[0].id} main:${data.weather[0].main} descriptions:${data.weather[0].description} icons:${data.weather[0].icon}`)
    console.log(`data base = ${data.base}`)
console.log(`data main = temperature :${data.main.temp} feels_like:${data.main.feels_like} temp_min:${data.main.temp_min} temp_max:${data.main.temp_max} pressure:${data.main.preesure} humidity:${ data.main.humidity}`)
})
// temp: 304.43
// feels_like: 306.87
// temp_min: 302.04
// temp_max: 306.15
// pressure: 1008
// humidity: 62