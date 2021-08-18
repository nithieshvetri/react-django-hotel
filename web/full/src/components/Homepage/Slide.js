import React from 'react';
import {Fade} from 'react-slideshow-image';

import download1 from './image/download1.jpg';
import download2 from './image/downlooad2.jpg';

import download3 from './image/download3.jpg';


// const image=[ 
//     '/image/download1.jpg',
//     '/image/download2.jpg',
//     '/image/download3.jpg',
//     '/image/download1.jpg'

// ];



const Slideshow=()=>{
    return (
        <div className="main-slide">
            <Fade>
                <div className="slide-1" style={{backgroundImage:`url(${download1})`}}></div>
                <div className="slide-1" style={{backgroundImage:`url(${download2})`}}></div>
                <div className="slide-1" style={{backgroundImage:`url(${download3})`}}></div>
                <div className="slide-1" style={{backgroundImage:`url(${download1})`}}></div>

            </Fade>
        </div>
    );
};
export default Slideshow;