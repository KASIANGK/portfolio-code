import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext'; // Importer le hook
import './HomeBis.css';
import lightModeVideo from '../../assets/videotest.mp4';


const HomeBis = () => {
  const { isLightMode } = useTheme();
  const navigate = useNavigate();
  
  // État pour l'effet lumineux
  const [isClicked, setIsClicked] = useState(false);

  const handleNavigateToHome = () => {
    navigate('/'); // Naviguer vers la page principale (Home)
  };

  const handleIconClick = () => {
    setIsClicked(true); // Activer l'effet lumineux
    setTimeout(() => {
      setIsClicked(false); // Désactiver après 300 ms
    }, 300); // Durée de l'effet lumineux
    handleNavigateToHome(); // Naviguer vers Home
  };

  return (
    <div className={`home-homebis ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <div className="content-container">
        {/* <div className="column">
          <h2>Contenu du Slide 2</h2>
          <p>Voici le deuxième slide avec du contenu additionnel.</p>
        </div>

        <div className="column">
          <p>Un autre contenu dans le deuxième slide.</p>
        </div> */}
        <div className="video-container">
            <video
            className="main-video"
            autoPlay
            muted
            >
                <source src={lightModeVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
            </video>
        </div>

        {/* Bouton (icône) pour naviguer vers la page Home */}
        {/* <i 
          className={`fas fa-arrow-left navigate-icon-homebis ${isClicked ? 'clicked' : ''}`} 
          onClick={handleIconClick}
        ></i> */}
      </div>
    </div>
  );
};

export default HomeBis;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { useTheme } from '../../ThemeContext'; // Importer le hook

// import "./HomeBis.css";

// const HomeBis = () => {
//   const navigate = useNavigate();
//   const { isLightMode } = useTheme();

//   // Fonction appelée lors du changement de slide
//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 0) { // Si l'utilisateur swipe vers la gauche pour revenir au premier slide
//       navigate('/'); // Redirige vers la page principale (Home)
//     }
//   };

//   return (
//     <div className={`carousel-container home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={handleSlideChange} // Gestion du swipe pour la navigation
//       >
//         <SwiperSlide>
//           <div className="slide-container">
//             {/* Slide vide car ce slide est utilisé pour revenir à Home */}
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="video-div columns-container">
//             <div className="column">
//               <h2>Contenu du Slide 2</h2>
//               <p>Voici le deuxième slide avec du contenu additionnel.</p>
//             </div>

//             <div className="column">
//               <p>Un autre contenu dans le deuxième slide.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default HomeBis;




// ok sauf darmode mais ok 
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { useTheme } from '../../ThemeContext'; // Importer le hook

// import "./HomeBis.css";

// const HomeBis = () => {
//   const navigate = useNavigate();
//   const { isLightMode } = useTheme();

//   // Fonction appelée lors du changement de slide
//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 0) { // Si l'utilisateur swipe vers la gauche pour revenir au premier slide
//       navigate('/'); // Redirige vers la page principale (Home)
//     }
//   };

//   return (
//     <div className={`carousel-container home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={handleSlideChange} // Gestion du swipe pour la navigation
//       >
//         <SwiperSlide>
//           <div className="slide-container">
//             {/* Slide vide car ce slide est utilisé pour revenir à Home */}
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="video-div columns-container">
//             <div className="column">
//               <h2>Contenu du Slide 2</h2>
//               <p>Voici le deuxième slide avec du contenu additionnel.</p>
//             </div>

//             <div className="column">
//               <p>Un autre contenu dans le deuxième slide.</p>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default HomeBis;





