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
      <div>
        <h1>Flake Rate: {fr} %</h1>
        <h2>Events: {events}</h2>
        <h2>Flakes: {flakes}</h2>
      </div>
      )
    }
});
