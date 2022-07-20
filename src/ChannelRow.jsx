import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({image,Channel,subs,noOfVideos,description,verified}) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow_logo'alt={Channel} src={image}/>
      <div className="channelRow_text">
        <h4>{Channel} {verified && <CheckCircleOutlineIcon/>}</h4>
        <p>{subs} Subscribers . {noOfVideos} Videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
