import React, {Component} from 'react'
var divStyle = {
  background: "red",
  padding: "10px",
  fontsize:"10px",
  margin: "10px"
};
export default class RefreshmentPage extends Component{
 render(){
    return (
    <div className="container">
     <div className="jumbotron">
            <h1 style={divStyle} className="text-center">Need Refreshment or Caffine.</h1>
               </div>
        <div className="panel panel-default">
        <div className="panel-heading">
          <h3  className="panel-title text-center"><strong>Search for the nearest coffe place below.</strong></h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}