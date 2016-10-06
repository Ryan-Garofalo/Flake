import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../services/httpservice');


export default React.createClass({
  getInitialState: function(){
    return {ingredients:[]};
  },
  componentWillMount: function(){
    HTTP.get('/animals')
    .then(function(data){
      console.log(data);
        this.setState({ingredients:data});
    }.bind(this));
  },
  render: function(){
  var listItems = this.state.ingredients.map(function(item){
    return <ListItem key={item.id} ingredient={item.text}/>;
  });
  return (<ul>{listItems}</ul>);
  }
});
