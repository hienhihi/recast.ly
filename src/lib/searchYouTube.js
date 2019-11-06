var searchYouTube = (options, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    type: video,
    maxResults: options.max,
    videoEmbeddable: true,
    success: callback(data),
    error: errorCB || function(error) {
      console.error('No youtube videos', error);
    }
  })
};

export default searchYouTube;
