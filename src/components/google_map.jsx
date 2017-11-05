import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  // this.refs.map
  render(){
    return <td><div ref='map'/></td>;
  }
}

export default GoogleMap;
