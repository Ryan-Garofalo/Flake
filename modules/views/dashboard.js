import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../services/httpservice');
import Input from '../components/input'
import EventButt from '../components/eventButtons';



export default React.createClass({
  getInitialState: function(){
    return {ingredients:[]};
  },
  componentWillMount: function(){
    HTTP.get('/events')
    .then(function(data){
      // console.log(data);
        this.setState({ingredients:data});
    }.bind(this));
  },
  render: function(){
    var listItems = this.state.ingredients.map(function(item, i){
      console.log(item);
      return (
        <div className="connection panel panel-custom" key={item.id}>
          <div className="panel-heading" >
            <h3 className="panel-title">{item.name}</h3>
            <EventButt></EventButt>
          </div>
          <div className="panel-body">
            <ul>
              <li>date: {item.date}</li>
              <li>activity: {item.type}</li>
              <li>Organizer: {item.organizer_id}</li>
              <li>Public: {item.public+""}</li>
            </ul>
          </div>
        </div>
      );
      });
      return (
        <div>
        <Input></Input>
        <div className="dashboard col-lg-10 col-md-10 col-xs-12">
          {listItems}
        </div>
        </div>
      )
    }
});
