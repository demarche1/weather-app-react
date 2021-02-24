 import axios from 'axios'

 export const cityWeather = async(city) => {
    try{
        const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather',
        {
           params: {
                q: city,
                appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                lang: 'pt',
                units: 'metric'
           } 
        })
        return data
    }
    catch(e){
        throw(e.message)
    }
 }