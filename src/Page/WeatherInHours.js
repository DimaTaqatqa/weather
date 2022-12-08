import React from "react";
function WeatherInHours({ data }) {
    return (
        <div className="container ">
            <div className="row seven-cols d-flex align-items-center justify-content-center mt-5">
                {data.map((item, idx) => {
                    return (
                        <div className="col-md-1 text-center">
                            <div>{item.dt_txt.slice(11, 16)}</div>
                            <img src="/img/weather-icons/cloudy.svg" alt='cloudy-icon' />
                            <div>{item.main.temp} c</div>
                        </div>
                    )
                })}

                {/* <div className="col-md-1 text-center">
                    <div>6:00</div>
                    <img src="/img/weather-icons/cloudy.svg" alt='cloudy-icon' />
                    <div>10 c</div>
                </div>
                <div className="col-md-1 text-center">
                    <div>9:00</div>
                    <img src="/img/weather-icons/cloudy.svg" alt='cloudy-icon' />
                    <div>10 c</div>
                </div>
                <div className="col-md-1 text-center">
                    <div>12:00</div>
                    <img src="/img/weather-icons/cloudy.svg" alt='cloudy-icon' />
                    <div>10 c</div>
                </div>
                <div className="col-md-1 text-center">
                    <div>15:00</div>
                    <img src="/img/weather-icons/cloudy.svg" alt='cloudy-icon' />
                    <div>10 c</div>
                </div>
                <div className="col-md-1 text-center">
                    <div>18:00</div>
                    <img src="/img/weather-icons/cloudy.svg" alt='cloudy-icon' />
                    <div>10 c</div>
                </div>
                <div className="col-md-1 text-center">
                    <div>21:00</div>
                    <img src="/img/weather-icons/cloudy.svg" alt='cloudy-icon' />
                    <div>10 c</div>
                </div> */}
            </div>
        </div>

    )
}
export default WeatherInHours;