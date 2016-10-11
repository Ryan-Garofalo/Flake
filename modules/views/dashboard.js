import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../services/httpservice');
import Input from '../components/input'
import EventButt from '../components/eventButtons';
import Yes from '../components/YesButton';
import No from '../components/NoButton';
import Flake from '../components/FlakeButton';


export default React.createClass({
  getInitialState: function(){
    return {ingredients:[]};
  },
  componentWillMount: function(){
    HTTP.get('/events')
    .then(function(data){
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
            <div className="buttonCont">
              <Yes id={item.id}></Yes>
              <No id={item.id}></No>
              <Flake id={item.id}></Flake>
            </div>
          </div>
          <div className="panel-body eventStuff">
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
