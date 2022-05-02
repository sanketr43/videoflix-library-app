import './sidebar.style.css';

function Sidebar() {

    return ( 
        <div className="sidebar" id="sidebar">
            <ul>
                {/* className="sidebar-menu-active" */}
                <a href="/"><li><i className="bi bi-house-fill"></i> Home</li></a>
                <a href="explore"><li><i className="bi bi-speedometer2"></i> Explore</li></a>
                <a href="playlist"><li><i className="bi bi-collection-play"></i> Playlist</li></a>
                <a href="history"><li><i className="bi bi-clock-history"></i> History</li></a>
                <a href="watch-later"><li><i className="bi bi-play-btn"></i> Watch Later</li></a>
                <a href="liked"><li><i className="bi bi-hand-thumbs-up"></i> Liked Videos</li></a>
                <div className="sidebar-hr"></div>
                <a href="#"><li><i className="bi bi-music-note-list"></i> Music</li></a>
                <a href="#"><li><i className="bi bi-trophy"></i> Sport</li></a>
                <a href="#"><li><i className="bi bi-controller"></i> Gaming</li></a>
                <a href="#"><li><i className="bi bi-film"></i> Flims</li></a>
                <a href="#"><li><i className="bi bi-newspaper"></i> News</li></a>
                <a href="#"><li><i className="bi bi-music-note-list"></i> Fashion & Beauty</li></a>
                <a href="#"><li><i className="bi bi-book"></i> Learning</li></a>
            </ul>
        </div>
     );
}

export default Sidebar;