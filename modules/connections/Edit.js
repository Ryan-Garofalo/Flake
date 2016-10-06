import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='EditConnection'>
        <h1>Edit Connection {this.props.params.id}</h1>
      </div>
    )
  }
})
