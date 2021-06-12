import React from 'react'
import './App.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
              <TuneOutlinedIcon />
              <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow 
              image="https://yt3.ggpht.com/ytc/AAUvwnhWSKuOXkCSMiZeg6FNIKRAIOfASfYsVMaUyokVzA=s88-c-k-c0x00ffffff-no-rj"
              channel="Alux.com"
              verified
              subs="3.56M"
              noOfVideos={450}
              Description="Alux.com is more than a magazine, it is a social platform where people passionate about what it means to live an elegant, beautiful and successful life"
            />
            <hr />

            <VideoRow 
              views="22k views"
              subs="3.56M"
              description="Alux.com is more than a magazine, it is a social platform where people passionate about what it means to live an elegant, beautiful and successful life"
              timestamp="17 hours ago"
              channel="Alux.com"
              title="15 Ways To Live La DOLCE VITA"
              image="https://i.ytimg.com/vi/_ogT6nMK0TM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDf4i71Xny2I8fkI2JlWLw0BTruDw"
            />

            <VideoRow 
              views="210k views"
              subs="3.56M"
              description="Alux.com is more than a magazine, it is a social platform where people passionate about what it means to live an elegant, beautiful and successful life"
              timestamp="2 months ago"
              channel="Alux.com"
              title="10 Countries To Start a New Life"
              image="https://i.ytimg.com/vi/-Blsz2JbdgM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAPTHNG_sgMF84MQaTW7I-OEbUSiw"
            />

            <VideoRow 
              views="1.9M views"
              subs="3.56M"
              description="1Alux.com is more than a magazine, it is a social platform where people passionate about what it means to live an elegant, beautiful and successful life"
              timestamp="1 year ago"
              channel="Alux.com"
              title="15 Facts About Billgates"
              image="https://i.ytimg.com/vi/lMjO3Gg45pM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLApZ4vt1ccfczOATZX0tuP6A_87eQ"
            />

            <VideoRow 
              views="3.3M views"
              subs="3.56M"
              description="Alux.com is more than a magazine, it is a social platform where people passionate about what it means to live an elegant, beautiful and successful life"
              timestamp="9 months ago"
              channel="Alux.com"
              title="10 Most Expensive Hotels In The World"
              image="https://i.ytimg.com/vi/K8IN699J3kM/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDe5-s3eCmQsjqNnObTWr24i0wRvQ"
            />

        </div>
    )
}

export default SearchPage
