import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='ShowConnection col-lg-10 col-md-10 col-xs-12'>
        <div className="connection panel panel-custom">
          <div className="panel-heading">
            <h3 className="panel-title">
              Ryan Garlalo
            </h3>
          </div>
          <div className="panel-body">
            <div className="showPageleft">
              <img className="showPageImage" src ="../../images/mom.jpg"/>
              <h3>Overall Flake Rate: 0%</h3>
              <h3>Personal Flake Rate: 0%</h3>
              <p>Flakes with Friends: 0%</p>
              <p>MTB Flakes: 0%</p>
              <p>Tennis Flakes: 0%</p>
              <p>Ski Flakes: 0%</p>
              <p>HW Flakes: 0%</p>
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
                    <tr>
                      <td>lunch</td>
                      <td>9/3/2016</td>
                      <td>Went to lucilles for bisquits</td>
                    </tr>
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
