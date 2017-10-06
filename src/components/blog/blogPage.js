import React, {Component} from 'react'

export default class BlogPage extends Component{
  render(){
    return (
    <div className="container">
     <div className="jumbotron">
            <h1 className="text-center">Say Something</h1>
               </div>
        <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center"><strong>What is on your mind</strong></h3>
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