import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navCss from '../../css/navbar.css'
class Navigation extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange(event) {
  
  }
  handleSubmit(event) {

  }
  render() {
    return (
      <div className={navCss}>
        <div>
          <nav className="navbar navbar-toggleable-md navbar-inverse navbar-sticky bg-faded">
            <button className="navbar-toggler navbar-toggler-right" id="menuIcon" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link to="/" id="name"> <h1 >UPERK</h1></Link>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
               
                <li className="navLinks"><Link to="refreshment">Quick-Stop</Link></li>
                <li className="navLinks"><Link to="blog">Blog</Link></li>
            
              </ul>  
              <Link to="auth">
                <button id="signInBtn">Sign In</button>
              </Link>


            </div>
          </nav>
        </div>
      </div>  
    );
  }
}

export default Navigation;