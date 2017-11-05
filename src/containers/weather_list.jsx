import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './../components/chart';
import GoogleMap from './../components/google_map';

class WeatherList extends Component {
  constructor(props){
    super(props);
  }

  renderWeather(cityData){
    const name = cityData.city.name;
    const temp = cityData.list.map((weather) => weather.main.temp - 273);
    const humidity = cityData.list.map((weather) => weather.main.humidity);
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const {lat, lon} = cityData.city.coord;

    return(
    <tr key={name}>
      <GoogleMap lat={lat} lon={lon}/>
      <Chart color='red' data={temp} units='&deg;C'/>
      <Chart color='blue' data={pressure} units='hPA'/>
      <Chart color='green' data={humidity} units='%'/>
    </tr>
  );
  }
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
    </table>
  );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps, null)(WeatherList);
