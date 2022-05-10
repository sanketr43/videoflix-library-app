import './home.style.css';
import VerticalVideoCard from './../../components/vertical-videocard/VerticalVideoCard.component';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        axios.get("https://videoflix-library-api.vercel.app/api/videos/get").then((response) => {
            setVideos(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    return ( 
        <div className="vi-container">
            {
                videos.map((data,index) => <VerticalVideoCard {...data} key={index} />)
            }
        </div>
     );
}

export default Home;