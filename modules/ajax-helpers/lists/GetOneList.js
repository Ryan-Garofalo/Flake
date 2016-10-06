import React from 'react'
import { Link } from 'react-router'

export default function () {

  var settings = {
    url: "https://obscure-basin-16378.herokuapp.com/api/list/501",
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
