// Finds module react from node_modules and 
// assigns it to variable React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// importing package for searching using Youtube API
import YTSearch from 'youtube-api-search';
// Importing search_bar component
import SearchBar from './components/search_bar';
// Importing video_list component
import VideoList from './components/video_list';
// importing video_detail component
import VideoDetail from './components/video_detail';
// package for throttling the search
import _ from 'lodash';

//API KEY for allowing request to youtube
const API_KEY = 'AIzaSyBnqSjAd0ewvoUQ4TG55IQ9ZdmPSxwzaBY';

// Create a new Component. This component should produce
// some html

// div : whenver we write JSX and put a compnent name in the tag the component is the component class
//using it inside of JSX turns it into a component instance

// new ES6 syntax: replace function() with ()=>
class App extends Component {
    constructor(props){
        super(props);

        // selectedVideo added to play the selected video from the list
        this.state = { 
            videos: [] ,
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    } 

    // function for search 
    videoSearch(term) {
        // function to search passed with some configuration items and call back function
        YTSearch({key : API_KEY, term : term} ,(videos) => {
        // gets resolve to this.setState({videos : videos}) in ES 6
        // only work when key and value both are same
         this.setState({
             videos : videos,
             selectedVideo : videos[0]
            });      
        });
    }
    

    // react try to renders instantly and doesnt wait for all the data to be accumalated
    // in YTSearch while fetching all data
    // selectedVideo is a video object
    // property onSearchTermChange added
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
        return (  
            <div>
            <SearchBar onSearchTermChange= {videoSearch} /> 
            <VideoDetail video = {this.state.selectedVideo}/> 
            <VideoList 
            //passing the property onVideoSelect callback  to VideoList
            //  function onVideoSelect updates the app state with the selected video
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}  />
            </div>
        ); 
    }   
}
 
//Take this component's generated HTML and put it 
// on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); 