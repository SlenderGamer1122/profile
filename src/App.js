import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Adam',
      bio: 'WEB DEVELOPER',
      imgSrc: 'https://yt3.googleusercontent.com/jdxaiUL9R7okC1RlM0XJaMiG5A67ED-UftUbZES8yR53qfjAVT15PucIE675Hc2Zr2N8yVc1Gg=s900-c-k-c0x00ffffff-no-rj',
      
    },
    shows: false,
    interval: 0,
  };

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        interval: prevState.interval + 1,
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc} = this.state.person;
    const { shows, interval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {shows && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            
          </div>
        )}
        <p>Time interval since mount: {interval} seconds</p>
      </div>
    );
  }
}

export default App;
