import React from 'react';

// video in curly bracket says that first object in arguments array has a property video
// grab that variable and declare a new variable video(identical to const video = props.video)
const VideoDetail = ({video}) => { 
    // checking the existence of video property
    if(!video){
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;

    //const url = 'https://www.youtube.com/embed/' + videoId;

    // Using String Interpolation or Template String in ES 6 
    // injecting javascript variable into a string 
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className = "video-detail col-md-8">
         <div className = "embed-responsive embed-responsive-16by9">
           <iframe className = "embed-responsive-item" src = {url}></iframe>         
         </div>

         <div className = "details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
         </div>
        </div>

    );
};

export default VideoDetail; 