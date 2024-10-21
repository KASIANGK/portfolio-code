import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"; // Importer le style de mousewheel
import HomeVideo from './HomeVideo';
import Portfolio from '../Portfolio/Portfolio';
import './Home.css';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; // Ajouter Mousewheel ici

function Home() {
  return (
    <div className="carousel-container">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={true} // Active le swipe par trackpad et tactile
        navigation={false} 
        mousewheel={true} // Ajoute la gestion des gestes trackpad et molette
        cssMode={true} // Ajoute la compatibilité avec le scroll natif du navigateur
        modules={[Navigation, Pagination, Mousewheel]} // Ajouter Mousewheel ici
      >
        <SwiperSlide>
          <HomeVideo />
        </SwiperSlide>

        <SwiperSlide>
          <Portfolio />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;




// import React, { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";

// import { useNavigate } from 'react-router-dom';
// import darkModeVideo from '../../assets/Automatic3.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// // import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { useTheme } from '../../ThemeContext'; 
// import videotest from '../../assets/videotest.mp4';

// import './Home.css'; 
// import HomeVideo from './HomeVideo';
// import { Navigation, Pagination } from 'swiper/modules';

// import HomeBis from './HomeBis';

// function Home() {
//   const { isLightMode } = useTheme();
  



//   return (
//     <div className={`carousel-container ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         modules={[Navigation, Pagination]}
//       >
//         <SwiperSlide>
//           <HomeVideo></HomeVideo>
//         </SwiperSlide>

//         <SwiperSlide>
//           <HomeBis></HomeBis>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Home;



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


