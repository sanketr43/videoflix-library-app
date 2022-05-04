import "./VerticalVideoCard.style.css";

function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

function VerticalVideoCard({ videoId, title, description, videoThumbnail, channelTitle, channelLogo, category }) {
    
    return ( 
        <div className="vi-card">
            <div className="vi-card-img">
                <img className="bui-img-fluid" src={videoThumbnail} />
            </div>
            <div className="vi-card-body">
                <div>
                    <img className="vi-channel-icon bui-img-fluid" src={`https://ui-avatars.com/api/?name=${channelLogo}&background=random`} />
                </div>
                <div>
                    <div className="vi-video-title">{truncate(title,50)}</div>
                    <div className="vi-channel-title">{channelTitle}</div>
                    <div className="vi-channel-views">
                        <span>23M views</span>
                        <span>1 year ago</span>
                        <span className="vi-card-likes"><i className="bi bi-hand-thumbs-up"></i> <i className="bi bi-hand-thumbs-down"></i></span>
                    </div>
                </div>
                <div className="vi-card-menu">
                    <a href="#"><i className="bi bi-three-dots-vertical"></i></a>
                    <div className="vi-card-dropdown">
                        <ul>
                            <li><i className="bi bi-play-btn"></i> Save to watch later</li>
                            <li><i className="bi bi-collection-play"></i> save to playlist</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default VerticalVideoCard;