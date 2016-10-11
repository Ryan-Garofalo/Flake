import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';



var data = [
  {
    name:"Biking"
  },
  {
    name:"Tennis"
  },
  {
    name:"Skiing"
  },
  {
    name:"Gym"
  },
  {
    name:"HW"
  },
  {
    name:"Dog Park"
  },
  {
    name:"Hiking"
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
    var arr = this.props.data.map(function(Activities, i){
      return (
        <div className="connection panel panel-custom" key={i}>
          <div className="panel-heading">
            <h3 className="panel-title">{Activities.name}</h3>
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
