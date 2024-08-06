import Search from "./components/search/search"
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forcast from "./components/forcast/Forcast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./components/api";
import { useState } from "react";

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = async (searchData) => {
    const [lat , lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch =  fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async(res)=> {
      const weatherRes = await res[0].json();
      const forecastRes = await res[1].json();

      setCurrentWeather({city: searchData.label , ...weatherRes});
      setForecast({city: searchData.label , ...forecastRes})
    })
    .catch((err)=>{
      console.log("Error occured")
    })
  }
  console.log(forecast)
  return (
    <>
    <div className="container max-w-[1366px] my-[20px] mx-auto">
     <Search onSearchChange={handleOnSearchChange}/>
     {currentWeather && <CurrentWeather data={currentWeather}/>}
     {forecast && <Forcast data={forecast}/>}
      </div>
    </>
  )
}

export default App
