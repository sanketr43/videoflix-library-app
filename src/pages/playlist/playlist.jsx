import "./playlist.style.css";
import PlaylistCard from "../../components/playlist-card/playlist-card.component";

function Playlist() {
    return ( 
        <div className="vi-container-vertical">
            <div className="vi-container-title">
                <h5>My Playlist</h5>
                <button className="bui-btn bui-btn-danger">Create Playlist</button>
            </div>
            
            <div className="vi-playlist-container">
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
            </div>
        </div>
     );
}

export default Playlist;