import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../../services/httpservice');
// var ListItem = require('../../components/ListItem.jsx');



export default React.createClass({
  getInitialState: function(){
    return {ingredients:[]};
  },
  componentWillMount: function(){
    HTTP.get('/animals')
    .then(function(data){
      // console.log(data);
        this.setState({ingredients:data});
    }.bind(this));
  },
  render: function(){
    console.log(this.state.ingredients[0]);

  var listItems = this.state.ingredients.map(function(item){
    console.log("hi");
    console.log(item.id);
    return <li>{item.id} + {item.name}</li>;
  });
  return (<ul>{listItems}</ul>);
  }
});
