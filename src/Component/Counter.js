// import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'
// import PropTypes from 'prop-types'

let counter = function(convertSecond) {
    let hours   = Math.floor(convertSecond / 3600);
    let minutes = Math.floor((convertSecond - (hours * 3600)) / 60);
    let seconds = convertSecond - (hours * 3600) - (minutes * 60);
  
    // round seconds
    seconds = Math.round(seconds * 100) / 100
  
    let result = (hours < 10 ? "0" + hours : hours);
        result += ":" + (minutes < 10 ? "0" + minutes : minutes);
        result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
    return result;
  }
  
  module.exports = counter;