import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "../Home/Home";
import HomeVideo from "../Home/HomeVideo";
import { useNavigate } from 'react-router-dom'; 
import darkModeVideo from '../../assets/Automatic3.mp4';
import lightModeVideo from '../../assets/Automatic.mp4';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './HorizontalCarousel.css';


const HorizontalCarousel = ({ isLightMode }) => {

    const [currentVideo, setCurrentVideo] = useState();
    const [videoTime, setVideoTime] = useState(0);
    const [loading, setLoading] = useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate(); 
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = videoTime;
        videoRef.current.play();
        setLoading(false);
      }
    }, [currentVideo]);
  
    useEffect(() => {
      if (videoRef.current) {
        setVideoTime(videoRef.current.currentTime);
        // currentTime propriete JS qui indique position de video ou audio
        const newVideo = isLightMode ? lightModeVideo : darkModeVideo;
        setCurrentVideo(newVideo);
        setLoading(true);
        videoRef.current.load();
      }
    }, [isLightMode]);
  
  return (
        <div className="carousel-container">
            <Swiper
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            >
            {/* Premier Slide avec la vidéo */}
            <SwiperSlide>
                <div>
                    {/* <p>test</p> */}
                </div>
            </SwiperSlide>

            {/* Deuxième Slide Divisé en Deux Colonnes */}
            <SwiperSlide>
                <div>
                    <div>
                    {/* Première Colonne */}
                        <div>
                            <h2>Colonne 1</h2>
                        </div>

                        {/* Deuxième Colonne avec Carousel Vertical */}
                        <div>
                            <p>test 2</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
  );
};

// const VerticalCarousel = () => {
//   return (
//     <Swiper
//     //   modules={[Pagination]}
//       pagination={{ clickable: true }}
//       direction="vertical"
//       spaceBetween={50}
//       slidesPerView={1}
//       style={{ height: "100%" }} // Important pour la hauteur
//     >
//       <SwiperSlide>
//         <div>
//           <h2>Slide 1 (Vertical)</h2>
//         </div>
//       </SwiperSlide>

//       <SwiperSlide>
//         <div>
//           <h2>Slide 2 (Vertical)</h2>
//         </div>
//       </SwiperSlide>

//       <SwiperSlide>
//         <div>
//           <h2>Slide 3 (Vertical)</h2>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

export default HorizontalCarousel;
