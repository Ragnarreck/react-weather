import React, { Component } from "react";
import { NotificationContainer, NotificationManager } from "react-notifications";
import Form from "../components/Form";
import City from "../components/City";
import styles from "../static/styles/App.css";

class App extends Component {
  state = { cities: [], uploading: true };

  renderCities = () => this.state.cities.map(info => <City info={info} key={info.name} />);

  createURL = city => {
    const preURL = "http://api.openweathermap.org/data/2.5/weather?q=";
    const postURL = "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    return preURL + city + postURL;
  };

  addCity = city => fetch(this.createURL(city))
    .then(resp => resp.ok ? resp.json() : Promise.reject("Your city isn't correct"))
    .then(info => (this.state.cities.filter(item => item.name === info.name).length)
      ? Promise.reject("You have the same city")
      : info)
    .then(info => this.setState(state => ({ cities: [ ...state.cities, info ], uploading: false })))
    .catch(err => {
        NotificationManager.error(err, "Error!", 3000);
        this.setState({ uploading: false });
      }
    );

  render() {
    return (
      <div className="App">
        <Form addCity={this.addCity} />
        <NotificationContainer className="notification" />
        <div className="cityList">
          {this.renderCities()}
        </div>
      </div>
    );
  }
}

export default App;
