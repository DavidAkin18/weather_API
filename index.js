let location1 = document.querySelector('#locate1');
let location2 = document.querySelector('#locate2');
let location3 = document.querySelector('#locate3');

//temperature
let maxtemp = document.querySelector('#degree1')
let mintemp = document.querySelector('#degree2')
let humidity = document.querySelector('#degree3')
let wind = document.querySelector('#degree4')
document.addEventListener('DOMContentLoaded', init)


function init(){
  document.querySelector('#searchbtn').addEventListener('click', event=>{
    event.preventDefault();
    let url = ('https://api.weatherapi.com/v1/forecast.json?key=8f55c0492fc14dac8e0180259242701&q=')
    let str = document.querySelector('#search').value.trim()
    url = url.concat(str);

    

    fetch(url, {mode:'cors'})
    .then(response =>response.json())
    .then(content => {
      // console.log(content.forecast.forecastday[0]['astro'])
      // console.log(content.forecast.forecastday[0].day.mintemp_c)
      // console.log(content.location)
      console.log(content)
      // console.log(content['location'].lat)
      //location
      location1.textContent= content['location'].name
      // location2.textContent= content['location'].region
      location3.textContent= content['location'].country
      locate = document.createElement('i')
      locate.classList.add('fa-solid')
      locate.classList.add('fa-location-dot')
      location1.prepend(locate)
     

      //degree celsus
      maxtemp.textContent = `${content.current.temp_c}ºC `
      
      let humiditySymbol =document.createElement('i')
      humidity.textContent = `Humidity: ${content.current.humidity}%`
      humiditySymbol.classList.add('fa-solid')
      humiditySymbol.classList.add('fa-water')
      humiditySymbol.classList.add('fa-xl')
      humidity.prepend(humiditySymbol)


      let windSymbol = document.createElement('i')
      wind.textContent =`${content.current.wind_kph}k/h wind`
      windSymbol.classList.add('fa-solid')
      windSymbol.classList.add('fa-wind')
      windSymbol.classList.add('fa-xl')
      wind.prepend(windSymbol)
  

    })
    .catch(err=>{
      // console.error(err)
    })
  
})
}