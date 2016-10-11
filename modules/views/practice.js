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
    var name = this.state.fr.fr
      return (
      <div className="dashboard col-lg-10 col-md-10 col-xs-12">
        <h1>{name}</h1>
      </div>
      )
    }
});
