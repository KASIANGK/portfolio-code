import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import darkModeVideo from '../../assets/Automatic3.mp4';
import lightModeVideo from '../../assets/Automatic.mp4';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTheme } from '../../ThemeContext'; 

import './Home.css'; 

function Home({ selectedSlide, onSlideChange }) {
  const { isLightMode } = useTheme();
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [swiperKey, setSwiperKey] = useState(0);  // Clé unique pour forcer le re-render

  const currentVideo = isLightMode ? lightModeVideo : darkModeVideo;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1); // Change la clé pour forcer la réinitialisation de Swiper lors de la première navigation
  }, []);

  const handleSlideChange = (swiper) => {
    console.log(swiper.activeIndex);
    if (swiper.activeIndex === 0) {
      navigate('/homebis');
    }
  };

  return (
    <div className={`home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <Swiper
        key={swiperKey}  // Utiliser une clé unique pour forcer le remount
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className='video-div'>
            <video
              ref={videoRef}
              className="main-video"
              autoPlay
              muted
              loop
            >
              <source src={currentVideo} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            {/* Autres contenus ici */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;



// ok sauf darkmode et swipe "/" 1er fois
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
//       navigate('/homebis'); // Naviguer vers HomeBis
//       onSlideChange(1); 
//     }
//   };

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

//         <SwiperSlide>
//           <div className="slide-container">
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
//     if (swiper.activeIndex === 1) {
//       navigate('/homebis');
//       onSlideChange(1); // Mettez à jour l'état dans App
//     }
//   };

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


// avant ThemeContext
// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import darkModeVideo from '../../assets/Automatic3.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import './Home.css'; 
// import HorizontalCarousel from '../Carousel/HorizontalCarousel';

// function Home({ isLightMode }) {
//   const [currentVideo, setCurrentVideo] = useState(lightModeVideo); // Définit une valeur par défaut
//   const videoRef = useRef(null);
//   const navigate = useNavigate(); 

//   // Met à jour la vidéo à afficher selon le mode
//   useEffect(() => {
//     const newVideo = isLightMode ? lightModeVideo : darkModeVideo;
//     setCurrentVideo(newVideo);
//   }, [isLightMode]);

//   // Lecture automatique de la vidéo au chargement du composant
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load(); // Recharger la vidéo
//       videoRef.current.play(); // Lire la vidéo
//     }
//   }, [currentVideo]); // Dépendance sur currentVideo

//   // Gérer le changement de slide
//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 1) { 
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








// OK mais video visible seulement apres le click du btn navbar
// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import darkModeVideo from '../../assets/Automatic3.mp4';
// import lightModeVideo from '../../assets/Automatic.mp4';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import './Home.css'; 
// import HorizontalCarousel from '../Carousel/HorizontalCarousel';



// function Home({ isLightMode }) {
//   const [currentVideo, setCurrentVideo] = useState();
//   const [videoTime, setVideoTime] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const videoRef = useRef(null);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = videoTime;
//       videoRef.current.play();
//       setLoading(false);
//     }
//   }, [currentVideo]);

//   useEffect(() => {
//     if (videoRef.current) {
//       setVideoTime(videoRef.current.currentTime);
//       // currentTime propriete JS qui indique position de video ou audio
//       const newVideo = isLightMode ? lightModeVideo : darkModeVideo;
//       setCurrentVideo(newVideo);
//       setLoading(true);
//       videoRef.current.load();
//     }
//   }, [isLightMode]);


//   const handleSlideChange = (swiper) => {
//     if (swiper.activeIndex === 1) { 
//       navigate('/homebis'); 
//     }
//   };


//   return (
//     <div className={`home ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
//         <Swiper
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={50}
//           slidesPerView={1}
//           onSlideChange={handleSlideChange} 
//         >
//           <SwiperSlide>
//             <div className='video-div'>
//               {loading && <div className="loading">Loading...</div>}
//               <video
//                 ref={videoRef}
//                 className="main-video"
//                 autoPlay
//                 muted
//                 loop
//                 onTimeUpdate={() => {
//                   if (videoRef.current) {
//                     setVideoTime(videoRef.current.currentTime);
//                   }
//                 }}
//               >
//                 <source src={currentVideo} type="video/mp4" />
//                 Votre navigateur ne supporte pas la balise vidéo.
//               </video>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="slide-container">
//             </div>
//           </SwiperSlide>
//         </Swiper>
//     </div>
//   );
// }

// export default Home;


