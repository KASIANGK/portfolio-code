import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Players.css';
import playerImage from '../../assets/about.png';  // Assure-toi que l'image est dans src/assets

const Players = () => {

    return (
        <div className='playersall'>
            <div className='players'>
                <h1 className='titlee play-bold'>PLAYERS</h1>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="card">
                                <div 
                                    className="cover" 
                                    style={{ 
                                        backgroundImage: `url(${playerImage})`,  // Utilisation de l'image importée
                                    }}
                                >
                                    <h1>Nom du joueur</h1>
                                    <span className="price">Rôle</span>
                                    <div className="card-back">
                                        <button>❌</button>
                                        {/* <Link to={`/players/${player.id}`}>👀</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* <Link to="/players/create"><button>CREATE PLAYER</button></Link> */}
            </div>
        </div>
    );
};

export default Players;
