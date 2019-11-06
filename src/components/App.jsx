import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from './../data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from './../lib/searchYouTube.js';
import YOUTUBE_API_KEY from './../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoClick = this.onVideoClick.bind(this);
    this.state = {
      playing: exampleVideoData[0]
    };

  }

  onVideoClick(video) {
    this.setState({
      playing: video
    });
  }

  // function


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5>
              {<VideoPlayer playing={this.state.playing}/>}
            </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5>
              {<VideoList videos={exampleVideoData} onClick={this.onVideoClick} />}
            </h5></div>
          </div>
        </div>
      </div>
    );
  }
}







// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5>
//           {<VideoPlayer videos={exampleVideoData} />}
//         </h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5>
//           {<VideoList videos={exampleVideoData} />}
//         </h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
