import './playlist-card.style.css';

function PlaylistCard() {
    return ( 
        <div className="vi-playlist-card">
            <div className="vi-playlist-body">
                <h5>My Playlist #1</h5>
                <p>10 Videos</p>
            </div>
            <div className="vi-playlist-icon"><a href="#"><i className="bi bi-trash3"></i></a></div>
        </div>
     );
}

export default PlaylistCard;