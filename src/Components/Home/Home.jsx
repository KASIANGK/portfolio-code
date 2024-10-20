// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTheme } from '../../ThemeContext'; 
// import HomeVideo from './HomeVideo'; // Assurez-vous que ce composant est correctement importé
// import './Home.css'; 

// function Home() {
//   const { isLightMode } = useTheme();
//   const navigate = useNavigate();
  
//   const [isClicked, setIsClicked] = useState(false);

//   const handleNavigateToHomeBis = () => {
//     navigate('/homebis');
//   };

//   const handleIconClick = () => {
//     setIsClicked(true); // Activer l'effet lumineux
//     setTimeout(() => {
//       setIsClicked(false); // Désactiver après 300 ms
//     }, 300); // Durée de l'effet lumineux
//     handleNavigateToHomeBis(); // Naviguer vers HomeBis
//   };

//   return (
//     <div className={`carousel-container ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <div className="video-container">
//         <HomeVideo />

//         <i 
//           className={`fas fa-arrow-right navigate-icon ${isClicked ? 'clicked' : ''}`} 
//           onClick={handleIconClick}
//         ></i>
//       </div>
//     </div>
//   );
// }

// export default Home;










import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from 'react-router-dom';
import darkModeVideo from '../../assets/Automatic3.mp4';
import lightModeVideo from '../../assets/Automatic.mp4';
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTheme } from '../../ThemeContext'; 
import videotest from '../../assets/videotest.mp4';

import './Home.css'; 
import HomeVideo from './HomeVideo';
import { Navigation, Pagination } from 'swiper/modules';

import HomeBis from './HomeBis';

function Home() {
  const { isLightMode } = useTheme();
  



  return (
    <div className={`carousel-container ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <HomeVideo></HomeVideo>
        </SwiperSlide>

        <SwiperSlide>
          <HomeBis></HomeBis>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;










// ok sauf darkmode mais tt ok !!!
// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import darkModeVideo from '../../assets/Automatic3.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { useTheme } from '../../ThemeContext'; // Importer le hook

// import './Home.css'; 

// function Home({ selectedSlide, onSlideChange }) {
//   const { isLightMode } = useTheme();
//   const videoRef = useRef(null);
//   const navigate = useNavigate();

//   const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play();
//     }
//   }, [currentVideo]);

//   const handleSlideChange = (swiper) => {
//     console.log(swiper.activeIndex);  // Ajoutez un log pour vérifier l'indice actif
//     if (swiper.activeIndex === 0) {
//       navigate('/homebis');
//     }
//   };
  

//   return (
//     <div className={`home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={handleSlideChange} 
//       >
//         <SwiperSlide>
//           <div className='video-div'>
//             <video
//               ref={videoRef}
//               className="main-video"
//               autoPlay
//               muted
//               loop
//             >
//               <source src={currentVideo} type="video/mp4" />
//               Votre navigateur ne supporte pas la balise vidéo.
//             </video>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="slide-container">
//             {/* Autres contenus ici */}
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Home;










//ok
// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import darkModeVideo from '../../assets/Automatic3.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { useTheme } from '../../ThemeContext'; // Importer le hook

// import './Home.css'; 

// function Home({ selectedSlide, onSlideChange }) {
//   const { isLightMode } = useTheme();
//   const videoRef = useRef(null);
//   const navigate = useNavigate();

//   // Utiliser la vidéo en fonction du mode
//   const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

//   // Effet pour charger la vidéo à chaque changement de mode
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play();
//     }
//   }, [currentVideo]);

//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 1) {
//       navigate('/homebis');
//       onSlideChange(1); // Met à jour l'état dans App
//     }
//   };

//   // Assurer que la classe CSS est appliquée au corps de la page
//   // useEffect(() => {
//   //   document.body.classList.toggle('light-mode', isLightMode);
//   //   document.body.classList.toggle('dark-mode', !isLightMode);
//   // }, [isLightMode]); 

//   return (
//     <div className={`home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         initialSlide={selectedSlide} // Utiliser l'état passé en prop
//         onSlideChange={handleSlideChange} 
//       >
//         <SwiperSlide>
//           <div className='video-div'>
//             <video
//               ref={videoRef}
//               className="main-video"
//               autoPlay
//               muted
//               loop
//             >
//               <source src={currentVideo} type="video/mp4" />
//               Votre navigateur ne supporte pas la balise vidéo.
//             </video>
//           </div>
//         </SwiperSlide>

//         {/* <SwiperSlide>
//           <div className="slide-container">
//           </div>
//         </SwiperSlide> */}
//       </Swiper>
//     </div>
//   );
// }

// export default Home;


