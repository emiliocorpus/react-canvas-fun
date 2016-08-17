// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class ReactFun extends React.Component {


  constructor(props, context) {
    super(props, context);
    
    this.addMouseListen = this.addMouseListen.bind(this)
  }

  componentDidMount() {
      let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
      let ctx = canvas.getContext('2d');
      canvas.width  = 720;
      canvas.height = 500; 
      this.addMouseListen(canvas)
      
  }


  addMouseListen(canvas) {
    var points = []
    function writeMessage(canvas, message) {
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.font = '12pt Calibri';
            context.fillStyle = 'black';
            context.fillText(message, 10, 25);
            context.imageSmoothingEnabled = false;
    }

    function drawLine(canvas, points) {
        var context = canvas.getContext('2d')
        context.clearRect(0,0, canvas.width, canvas.height)
        context.strokeStyle="#FF0000";
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (var i =1;i <points.length;i++) {
          context.lineTo(points[i].x,points[i].y)
        }
        context.stroke();
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
      points.push(mousePos)
      // var message = 'Mouse position: ' + "x: " + mousePos.x + ', y:' + mousePos.y;
      // writeMessage(canvas, message);
      drawLine(canvas, points)
    }, false)

  }


  render() {
    return (
      <div className="container">


          <canvas ref="myCanvas" className="my-canvas debugger-green" />

      </div>
    );
  }
}
