import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';



var data = [
  {
    name:"Biking",
    amount:22,
    flakes:0,
  },
  {
    name:"Tennis",
    amount:22,
    flakes:0,
  },
  {
    name:"Skiing",
    amount:22,
    flakes:0,

  },
  {
    name:"Gym",
    amount:22,
    flakes:0,
  },
  {
    name:"HW",
    amount:22,
    flakes:0,
  },
  {
    name:"Dog Park",
    amount:22,
    flakes:0,
  },
  {
    name:"Hiking",
    amount:22,
    flakes:0,
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
            <h4>Amount: {Activities.amount}</h4>
            <h4>Flakes: {Activities.flakes}</h4>
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
