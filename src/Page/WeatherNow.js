import React from "react";
import { imgPicker } from "../Uitls/imgPicker";
//import { useState } from "react";
function WeatherNow({ data }) {

    const _data = data
    const temp_min = _data?.main?.temp_min;
    const temp_max = _data?.main?.temp_max;
    const humidity = _data?.main?.humidity;
    const pressure = _data?.main?.pressure;
    const weatherInfo = _data.weather
    const weather = (weatherInfo ?? [])[0];
    const id = (weather ?? {}).id;
    const description = (weather ?? {}).description;

    const img = imgPicker(id)

    return (
        <div className="body">
            <img src={`/img/weather-icons/${img}`} alt='storm-icon' />
            <h5 className="text-center mt-3 text-white">{description}</h5>
            <h4 className="text-center mt-3">Tempreture   {temp_min}   °C to {temp_max}   °C</h4>
            <div className="row mt-3 align-items-start">
                <div className="col-xs-6 col-sm-6 col-md-6 text-center fw-bold">Humidity {humidity}%</div>
                <div className="col-xs-6 col-sm-6 col-md-6 text-center fw-bold">Pressure {pressure}</div>
            </div>
        </div>
    )
}
export default WeatherNow;