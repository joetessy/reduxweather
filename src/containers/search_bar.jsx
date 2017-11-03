import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from './../actions';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }
  handleInputSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
  }
  onInputChange(event){
    event.preventDefault();
    this.setState({term: event.target.value});
  }
  render(){
    return (
      <form onSubmit={this.handleInputSubmit.bind(this)}
        className='search-form'>
        <input value={this.state.term}
          onChange={this.onInputChange.bind(this)}
          placeholder='Get a 5 day forecast'/>
        <button type='submit' value={this.state.term}
          className='submit'>Submit</button>
      </form>
    );
  }
}

// const mapStateToProps = (state) => {
//   return ({
//     state
//   });
// };

export default connect(null, {fetchWeather})(SearchBar);
