import React,{useState,useEffect} from 'react';
//import Detail from './detail';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Fivestar=()=>{

const [Hotel,setHOTEL]=useState([]);

useEffect(()=>{
  const result=async()=>{
    const {data}=await axios.get('/api/hotel/')
    setHOTEL(data);
  };
  result();
},[])

const hos = Hotel.filter( rating => {
    return rating.starrating > 3
})

console.log(hos)
const print=hos.map((hotel,index)=>(
<div key={index} className="hotel">
  <main >
    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80.JPG"alt="images"/>
    <h1>{hotel.hotelname}</h1>
    <p>Hotel City:{hotel.city}</p>
    <p>Hotel State:{hotel.state}</p>
    <p>Hotel Rating{hotel.starrating+1}</p>
    <button><Link to="/search">VIEW MORE</Link></button>

  </main>
  </div>));
  return (
    <div className="ma">
      {print}
    
    </div>
  );
};

export default Fivestar;