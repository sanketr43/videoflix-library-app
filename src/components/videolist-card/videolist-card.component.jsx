import './videolist-card.style.css';

function VideoListCard() {
    return ( 
        <div className="vi-watchlater-card">
            <div className="vi-watchlater-video">
                <img src="https://i.ytimg.com/vi/a5s84piQdJI/hqdefault.jpg" />
            </div>
            <div className="vi-watchlater-body">
                <h5>Manchester United v. Norwich City | PREMIER LEAGUE HIGHLIGHTS | 4/16/2022 | NBC Sports</h5>
                <p>NBC Sports</p>
            </div>
            <div className="vi-watchlater-icon"><a href="#"><i className="bi bi-trash3"></i></a></div>
        </div>
     );
}

export default VideoListCard;