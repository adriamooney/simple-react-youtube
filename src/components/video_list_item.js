import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //same as:
  // const video = props.video;
  //const onVideoSelect = props.onVideoSelect;
  //props.video is passed from parent component
  // console.log(video);

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img src={imageUrl} className="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
