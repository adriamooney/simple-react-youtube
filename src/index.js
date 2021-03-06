import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA56xKmCNflQP_jppW6Ozs_QJ_kSRFkls4';

// create a new component
//this component should produce HTML

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
      //same as this.setState({videos:videos});
    });
  }

  render() {

    //throttles so the search so function is only called every 500 seconds
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}

//put this component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
