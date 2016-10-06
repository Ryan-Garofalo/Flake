import React from 'react'

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
      url: "https://obscure-basin-16378.herokuapp.com/api/list/501",
      method: 'get',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({
          listTitle: data.list.name,
          item:data.listItems[0].item_name
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
      <div className="kendraList col-lg-10 col-md-10 col-xs-12">
        <div className="connection panel panel-custom">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.listTitle}</h3>
          </div>
          <div className="panel-body">
            <p>{this.state.item}</p>
          </div>
        </div>
      </div>
    );
  }
});
