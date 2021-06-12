import React, { useState } from 'react'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div  className="header__left">
              <MenuOutlinedIcon />
              <Link to="/">
                <img 
                src="https://pngimg.com/uploads/youtube/youtube_PNG13.png" 
                alt="Youtube" 
                className="header__logo"
              />
              </Link>
            </div>

            <div className="header__input">
               <input type="text" 
               placeholder="Search"
               value = {inputSearch}
               onChange={e => setInputSearch(e.target.value)}
               />
              <Link to={`/search/${inputSearch}`}>
                <button className="header__inputButton">
                   <SearchOutlinedIcon className="search__icon"/>
               </button>
              </Link>
            </div>

            <div className="header__icons">
              <VideoCallIcon className="header__icon"/>
               <AppsOutlinedIcon className="header__icon"/>
               <NotificationsIcon className="header__icon"/>
               <Avatar 
                alt="Travis Howard" 
                src="/static/images/avatar/2.jpg" 
            />
            </div>

        </div>
    )
}

export default Header
