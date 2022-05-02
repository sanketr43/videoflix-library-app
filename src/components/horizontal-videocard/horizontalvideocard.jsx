import "./horizontal-videocard.style.css";

function HorizontalVideoCard() {
    return ( 
        <div className="vi-card-hr">
            <div className="vi-card-hr-tumbnail">
                <img className="vi-card-hr-img" src="https://i.ytimg.com/vi/a5s84piQdJI/hqdefault.jpg" />
            </div>
            <div className="vi-card-hr-body">
                <div>
                    <div className="vi-video-hr-title"> Manchester United v. Norwich City | PREMIER LEAGUE HIGHLIGHTS | 4/16/2022 | NBC Sports </div>
                    <div className="vi-video-hr-mobile"> Manchester United v. Norwich City </div>
                    <div className="vi-channel-hr-title"><span>NBC Sports</span><i className="bi bi-dot"></i><span>23M views</span> <i className="bi bi-dot"></i> <span>1 year ago</span> <span className="vi-card-likes"><i className="bi bi-hand-thumbs-up"></i> <i className="bi bi-hand-thumbs-down"></i></span></div>
                    <div className="vi-channel-hr-desc">Cristiano Ronaldo's hat trick gave Manchester United a wild win, as the Red Devils blew a 2-0 cushion before seizing a late victory against last-place Norwich...</div>
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