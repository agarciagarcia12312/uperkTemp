import React, {Component} from 'react'
var divStyle = {
  background: "green",
  padding: "20px",
  color:"white",
  margin: "20px"
};
export default class HomePage extends Component{
  render(){
    return (
    <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 style={divStyle} className="text-center">UPERK</h1>
            <p className="text-center">Welcome to UPERK where you find the best perk.</p>
          </div>
        </div>
      </div>
    );
  }
}
