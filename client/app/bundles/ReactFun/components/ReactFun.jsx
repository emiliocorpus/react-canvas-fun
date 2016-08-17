// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class ReactFun extends React.Component {
  static propTypes = {
  
  
  };

  constructor(props, context) {
    super(props, context);
    
    this.addMouseListen = this.addMouseListen.bind(this)
  }

  componentDidMount() {
      let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
      let ctx = canvas.getContext('2d');
      canvas.width  = 400;
      canvas.height = 300; 
      canvas.style.width  = '800px';
      canvas.style.height = '600px';
      this.addMouseListen(canvas)
      
  }


  addMouseListen(canvas) {

    function writeMessage(canvas, message) {
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.font = '18pt Calibri';
            context.fillStyle = 'black';
            context.fillText(message, 10, 25);
    }

    function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
    }

    canvas.addEventListener('mousemove', function(evt) {
      var mousePos = getMousePos(canvas, evt);
      var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
      writeMessage(canvas, message);
    }, false)

  }

  

  

  writeMessage(canvas, message) {
          var context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.font = '18pt Calibri';
          context.fillStyle = 'black';
          context.fillText(message, 10, 25);
  }

  render() {
    return (
      <div className="container">


          <canvas ref="myCanvas" className="debugger-green" />

      </div>
    );
  }
}
