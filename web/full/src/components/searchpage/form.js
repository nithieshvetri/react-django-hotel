import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Switch,Route } from 'react-router';

//import Detail from './detail.js';

const Form=()=>{
    const [datavalue,setdata]=useState('');
    const [term,setTerm]=useState([]);

    useEffect(()=>{
        const results=async()=>{
          const {data}=await axios.get(`api/hotel/?search=${datavalue}`)
          setTerm(data);
        };
        results();
      },[datavalue])

      const print=(term.map((Term,index)=>(
      <div className="search" key={index}
      >
          <div className="search-1"
          >
              <Link to={{
                  pathname:'/detail',
                  state:Term
              }}><img src="https://imghtlak.mmtcdn.com/images/hotels/200703311203122588/Entrance_Lobby.jpg" alt="images"
              ></img></Link>
              

<div className="displ">
                  <h2>{Term.hotelname}
                  </h2>
                  <p>{Term.address}</p>
                  <p>{Term.city}</p>
                  <p>{Term.state}</p>
                  
                  
                  <p>Rating:{Term.starrating+1}</p>
                  </div>
                  
                  
              
          </div>
      </div>)));
        
    

    return (
        <div>
            <form  >
                <input type='text'
                className="inp"
                value={datavalue}
                placeholder="ENTER THE STATE TO SEARCH "
                onChange={(e)=>setdata(e.target.value)}
                />
                <button 
                onClick={(e)=>e.preventDefault()}
                className="but">SEARCH</button>
            </form>
            <h6>click the image to view its entire description</h6>
         <div className="mi">
             
             {print}
         </div>
        </div>
    );
};

export default Form;
