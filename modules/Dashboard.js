import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

var data = [
  {
    day:"Monday"
  },
  {
    day:"Tuesday"
  },
  {
    day:"Wednesday"
  },
  {
    day:"Thursday"
  },
  {
    day:"Friday"
  },
  {
    day:"Saturday"
  },
  {
    day:"Sunday"
  },
]

export default React.createClass({
  render() {
    return (
      <div className="dashboard col-lg-10 col-md-10 col-xs-12">
        <Dashboard/>
      </div>
    )
  }
})

var Dashboard = React.createClass({
  render() {
    return (
      <div>
        <Connections data={data}/>
      </div>
    )
  }
})

var Connections = React.createClass({
  render(){
    var arr = this.props.data.map(function(connection, i){
      return (
        <div className="connection panel panel-custom" key={i}>
          <div className="panel-heading">
            <h3 className="panel-title"><Link to='/100/connection/501'>{connection.day}</Link></h3>
            <button id="eventButton">Add Event</button>
          </div>
          <div className="panel-body">

          </div>
        </div>
      );
    });
    return (
      <div className="connections">
        {arr}
      </div>
    )
  }
})
