import React from 'react'
import { Link } from 'react-router'
import FR from '../../modules/components/flakerate'
import Events from '../../modules/components/EventComp.js'
import Flakes from '../../modules/components/FlakeComp.js'

export default React.createClass({
  render() {
    return (
      <div className='ShowConnection col-lg-10 col-md-10 col-xs-12'>
        <div className="connection panel panel-custom">
          <div className="panel-heading">
            <h3 className="panel-title">
              Ryan Garofalo
            </h3>
          </div>
          <div className="panel-body">
            <div className="showPageleft">
              <img className="showPageImage" src ="../../images/pic.jpg"/>
              <h2>Overall Flake Rate: <FR></FR>%</h2>
              <h2>Events: <Events className="lilSpace"></Events> </h2>
              <h2>Flakes: <Flakes className="lilSpace"></Flakes></h2>
              <ul>
              <li>Personal Flake Rate: 0%</li>
              <li>Flakes with Friends: 0%</li>
              <li>MTB Flakes: 0%</li>
              <li>Tennis Flakes: 0%</li>
              <li>Ski Flakes: 0%</li>
              <li>HW Flakes: 0%</li>
              </ul>
            </div>
            <div className="connectionHistory">
              <div className="innerHistory">
                <table>
                  <thead>
                    <tr>
                      <th>Flake Type</th>
                      <th>Date</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>I</td>
                      <td>Don't</td>
                      <td>Flake</td>
                    </tr>
                    {/* <tr>
                      <td>lunch</td>
                      <td>9/3/2016</td>
                      <td>Went to lucilles for bisquits</td>
                    </tr> */}
                  </tbody>
                </table>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
