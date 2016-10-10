import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../../services/httpservice');
// var ListItem = require('../../components/ListItem.jsx');



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
        <div className="connection panel panel-custom" key={i}>
          <div className="panel-heading" >
            <h3 className="panel-title">{item.name}</h3>
          </div>
          <div className="panel-body">
            <ul>
              <li>{item.date}</li>
              <li>{item.type}</li>
              <li>{item.organizer_id}</li>
            </ul>
          </div>
        </div>
      );
      });
      return (
      <div className="dashboard col-lg-10 col-md-10 col-xs-12">
        {listItems}
      </div>
      )
    }
});
