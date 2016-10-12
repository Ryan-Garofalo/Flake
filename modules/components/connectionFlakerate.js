import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../services/httpservice');
import Input from '../components/input'


export default React.createClass({
  getInitialState: function(){
    return {fr:[]};
  },
  componentWillMount: function(){
    var id = this.props.id;
    console.log(id);
    HTTP.get('/connectfr/'+id)
    .then(function(data){
      console.log(data);
        this.setState({fr:data[0]});
    }.bind(this));
  },
  render: function(){
    var events = this.state.fr.events;
    var flakes = this.state.fr.fr;
    var fr = Math.round(flakes/events * 100)

      return (
      <div className="eventStuff">
        <ul>
          <li><h2>Flake Rate: {fr} %</h2></li>
          <li><h3>Events: {events}</h3></li>
          <li><h3>Flakes: {flakes}</h3></li>
        </ul>
      </div>
      )
    }
});
