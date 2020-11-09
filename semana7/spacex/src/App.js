import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    capsules: [],
    capsuleDetails: null,
    upcoming: null,
    past: null,
    cores: null
  }

  componentDidMount = () => {
    this.getCapsules();
  }

  getCapsules = async () => {
    try {
      const res = await axios.get("https://api.spacexdata.com/v3/capsules/")
      
      this.setState({ capsules: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }

  getOneCapsule = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/capsules/${serial}`)
      
      this.setState({ capsuleDetails: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }

  getUpcomingCapsules = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/capsules/upcoming`)
      
      this.setState({ upcoming: res.data})
    } catch(err) {
      alert(`Erro ${err}`)
    }
  }

  getPastCapsules = async (serial) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/capsules/past`)
      
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
        <h2>Capsulas</h2>
        {console.log(this.state.capsules)}

        <ul>
          {
            this.state.capsules.map((capsule, key) => {
              return (
              <li key={key}>
                <p>capsule_id: {capsule.capsule_id}</p>
                <p>capsule_serial: {capsule.capsule_serial}</p>
                <p>details: {capsule.details}</p>
                <p>landings: {capsule.landings}</p>
                <p>missions: {
                capsule.missions.map((misson, key) => {
                  <p key={key}>{misson}</p>
              })
                }
              </p>
                <p>original_launch: {capsule.original_launch}</p>
                <p>original_launch_unix: {capsule.original_launch_unix}</p>
                <p>reuse_count: {capsule.reuse_count}</p>
                <p>status: {capsule.status}</p>
                <p>type: {capsule.type}</p>
              </li>
              )
            })
          }
        </ul>
      </div>
    );
  } 
}

export default App;
