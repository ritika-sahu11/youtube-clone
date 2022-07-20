import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

function Videocard({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='videoCard'>
      <img className='videoCard_thumbnail' src={image} alt=""/>
      <div className="videoCard_info">
        <Avatar className="video_avatar" alt={channel} src={channelImage} />
        <div className="videoCard_text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} . {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default Videocard
