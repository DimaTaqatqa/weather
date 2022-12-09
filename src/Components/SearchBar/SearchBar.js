import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: ""
        }
    }

    async onCityNameChanged(e) {
        await this.setState({
            cityName: e.target.value
        })
        //console.log(this.state.cityName)
        
    }

    async onFindWeatherClicked(e) {
        await e.preventDefault();
        //console.log(this.state.cityName)

        // if ('onChange' in this.props) { // if I changed the select after witting the input
            this.props.sendData(this.state.cityName)
        //}
        this.setState({
            cityName: ""
        })

    }

    render() {
        return (
            <div className="search-bar">
                {/* <form onSubmit={this.onFindWeatherClicked.bind(this)}> */}
                <div className="seacrh-bar-components ms-3">
                    <input className="text-field mt-3" type="text" value={this.state.cityName}
                        onChange={this.onCityNameChanged.bind(this)} />
                    <button onClick={this.onFindWeatherClicked.bind(this)} type="submit" className="button ms-2"> FIND WEATHER</button>
                </div>


            </div>
        )
    }
}
export default SearchBar;