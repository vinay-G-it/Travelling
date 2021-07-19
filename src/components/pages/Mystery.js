import React from 'react';
import '../../App.css';

export default function Mystery() {
  return <h1 className='mystery'>
    <video src='/videos/camel.mp4' autoPlay loop muted/>
    Wanna explore it?</h1>;
}