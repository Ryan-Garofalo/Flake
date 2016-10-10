import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../../services/httpservice');
// var ListItem = require('../../components/ListItem.jsx');



export default React.createClass({
  getInitialState: function(){
    return {ingredients:[]};
  },
  componentWillMount: function(){
    HTTP.get('/squad')
    .then(function(data){
      // console.log(data);
        this.setState({ingredients:data});
    }.bind(this));
  },
  render: function(){
    var listItems = this.state.ingredients.map(function(item, i){
      console.log(item);
      return (
        <div className="connection panel panel-custom" >
          <div className="panel-heading" >
            <h3 className="panel-title"><Link to='/100/connection/501' key={i}>{item.friend2_id}</Link></h3>
            {/* <button id="eventButton">Add Event</button> */}
          </div>
          {/* <div className="panel-body">
            <ul>
              <li>{item.date}</li>
              <li>{item.type}</li>
              <li>{item.organizer_id}</li>
            </ul>
          </div> */}
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
