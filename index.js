const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'


fetch (`${URL}`)
.then (response =>{
    return response.json();
    
})
.then (data => {
    console.log(data)
})
