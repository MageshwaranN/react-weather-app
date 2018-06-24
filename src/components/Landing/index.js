import React from "react";
// import axios from "axios";

const LandingPage = (props) => (
  <div>
    <h1>Landing</h1>
    {props.location.latitude && <p>Latitude : {props.location.latitude}</p>}
    {props.location.latitude && <p>Longitude : {props.location.longitude}</p>}
  </div>
);

class LandingPageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      location: {
        longitude: '',
        latitude: ''
      }
    }
    this.getLocation();
    // axios
    //   .get("https://api.github.com/users/maecapozzi")
    //   .then(response => console.log(response.data));
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  showPosition = position => {
    this.setState({
      location: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    });
  };

  render() {
    return <LandingPage location={this.state.location}/>;
  }
}

export default LandingPageContainer;
