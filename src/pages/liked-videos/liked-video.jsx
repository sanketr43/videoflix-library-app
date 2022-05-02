import './liked-video.style.css';
import VideoListCard from "../../components/videolist-card/videolist-card.component";

function LikedVideo() {
    return ( 
        <div className="vi-container-vertical">
            <div className="vi-container-title">
                <h5>Liked Video</h5>
            </div>

            <div className="vi-watchlater-container">
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />

            </div>

        </div>
     );
}

export default LikedVideo;