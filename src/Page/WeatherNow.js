import React from "react";
function WeatherNow({ data }) {

    const _data = data
    const temp_min = _data?.main?.temp_min;
    const temp_max = _data?.main?.temp_max;
    const humidity = _data?.main?.humidity;
    const pressure = _data?.main?.pressure;
    //  const _weatherInfo = _data.weather[0].description || ''
    // const _weatherInfo =weatherInfo;

    // const id = _weatherInfo?.main ;
    //  const description = _weatherInfo?.description;


    // console.log(data)

    // console.log(_data.weather[0].description)
    // console.log(temp_max)

    // console.log(humidity)
    // console.log(pressure)
    // console.log(id)
    // console.log(description)





    return (
        <div className="body">
            <img src="/img/weather-icons/storm.svg" alt='storm-icon' />
            <h5 className="text-center mt-3 text-white">description</h5>
            <h4 className="text-center mt-3">Tempreture   {temp_min}   c to {temp_max}   c</h4>
            <div className="row mt-3 align-items-start">
                <div className="col-xs-6 col-sm-6 col-md-6 text-center fw-bold">Humidity {humidity}</div>
                <div className="col-xs-6 col-sm-6 col-md-6 text-center fw-bold">Pressure {pressure}</div>
            </div>
        </div>
    )
}
export default WeatherNow;