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
      window.location.reload()
    }.bind(this));
  },


  render: function() {
    return (
      <div id="newevent">
      <input placeholder="Name" id="inputName" className="inputField"/>
      <input placeholder="Date" id="inputDate" className="inputField"/>
      <input placeholder="Activity" id="inputActivity" className="inputField"/>
      <input placeholder="Public" id="inputPublic" className="inputField"/>


      <button onClick={this.onClick}>Add Event</button>
      </div>
    )
  }
})
