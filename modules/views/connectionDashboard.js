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
    var id = this.props.params.id;
    HTTP.get('/connection/sched/'+id)
    .then(function(data){
        this.setState({ingredients:data});
    }.bind(this));
  },
  render: function(){
    var listItems = this.state.ingredients.map(function(item, i){
      return (
        <div className="connection panel panel-custom" key={item.id}>
          <div className="panel-heading" >
            <h3 className="panel-title">{item.name}</h3>
            <button className="joinButt">Join</button>
          </div>
          <div className="panel-body eventStuff">
            <ul>
              <li>Date: {item.date}</li>
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
        <div className="dashboard col-lg-10 col-md-10 col-xs-12">
        <h1 id="connectionName">Viewing: {this.props.params.id}'s Schedule</h1>
          {listItems}
        </div>
        </div>
      )
    }
});
