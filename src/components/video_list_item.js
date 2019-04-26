 import React from 'react';

// video in curly bracket says that first object in arguments array has a property video
// grab that variable and declare a new variable video(identical to const video = props.video)

 const VideoListItem = ({video , onVideoSelect}) => {
     const imageurl = video.snippet.thumbnails.default.url;
     // const video = props.video;
    return (
        // takes the callback onVideoSelect and runs the callback with the video that was selected or passed to onClick
        <li onClick= {() => onVideoSelect(video)} className = "list-group-item">
         <div className = "video-list media">
          <div className = "media-left">
            <img className = "media-object" src = {imageurl} />
          </div>

          <div className = "media-body">
           <div className = "media-heading">{video.snippet.title}</div>
          </div>
        </div> 
        </li>
    )
 };

 export default VideoListItem;