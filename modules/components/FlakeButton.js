import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../services/httpservice');
import Input from '../components/input'


export default React.createClass({
  getInitialState: function(){
    return {fr:[]};
  },
  FireEvent: function(){
    var eventId = this.props.id;
    HTTP.get('/flake/'+eventId)
    .then(function(data){
    this.setState({fr:data[0]});
    window.location.reload()
    }.bind(this));
  },
  render: function(){
    console.log(name);
      return (
      <div>
        <button onClick={this.FireEvent}>Flake</button>
      </div>
      )
    }
});
