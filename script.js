fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=9830cef1c2fddda1d4e714783b05fc76')
.then(function (resp) {return resp.json()})
.then(function (data){
    console.log(data)
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '°C'
    document.querySelector('.weather').textContent = data.weather[0]['main'];
})
.catch(function (){

})

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {

}