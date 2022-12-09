import React from "react";
import { imgPicker } from "../Uitls/imgPicker";

function WeatherInHours({ data }) {


    return (
        <div className="container ">
            <div className="row seven-cols d-flex align-items-center justify-content-center mt-5">
                {data.map((item, idx) => {
                    const weatherInfo = item.weather
                    const weather = (weatherInfo ?? [])[0];
                    const id = (weather ?? {}).id;
                    const img = imgPicker(id)
                    //console.log(img)
                    return (
                        <div key={idx} className="col-md-1 text-center">
                            <div>{item.dt_txt.slice(11, 16)}</div>
                            <img src={`/img/weather-icons/${img}`} alt='cloudy-icon' />
                            <div>{item.main.temp} °C</div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
export default WeatherInHours;