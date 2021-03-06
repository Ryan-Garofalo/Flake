import React from 'react'
import { Link } from 'react-router'
import FR from '../modules/components/flakerate'

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
          <div id="flakeRate" className="inline"><Link to="/100/flake">Flake Rate: <FR></FR>%</Link></div>
          <Search />
          <ConnectionTypes />
          <p><Link to="/100/dashboard">Dashboard</Link></p>
          <p><Link to="/100/mySquad">Squad</Link></p>
          <p><Link to="/100/calender">Calender</Link></p>
          <p><Link to="/100/Activities">Activities</Link></p>
          <p><Link to="#">Messages</Link></p>
          {/* <p><Link to="/100/practice">Practice</Link></p> */}
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
        <small className="block">Making The World a Better Place One Less Flake at a Time</small>
          <small className="block" dangerouslySetInnerHTML={{__html: '&copy Garf corp'}}></small>
        </footer>
      </div>
    )
  }
})
