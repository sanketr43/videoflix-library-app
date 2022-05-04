import "./explore.style.css";
import HorizontalVideoCard from "../../components/horizontal-videocard/horizontalvideocard";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function Explore() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get("https://videoflix-library-api.vercel.app/api/videos/get").then((response) => {
            setVideos(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    return ( 
        <div className="vi-container-vertical">
            <div className="vi-container-title">Trending videos</div>
            {
                videos.map((data,index) => <HorizontalVideoCard {...data} key={index} />)
            }
        </div>
     );
}

export default Explore;