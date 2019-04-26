import React from 'react'; 

import VideoListItem from './video_list_item';


const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // passing a key to avoid the warning array or iterator should have a unique key
        // passing key to update the record in list in speedy fashion
        return (
            <VideoListItem 
            // passing onVideoSelect callback as a prop to VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key = {video.etag} 
            video={video} />

        ); 
    });
    return (
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
        
    );
};
 
export default VideoList;