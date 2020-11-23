import React, { Component } from 'react';
import axios from 'axios';
import Mission from '../Mission/Mission';

class Missions extends Component {
    state = {
        mission: null,
        showMission: false
    }
    
  onClickMission = async(id) => {
    try {
      const res = await axios.get(`https://api.spacexdata.com/v3/missions/${id}`)
      
      this.setState({ mission: res.data})
    } catch(err) {
      alert(err)
    }
  }

  render() {
    const missions = this.props.missions.map((mission, key) => 
      <Mission mission={mission} />
    );

    const missionDetails = <Mission missionDetails={this.state.mission} />;

      return (
        <div>
            <h2>Missions</h2>

                {
                  !this.props.showMission ?
                      <ul>
                        {missions}
                      </ul>
                      // <li>
                      //   <p>{ mission.mission_name }</p>
                      // </li>
                  : this.state.missionDetails ?
                  {missionDetails} :
                  null
                }
        </div>
        )
    }
}

  export default Missions;