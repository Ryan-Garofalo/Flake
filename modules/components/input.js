import React from 'react'
var HTTP = require('../services/httpservice');

export default React.createClass({
  getInitialState: function() {
    return {
      name: '',
      date: '',
      activity: '',
      public: ''
    };
  },
  onClick: function(e){
    var arr = [];
    var name = document.querySelector("#inputName").value;
    var date = document.querySelector("#inputDate").value;
    var activity = document.querySelector("#inputActivity").value;
    var ya = document.querySelector("#inputPublic").value;
    arr.push(name,date,activity,ya)

    console.log(arr);

    HTTP.post('/form',arr)
    .then(function(response){
      console.log(response);
    }.bind(this));
  },


  render: function() {
    return (
      <div id="newevent">
      <input placeholder="Name" id="inputName"/>
      <input placeholder="Date" id="inputDate"/>
      <input placeholder="Activity" id="inputActivity"/>
      <input placeholder="Public" id="inputPublic"/>


      <button onClick={this.onClick}>Add Event</button>
      </div>
    )
  }
})
