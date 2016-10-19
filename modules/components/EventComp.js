import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../services/httpservice');



export default React.createClass({
  getInitialState: function(){
    return {fr:[]};
  },
  componentWillMount: function(){
    HTTP.get('/fr')
    .then(function(data){
        this.setState({fr:data[0]});
    }.bind(this));
  },
  render: function(){
    var events = this.state.fr.events;
      return (
        <span>{events}</span>
      )
    }
});
