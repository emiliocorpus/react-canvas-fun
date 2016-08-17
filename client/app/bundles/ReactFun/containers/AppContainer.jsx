import React, { PropTypes } from 'react';
import ReactFun from '../components/ReactFun';
import _ from 'lodash';

// Simple example of a React "smart" component
export default class AppContainer extends React.Component {
  static propTypes = {

  };

  constructor(props, context) {
    super(props, context);

  
  }



  render() {
    return (
      <div className="container-fluid">
        <ReactFun />
      </div>
    );
  }
}
