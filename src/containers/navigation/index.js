import React, { Component } from 'react'
import "../../App.css";
import { NavLink } from 'react-router-dom';

const close = require('../../assets/close.svg')
const menu = require('../../assets/menu.svg')


export default class NavigationContainer extends Component {
    

    constructor(props) {
      super(props)
    
      this.state = {
         showNav: true,
         showDrop: false,
         showDropUs: false,
         mobileToggle:false
      }
    }

  toggleDropUs() {
    if(this.state.showDrop === true) {
      this.setState({
        showDrop: false
      })
    }
    this.setState({
      showDropUs: !this.state.showDropUs
    })
  }
  toggleDrop() {
      if(this.state.showDropUs === true) {
        this.setState({
          showDropUs: false
        })
      }
    this.setState({
      showDrop: !this.state.showDrop
    })
  }

  toggleMobileNav() {
    console.log('hi')
      if(this.state.mobileToggle === true) {
        this.setState({
          mobileToggle: false
        })
      }
    this.setState({
      mobileToggle: !this.state.mobileToggle
    })
  }

  render() {
   
    return (
      <div>
      
        <div className="nav">
          <img alt="x" onClick= {this.toggleMobileNav.bind(this)} style={{
            verticalAlign:'middle',
            marginTop:'-3.1em',
            marginLeft:'1.5em'
          }} src={(this.state.mobileToggle)?`${close}`:`${menu}`} className="mob-display"/>
          <div className="rewards-logo">
          </div>
          <div className="float-r profile">
            <div className="bell-pic">
            </div>
            <div className="prof-pic">
            </div>
          </div>
        </div>
          <div className={(!this.state.mobileToggle)?"nav-cont":" nav-cont-off"}>
            <ul className="sidenav">
              <li onClick={this.toggleMobileNav.bind(this)}><NavLink  activeClassName="active" to="/admin/metrics"><i className="icon-dashboard fs3x c-icon" ></i>Dashboard</NavLink></li>
              <li ><NavLink activeClassName="active"  to="#"><i className="icon-cms fs3x c-icon"></i>Content Management <span className="side-caret" style={{marginTop:'-2em'}}>></span></NavLink></li>
              <li className={(this.state.showDropUs)?"dropnav":" dropnav off-toggle "}><NavLink  onClick={this.toggleDropUs.bind(this)} activeClassName="active" to="#"><i className="icon-user fs3x c-icon"></i>User Management <span className="side-caret">></span></NavLink>
                  <ul className="drop">
                  <NavLink  activeClassName="active" to="#">Users</NavLink>
                  <NavLink  activeClassName="active" to="/admin/admin-users" onClick={this.toggleMobileNav.bind(this)}>Admin Users</NavLink>
                  </ul>
              </li>
              <li className={(this.state.showDrop)?"dropnav":" dropnav off-toggle "}><NavLink  onClick={this.toggleDrop.bind(this)} activeClassName="active" to="#"><i className="icon-reporting fs3x c-icon"></i>Reporting <span className="side-caret">></span></NavLink>
              <ul className="drop">
                  <NavLink  activeClassName="active" to="/admin/reports" onClick={this.toggleMobileNav.bind(this)}>Portal Report</NavLink>
                  <NavLink  activeClassName="active" to="#">Redemption Report</NavLink>
                  </ul>
              </li>
              <li><NavLink activeClassName="active"  to="#"><i className="icon-settings fs3x c-icon"></i>System Settings</NavLink></li>
              <li><NavLink activeClassName="active"  to="/login"><i className="icon-settings fs3x c-icon"></i>Logout</NavLink></li>
            </ul>
            <div className="sidenav-foot">
              <div className="uba-inv-logo">

              </div>
              <span className="">
                Copyright &copy; 2018 UBA Group PLC.<br/> Powered By Interswitch
              </span>
            </div>
          </div>
      </div>
    )
  }
};
