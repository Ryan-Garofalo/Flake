import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../services/httpservice');
import Input from '../components/input'


export default React.createClass({
  getInitialState: function(){
    return {fr:[]};
  },
  componentWillMount: function(){
    HTTP.get('/fr')
    .then(function(data){
      console.log(data);
        this.setState({fr:data[0]});
    }.bind(this));
  },
  render: function(){
    var events = this.state.fr.events;
    var flakes = this.state.fr.fr;
    var fr = Math.round(flakes/events * 100);
    console.log(name);
      return (

        <span>{fr}</span>
      
      )
    }
});
