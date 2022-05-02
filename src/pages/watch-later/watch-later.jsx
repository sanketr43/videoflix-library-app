import './watch-later.style.css';
import VideoListCard from "../../components/videolist-card/videolist-card.component";

function WatchLater() {
    return ( 
        <div className="vi-container-vertical">
            <div className="vi-container-title">
                <h5>Watch Later</h5>
            </div>

            <div className="vi-watchlater-container">
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
            </div>

        </div>
     );
}

export default WatchLater;