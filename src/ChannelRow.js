import React from 'react'
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const ChannelRow = ({image, channel, verified, subs, noOfVideos, Description}) => {

    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
            alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel}
                {verified && <CheckCircleOutlineOutlinedIcon />}
                </h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos 
                </p>
                <p>{Description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
