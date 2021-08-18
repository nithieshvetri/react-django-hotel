import React from 'react';
import { HashRouter,Route } from 'react-router-dom';


import Header from './components/Homepage/Header';
import Main from './components/Homepage/main1';
import Fivestar from './components/booking/five';
import Footer from './components/Homepage/footer';
import Slideshow from './components/Homepage/Slide';
import Form from './components/searchpage/form';
import Hoteldata from './components/searchpage/hotel';
import Detail from './components/searchpage/detail';


import './App.css';
import './app1.css';

const App =()=>{
    return (
        <HashRouter>
            <Header/>
            <Route path="/" exact component={() => 
                <div>
                    <Slideshow />
                <Main />
                </div>}/>

            <Route path="/search" exact component={Form}/>
            
            <Route path="/fivestar" exact component={Fivestar}/>
            <Route path="/detail" exact component={Detail}/>
            
                
            
  
  <Footer/>
        </HashRouter>
    );
};

export default App;