# weather-app


* live site on :https://weather-project-sigma.vercel.app/
* using api from :https://openweathermap.org/api 
* the api allows you to search just by city name to get weather for this city but you can't choosed in which country, so doing this gave me a problem which was
* finding weather forcast for example: for Valencia city in California USA as it tends to be there are more than 50 cities around the world named Valencia
* so to solve this and to be more specific
* the api allows you to search for weather using longitude and latitude if you want to specify the city you want

* now using the weather api first time to search this way 
 ```javascript
https://api.openweathermap.org/geo/1.0/direct?q=${search},${searchState},${searchCountry}&limit=10&appid=${API_KEY}
```
* gave me longitude and latitude I need for a spesific city
* then using the same api another time 
```javascript
https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}
```
* in this time I get the weather results I need for the exact city I am searching for.
