import React, { Component } from 'react'
import video from './Videos.video1.mp4'

class Getvideo extends Component {
    render() {
      return (
        <div className="Getvideo">
        <p>hello</p>
        <video width="750" height="500" controls >
        <source src={video} type="video/mp4"/>
       </video>
        </div>
      );
    }   
}