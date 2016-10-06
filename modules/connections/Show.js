import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='ShowConnection col-lg-10 col-md-10 col-xs-12'>
        <div className="connection panel panel-custom">
          <div className="panel-heading">
            <h3 className="panel-title">
              Laurie Garofalo
            </h3>
          </div>
          <div className="panel-body">
            <div className="showPageleft">
              <img className="showPageImage" src ="../../images/mom.jpg"/>
              <h3>Relationship type: Family</h3>
              <h3>Relation: Mom</h3>
              <p>Email: lauriegarofalo@gmail.com</p>
              <p>Phone: 5183076826</p>
              <h4>Lists relating to Laurie</h4>
              <ol>Private Lists
                <li className="ryansSmallLinks"><Link to="/1/lists/202">Birthday gift ideas for mom</Link></li>
                <li className="ryansSmallLinks"><Link to="/1/lists/202">Weird crap my mother says</Link></li>
              </ol>
            </div>
            <div className="connectionHistory">
              <div className="innerHistory">
                <table>
                  <thead>
                    <tr>
                      <th>Contact type</th>
                      <th>Contact Date</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>phone</td>
                      <td>10/9/1999</td>
                      <td>We spoke about christmas plans</td>
                    </tr>
                    <tr>
                      <td>lunch</td>
                      <td>9/3/2016</td>
                      <td>Went to lucilles for bisquits</td>
                    </tr>
                    <tr>
                      <td>faceTime</td>
                      <td>9/10/2016</td>
                      <td>Facetimed with mom and nephew</td>
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
