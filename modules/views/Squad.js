import React from 'react'
import { Link } from 'react-router'
var HTTP = require('../services/httpservice');
import CFR from '../../modules/components/connectionFlakerate'



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
        <div className="connection panel panel-custom" key={item.id} >
          <div className="panel-heading" >
            <h3 className="panel-title"><Link to='/100/connection/sched/'>{item.friend2_id}</Link></h3>
          </div>
          <h3><CFR id={item.friend2_id}></CFR></h3>
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
