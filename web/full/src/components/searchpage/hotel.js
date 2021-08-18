import React,{useState,useEffect} from 'react';
//import Detail from './detail';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hoteldata=()=>{

const [Hotel,setHOTEL]=useState([]);

useEffect(()=>{
  const result=async()=>{
    const {data}=await axios.get('/api/')
    setHOTEL(data);
  };
  result();
},[])


console.log(Hotel)
const print=Hotel.map((hotel)=>(<div>

  <p>"{hotel.city}"</p>
  <Link to="/detail">{hotel.hotelname}</Link>
  
  
  </div>));
  
  

  return (
    <div>
      <p>vb hj</p>
   <img src="https://imghtlak.mmtcdn.com/images/hotels/200703311203122588/Entrance_Lobby.jpg"/>
    <p>{print}</p>
    </div>
  );
};

export default Hoteldata;