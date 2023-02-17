const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c52066fe77msh0c86355259bd4e7p16df92jsn50b8708b4d35',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=> {
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		//  console.log(response)


		if (response.error){   
		alert("Unable to find or not a city name")}

		else{
   
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		// sunriseTime.innerHTML = response.sunrise
		// sunsetTime.innerHTML = response.sunset

		cityName.innerHTML = city

		}
	})
	.catch(err => console.error(err));
}

submit.addEventListener('click', (e)=>{
	e.preventDefault()

	if(city.value != ""){
	getWeather(city.value)
		}
})