import "./horizontal-videocard.style.css";

function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

function HorizontalVideoCard({ videoId, title, description, videoThumbnail, channelTitle, channelLogo, category }) {
    return ( 
        <div className="vi-card-hr">
            <div className="vi-card-hr-tumbnail">
                <img className="vi-card-hr-img" src={videoThumbnail} />
            </div>
            <div className="vi-card-hr-body">
                <div>
                    <div className="vi-video-hr-title">{truncate(title,120)}</div>
                    <div className="vi-video-hr-mobile"> {truncate(title,50)} </div>
                    <div className="vi-channel-hr-title"><span>{channelTitle}</span><i className="bi bi-dot"></i><span>23M views</span> <i className="bi bi-dot"></i> <span>1 year ago</span> <span className="vi-card-likes"><i className="bi bi-hand-thumbs-up"></i> <i className="bi bi-hand-thumbs-down"></i></span></div>
                    <div className="vi-channel-hr-desc">{truncate(description,150)}</div>
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

export default HorizontalVideoCard;