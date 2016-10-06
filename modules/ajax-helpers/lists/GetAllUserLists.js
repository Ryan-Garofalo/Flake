import React from 'react'
import { Link } from 'react-router'

export default function () {

  var settings = {
    url: "http://localhost:3000/api/list",
    method: 'get',
    dataType: 'json',
    cache: false,
    success: function(data) {
      console.log(data);
      this.setState({data: data});
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this)
  }

  return $.ajax(settings);
}

// fetch('http://www.myapi.com'  ,{method: "GET"})
//   .then((response) => response.json())
//   .then((responseData) => {
//     var obj = {};
//     obj[item]=responseData;
//     this.setState(obj);
//   })
//   .done();
