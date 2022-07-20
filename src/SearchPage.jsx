import TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined';
import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      
      <div className="searchPage_filter">
        <TuneOutlinedIcon/>
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
      image='https://reactscript.com/wp-content/uploads/2021/06/Nice-Avatar-Generator-In-React-370x297.png'
      Channel="Ritika Sahu"
      verified
      subs='660K'
      noOfVideos={190}
      description="You can find many Programming Viedos here.Start by practicing small progrmas and get better day by day with us and stay.."/>
    <hr/>
    <VideoRow
        views='5.8M'
        subs='357K'
        description='Do you want to learn Reactjs in 10 days?..'
        timestamp='59 seconds ago'
        channel='Ritika Sahu'
        title="Let's build a youtube-clone"
        image='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
    />
     <VideoRow
        views='5.8M'
        subs='357K'
        description='Do you want to learn Reactjs in 10 days?..'
        timestamp='59 seconds ago'
        channel='Ritika Sahu'
        title="Let's build a youtube-clone"
        image='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
    />
     <VideoRow
        views='5.8M'
        subs='357K'
        description='Do you want to learn Reactjs in 10 days?..'
        timestamp='59 seconds ago'
        channel='Ritika Sahu'
        title="Let's build a youtube-clone"
        image='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
    />
     <VideoRow
        views='5.8M'
        subs='357K'
        description='Do you want to learn Reactjs in 10 days?..'
        timestamp='59 seconds ago'
        channel='Ritika Sahu'
        title="Let's build a youtube-clone"
        image='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
    />
     <VideoRow
        views='5.8M'
        subs='357K'
        description='Do you want to learn Reactjs in 10 days?..'
        timestamp='59 seconds ago'
        channel='Ritika Sahu'
        title="Let's build a youtube-clone"
        image='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
    />
     <VideoRow
        views='5.8M'
        subs='357K'
        description='Do you want to learn Reactjs in 10 days?..'
        timestamp='59 seconds ago'
        channel='Ritika Sahu'
        title="Let's build a youtube-clone"
        image='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
    />
     <VideoRow
        views='5.8M'
        subs='357K'
        description='Do you want to learn Reactjs in 10 days?..'
        timestamp='59 seconds ago'
        channel='Ritika Sahu'
        title="Let's build a youtube-clone"
        image='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
    />
    </div>
    

  )
}

export default SearchPage
