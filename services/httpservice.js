var Fetch = require('whatwg-fetch');
var baseUrl = 'https://flake09.herokuapp.com';


var service = {
  get: function(url){
    return fetch(baseUrl+url)
    .then(function(response){
      return response.json();
    });
  }
}

module.exports = service;
