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
    HTTP.get('/yes/'+eventId)
    .then(function(data){
    this.setState({fr:data[0]});
    this.props.reRender();
    }.bind(this));
  },
  render: function(){
      return (
      <div>
        <button onClick={this.FireEvent}>Yes</button>
      </div>
      )
    }
});
