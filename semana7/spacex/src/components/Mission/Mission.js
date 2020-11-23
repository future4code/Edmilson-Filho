import React, { Component } from 'react';
import axios from 'axios';

class Mission extends Component {
  render() {
      return (
          <li>
              {/* {console.log(this.props.mission.mission_name)} */}
              { this.props.showDetails ? this.props.missionDetails :
                <div onClick={this.props.onClickMission}>
                    {console.log(this.props.mission)}
                    <h2>{ this.props.missionDetails.mission_name }</h2>
                    <p>Mission ID: { this.props.missionDetails.mission_id }</p>
                    <p>Manufacturers: { this.props.missionDetails.manufacturers }</p>
                    <p>Payload ID: { this.props.missionDetails.payload_ids }</p>
                    <p>Wikipedia: { this.props.missionDetails.wikipedia }</p>
                    <p>Website: { this.props.missionDetails.website }</p>
                    <p>Twitter: { this.props.missionDetails.twitter }</p>
                    <p>Description: { this.props.missionDetails.description }</p>
                </div> ?
                <div>
                    {console.log(this.props.missionDetails)}
                    <h2>{ this.props.mission.mission_name }</h2>
                    <p>Mission ID: { this.props.mission.mission_id }</p>
                    <p>Manufacturers: { this.props.mission.manufacturers }</p>
                    <p>Payload ID: { this.props.mission.payload_ids }</p>
                    <p>Wikipedia: { this.props.mission.wikipedia }</p>
                    <p>Website: { this.props.mission.website }</p>
                </div>
                : null
                }
        </li>
        )
    }
}

  export default Mission;