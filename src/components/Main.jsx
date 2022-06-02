import React from 'react';
import video1 from '../assets/video1.mp4'

const Main = () => {
  return (
    <div className="Main">
        <video src={video1} autoPlay loop muted/>

    </div>
  )
}

export default Main