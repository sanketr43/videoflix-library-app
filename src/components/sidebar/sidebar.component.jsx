import './sidebar.style.css';

import { NavLink } from 'react-router-dom';

function Sidebar() {

    let activeClass = "sidebar-menu-active";

    return ( 
        <div className="sidebar" id="sidebar">
            <ul>
                <NavLink to={''} className={({isActive}) => isActive ? activeClass : undefined }><li className='sidebar-menu-active'><i className="bi bi-house-fill"></i> Home</li></NavLink>
                <NavLink to={'explore'} className={({isActive}) => isActive ? activeClass : undefined }><li><i className="bi bi-speedometer2"></i> Explore</li></NavLink>
                <NavLink to={'playlist'} className={({isActive}) => isActive ? activeClass : undefined }><li><i className="bi bi-collection-play"></i> Playlist</li></NavLink>
                <NavLink to={'history'} className={({isActive}) => isActive ? activeClass : undefined }><li><i className="bi bi-clock-history"></i> History</li></NavLink>
                <NavLink to={'watch-later'} className={({isActive}) => isActive ? activeClass : undefined }><li><i className="bi bi-play-btn"></i> Watch Later</li></NavLink>
                <NavLink to={'liked'} className={({isActive}) => isActive ? activeClass : undefined }><li><i className="bi bi-hand-thumbs-up"></i> Liked Videos</li></NavLink>
                <div className="sidebar-hr"></div>
                <NavLink to="#"><li><i className="bi bi-music-note-list"></i> Music</li></NavLink>
                <NavLink to="#"><li><i className="bi bi-trophy"></i> Sport</li></NavLink>
                <NavLink to="#"><li><i className="bi bi-controller"></i> Gaming</li></NavLink>
                <NavLink to="#"><li><i className="bi bi-film"></i> Flims</li></NavLink>
                <NavLink to="#"><li><i className="bi bi-newspaper"></i> News</li></NavLink>
                <NavLink to="#"><li><i className="bi bi-music-note-list"></i> Fashion & Beauty</li></NavLink>
                <NavLink to="#"><li><i className="bi bi-book"></i> Learning</li></NavLink>
            </ul>
        </div>
     );
}

export default Sidebar;