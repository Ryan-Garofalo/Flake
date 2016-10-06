import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <Aside/>
        {this.props.children}
        <Footer/>
        {/* will render `Repo.js` when at /repos/:userName/:repoName */}
      </div>
    )
  }
})

var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <header>
          <h1 className="title">Flake</h1>
          <ul className="nav">
            <li className="navlink"><Link to="/100/dashboard">Dashboard</Link></li>
            <li className="navlink"><Link to="/">Edit Profile</Link></li>
            <li className="navlink"><Link to="/">Log Out</Link></li>
          </ul>
        </header>
      </div>
    )
  }
})

var Aside = React.createClass({
  render() {
    return (
      <div className="aside">
        <aside className="col-lg-2 col-md-2 col-xs-12">
          <div className="profile_pic_container">
            <img className="profilePic" src="../images/ryan.jpg"/>
          </div>
          <div id="flakeRate">Flake Rate: 0%</div>
          <Search />
          <ConnectionTypes />
          <p><Link to="/100/eventful">Manage Activities</Link></p>
          <p><Link to="/100/lists/new">View Connections</Link></p>
          <p><Link to="/100/connection/new">Add a Connection</Link></p>
        </aside>
      </div>
    )
  }
})

var Search = React.createClass({
  render(){
    return (
      <div className="KendraSearchContainer">
        <input className="kendraSearch" type="text" placeholder="find connection"/>
        <button className="kendraSearchButton">Go</button>
      </div>
    )
  }
})

var ConnectionTypes = React.createClass({
  render(){
    return (
      <div className="search-by-type">
        <p className="kendraSelectTitle">Search:</p>
        <select className="kendraSelect">
          <option>Activities</option>
          <option>Biking</option>
          <option>Skiing</option>
          <option>Tennis</option>
        </select>
      </div>
    )
  }
})

var Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <footer>
          <small dangerouslySetInnerHTML={{__html: '&copy Garf corp'}}></small>
        </footer>
      </div>
    )
  }
})
