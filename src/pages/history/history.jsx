import HorizontalVideoCard from "../../components/horizontal-videocard/horizontalvideocard";

function History() {
    return ( 
        <div className="vi-container-vertical">
            <div className="vi-container-title">Watch history</div>
            <div className="vi-container-title">Today</div>
            <HorizontalVideoCard />
            <div className="vi-container-title">Yesterday</div>
            <HorizontalVideoCard />
            <div className="vi-container-title">30 April 2022</div>
            <HorizontalVideoCard />
            <HorizontalVideoCard />
            <HorizontalVideoCard />
            <HorizontalVideoCard />
            <HorizontalVideoCard />
            <HorizontalVideoCard />
            <HorizontalVideoCard />
            <HorizontalVideoCard />
        </div>
     );
}

export default History;