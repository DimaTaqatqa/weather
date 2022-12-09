import React, { useCallback } from 'react';
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
    //const city = "london"

    const resp = await FetchData(`http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=3e2dc9040fdc82aca1842da191a61659`, 'GET');

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
  });

  // function onFindWeather(cityName) {
  //   // console.log("after " + cityName);
  //   setCityName(cityName);
  //   //console.log("after " + cityName);

  // }
  const sendData = useCallback((data) => {
    //console.log(data)
    setCityName(data)
    console.log(CITY_NAME)

  }, [CITY_NAME])

  useEffect(() => {
    sendData()
  }, [sendData]);

  return (
    <div className="app">
      <SearchBar sendData={sendData} />
      <main className="app__main">
        <WeatherNow data={currentInfo} />
        <WeatherInHours data={futureInfo} />
      </main>

    </div>
  );
}


export default App;
