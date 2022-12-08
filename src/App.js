import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './Components/SearchBar/SearchBar';
import WeatherNow from './Page/WeatherNow';
import WeatherInHours from './Page/WeatherInHours';
import FakeWeatherData from "./data/FakeWeather.json";
import { useState, useEffect, useRef } from 'react';
import { FetchData } from './Uitls/ApiUtil';

function App() {
  const [CITY_NAME, setCityName] = useState("initial")
  const [currentInfo, setCurrentInfo] = useState("intial")
  const [futureInfo, setFutureInfo]=useState("")
  // const currentInfo="";
  // const futureInfo="";
  // const [temp_max, setTemp_max]=useState("")
  // const [humidity, setHumidity]=useState("")
  // const [pressure, setPressure]=useState("")
  // const [hour, setHour]=useState("")
  // const [description, setDescription]=useState("")

  // console.log("before " + CITY_NAME)

  FakeWeatherData.list.forEach((item, idx) => {
    const temp = item.main.temp;
    const temp_max = item.main.temp_max;
    const temp_min = item.main.temp_min;
    const humidity = item.main.humidity;
    const pressure = item.main.pressure;
    const hour = item.dt_txt.slice(11, 16);
    // console.log(temp)
    // console.log(temp_max)
    // console.log(temp_min)
    // console.log(humidity)
    // console.log(pressure)
    // console.log(hour)
    item.weather.forEach((item, idx) => {
      const description = item.main;
      // console.log(description)

    })
  })

  async function fData() {

    const resp = await FetchData('http://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=3e2dc9040fdc82aca1842da191a61659', 'GET');

    if (resp.status === 200) {
      const data = resp.data.list;
      // const currentInfo=data[0];
      setCurrentInfo(data[0]) // for the nexy 24 hours
      setFutureInfo(data.slice(0,7)) 
      // console.log(currentInfo)
      console.log(typeof(futureInfo))

      console.log(futureInfo)
      // console.log(info)
      // console.log(info.main.temp)
      // console.log(info.main.temp_max)
      // console.log(info.main.temp_min)
      // console.log(info.main.humidity)
      // console.log(info.main.pressure)
      //  console.log(info.dt_txt.slice(11, 16))
      // console.log(info.weather)
      // const weatherarr= info.weather
      // const weatherInfo=weatherarr[0]
      // console.log(weatherInfo.main)
      // console.log(weatherInfo.description)

    }
    else {
      console.warn("this api is failed");
      //@TODO : we will handle it later

    }

  }

  useEffect(() => {
    fData()
  }, [CITY_NAME]);

  function onFindWeather(cityName) {
    // console.log("after " + cityName);
    setCityName(cityName);
    // console.log("after " + cityName);

  }

  return (
    <div className="app">
      <SearchBar onChange={() => { onFindWeather() }} />
      <main className="app__main">
        <WeatherNow data={currentInfo} />
        <WeatherInHours data={futureInfo} />
      </main>

    </div>
  );
}


export default App;
