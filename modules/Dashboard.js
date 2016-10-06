import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

var data = [
  {
    id:1,
    day:"Monday",
    relationType:"family",
    relation:"Mom",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:2,
    city:"Glens Falls",
    email:"lauriegarofalo@gmail.com"
  },
  {
    id:2,
    day:"Tuesday",
    relationType:"family",
    relation:"dad",
    contactFrequency:"1 per month",
    lastContact:"8/29/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls",
    email:"greggarofalo@gmail.com"

  },
  {
    id:3,
    day:"Wednesday",
    relationType:"family",
    relation:"Grandfather",
    contactFrequency:"2 per month",
    lastContact:"8/14/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls",
    email:"haroldgarofalo@gmail.com"

  },
  {
    id:2,
    day:"Thursday",
    relationType:"family",
    relation:"Sister",
    contactFrequency:"1 per day",
    lastContact:"9/12/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls",
    email:"alexisgarofalo@gmail.com"

  },
  {
    id:2,
    day:"Friday",
    relationType:"family",
    relation:"Sister",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls",
    email:"chelseagarofalo@gmail.com"

  },
  {
    id:2,
    day:"Saturday",
    relationType:"friend",
    relation:"Best friends",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:3,
    city:"Glens Falls",
    email:"kendralyndon@gmail.com"

  },
  {
    id:3,
    day:"Sunday",
    relationType:"friend",
    relation:"raquetball partners/ enemies",
    contactFrequency:"1 per week",
    lastContact:"9/10/2016",
    list:"to dos",
    user_id:1,
    is_user:true,
    connection_id:4,
    city:"Glens Falls",
    email:"maxsands@gmail.com"

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
      var makeString = connection.id.toString();
      return (
        <div className="connection panel panel-custom" key={i}>
          <div className="panel-heading">
            <h3 className="panel-title"><Link to='/100/connection/501'>{connection.day}</Link></h3>
            <button id="eventButton">Add Event</button>
          </div>
          <div className="panel-body">
            <p>Relation: {connection.relation}</p>
            <p>Contact Frequency: {connection.contactFrequency}</p>
            <p>Last Contact: {connection.lastContact}</p>
            <p><Link className="kendraLink" to="/100/lists/100">Shared List: {connection.list}</Link></p>
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
