import React from 'react';

import Navigation from './Navigation';

export default class Layout extends React.Component{
  render(){
    return(
      <section className="page">
        <section>
          {this.props.children}
        </section>
      </section>
    );
  }
}
