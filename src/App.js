import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './Components/SearchBar/SearchBar';
import WeatherNow from './Page/WeatherNow';
import WeatherInHours from './Page/WeatherInHours';
import { useState, useEffect } from 'react';
import { FetchData } from './Uitls/ApiUtil';

function App() {
  const [CITY_NAME, setCityName] = useState("")
  const [currentInfo, setCurrentInfo] = useState({})
  const [futureInfo, setFutureInfo] = useState([])


  async function fData() {

    const resp = await FetchData('http://api.openweathermap.org/data/2.5/forecast?q=moscow&cnt=8&units=metric&appid=3e2dc9040fdc82aca1842da191a61659', 'GET');

    if (resp.status === 200) {
      const data = resp.data.list;
      setCurrentInfo(data[0]) // for the nexy 24 hours
      setFutureInfo(data.slice(0, 7))

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
