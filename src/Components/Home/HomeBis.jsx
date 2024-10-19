import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from '../../ThemeContext'; // Importer le hook

import "./HomeBis.css";

const HomeBis = () => {
  const navigate = useNavigate();
  const { isLightMode } = useTheme();

  // Fonction appelée lors du changement de slide
  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex === 1) { // Si l'utilisateur swipe vers la gauche pour revenir au premier slide
      navigate('/'); // Redirige vers la page principale (Home)
    }
  };

  return (
    <div className={`carousel-container home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange} // Gestion du swipe pour la navigation
      >
        <SwiperSlide>
          <div className="slide-container">
            {/* Slide vide car ce slide est utilisé pour revenir à Home */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-div columns-container">
            <div className="column">
              <h2>Contenu du Slide 2</h2>
              <p>Voici le deuxième slide avec du contenu additionnel.</p>
            </div>

            <div className="column">
              <p>Un autre contenu dans le deuxième slide.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBis;





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
//   const { isLightMode } = useTheme(); // Utiliser le hook pour obtenir isLightMode

//   return (
//     <div className={`carousel-container home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         initialSlide={0} // Commence par le premier slide
//         onSlideChange={(swiper) => {
//           if (swiper.activeIndex === 1) {
//             // Si l'utilisateur est déjà sur le dernier slide (index 1)
//             swiper.slideTo(1); // Reste sur le slide actuel
//           }
//         }}
//         onTouchStart={(e) => {
//           const touchStartX = e.changedTouches[0].clientX;
//           e.target.setAttribute('data-touch-start', touchStartX);
//         }}
//         onTouchEnd={(e) => {
//           const touchStartX = parseFloat(e.target.getAttribute('data-touch-start'));
//           const touchEndX = e.changedTouches[0].clientX;
//           const swipeDistance = touchStartX - touchEndX;

//           // Si on swipe à gauche, on revient à Home
//           if (swipeDistance > 50) {
//             navigate('/'); // Naviguer vers Home
//           }
//           // Si on swipe à droite, ne rien faire (déjà géré par onSlideChange)
//         }}
//       >
//         {/* Deuxième Slide : le contenu réel de HomeBis */}
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




//ok
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
//   const { isLightMode } = useTheme(); // Utiliser le hook pour obtenir isLightMode

//   // Fonction appelée lors du changement de slide
//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 0) { // Si l'utilisateur swipe vers la gauche pour revenir au premier slide
//       navigate('/');
//        // Redirige vers la page principale (Home)
//     }
//   };

//   return (
//     <div className={`carousel-container home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         initialSlide={1} // Commence à partir du deuxième slide
//         onSlideChange={handleSlideChange} // Gestion du swipe pour la navigation
//       >
//         {/* Slide vide pour permettre le swipe retour */}
//         {/* <SwiperSlide>
//           <div className="slide-container">
//           </div>
//         </SwiperSlide> */}

//         {/* Deuxième Slide : le contenu réel de HomeBis */}
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




// tt ok sauf slide 3 et etat pour slide 1 
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
//   const { isLightMode } = useTheme(); // Utiliser le hook pour obtenir isLightMode

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
//         initialSlide={1} // Commence à partir du deuxième slide
//         onSlideChange={handleSlideChange} // Gestion du swipe pour la navigation
//       >
//         {/* Slide vide pour permettre le swipe retour */}
//         <SwiperSlide>
//           <div className="slide-container">
//           </div>
//         </SwiperSlide>

//         {/* Deuxième Slide : le contenu réel de HomeBis */}
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




// avant Theme Context
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import "./HomeBis.css"

// const HomeBis = () => {
//   const navigate = useNavigate();

//   // Fonction appelée lors du changement de slide
//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 0) { // Si l'utilisateur swipe vers la gauche pour revenir au premier slide
//       navigate('/'); // Redirige vers la page principale (Home)
//     }
//   };

//   return (
//     <div className="carousel-container home">
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={50}
//         slidesPerView={1}
//         initialSlide={1} // Commence à partir du deuxième slide
//         onSlideChange={handleSlideChange} // Gestion du swipe pour la navigation
//       >
//         {/* Slide vide pour permettre le swipe retour */}
//         <SwiperSlide>
//           <div className="slide-container">
//             {/* Slide vide car ce slide est utilisé pour revenir à Home */}
//           </div>
//         </SwiperSlide>

//         {/* Deuxième Slide : le contenu réel de HomeBis */}
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
