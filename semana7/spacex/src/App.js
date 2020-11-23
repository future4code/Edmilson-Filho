import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Missions from './components/Missions/Missions';

class App extends Component {
  state = {
    missions: [],
    capsuleDetails: null,
    upcoming: null,
    past: null,
    cores: null
  }

  componentDidMount = () => {
    this.getMissions();
  }

  getMissions = async() => {
    try {
      const res = await axios.get("https://api.spacexdata.com/v3/missions");
      
      this.setState({ missions: res.data});
    } catch(err) {
      alert(`Erro ${err}`);
    }
  }

  getOneCapsule = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/missions/${serial}`)
      
      this.setState({ capsuleDetails: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }

  getUpcomingMissions = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/missions/upcoming`)
      
      this.setState({ upcoming: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }

  getPastMissions = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/missions/past`)
      
      this.setState({ upcoming: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }

  getCores = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/cores`)
      
      this.setState({ upcoming: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }

  getOneCore = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/cores/{{core_serial}}`)
      
      this.setState({ upcoming: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }

  getUpcomingCores = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/cores/upcoming`)
      
      this.setState({ upcoming: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <div>
            <img />
          </div>
          
          <nav>
            <ul>
              <li>Home</li>
              <li>Missions</li>
              <li>Capsules</li>
              <li>Launchs</li>
            </ul>
          </nav>
        </header>
        
        <Missions missions={this.state.missions} />

        <footer>
          <div>
            <img />
          </div>

          <p>SpaceX 2020&comercial;. All rights reserved</p>

        <ul>
          <li>Terms and conditions</li>
          <li>Policy privacy</li>
        </ul>
        </footer>
      </div>
    );
  } 
}

export default App;
