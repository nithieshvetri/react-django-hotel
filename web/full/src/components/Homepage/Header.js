import React from 'react';
import { Link } from 'react-router-dom';
import Ima from './image/02.jpg';

const Header=()=>{
    
    return (
        <div className="main">
        <div className="container">
        <img src="https://cdn0.dontpayfull.com/media/logos/size/300x300/voyage-prive.co.uk..png?v=20200604125224723942.jpg" alt="nithiesh"></img>
            <div className="header">
                <Link to='/'>HOME</Link>
                <Link to="/search">SEARCH</Link>
                <Link to="/fivestar">FIVESTAR HOTEL</Link>
                
            </div>
        </div>
        </div>

    );
};

export default Header;