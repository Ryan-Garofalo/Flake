import React from 'react'
import GetAllLists from '../ajax-helpers/lists/GetAllUserLists'
import GetOneList from '../ajax-helpers/lists/GetOneList'

export default React.createClass({
  render() {
    return (
      <div className='list'>
        <Testing />
      </div>
    )
  }
})

var Testing = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var settings = {
      url: "https://obscure-basin-16378.herokuapp.com/api/connections/1001",
      method: 'get',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({
          firstName: data.connection.first_name,
          lastName: data.connection.last_name,
          email:data.connection.email,
          phone:data.connection.phone

        });

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    }
    return $.ajax(settings);
  },
  render: function() {
    return (
      <div className="test">
        <h1>Testing</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <p>{this.state.phone}</p>
      </div>
    );
  }
});

//THIS ALSO DOESNT WORK YET
var Section = React.createClass({
  render: function() {
    return (
      <div className="testingTesting">
        //<h1>{this.state.data}</h1>
        <h1>hello kendra and ryan</h1>
      </div>
    );
  }
});
