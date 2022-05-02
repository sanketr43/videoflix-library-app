import "./VerticalVideoCard.style.css";

function VerticalVideoCard() {
    return ( 
        <div className="vi-card">
            <div className="vi-card-img">
                <img className="bui-img-fluid" src="https://i.ytimg.com/vi/a5s84piQdJI/hqdefault.jpg" />
            </div>
            <div className="vi-card-body">
                <div>
                    <img className="vi-channel-icon bui-img-fluid" src="https://docs.snap.com/assets/images/creating-an-icon_creating_an_icon_world_example-a831f0c2b967e422d37120d99c9959e0.png" />
                </div>
                <div>
                    <div className="vi-video-title">
                        Manchester United v. Norwich City | PREMIER LEAGUE HIGHLIGHTS...
                    </div>
                    <div className="vi-channel-title">NBC Sports</div>
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