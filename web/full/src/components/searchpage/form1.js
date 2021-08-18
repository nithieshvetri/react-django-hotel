import React from 'react';
import {Link} from 'react-router-dom';
//import Detail from './detail';

const Print=(props)=>{
    console.log(props)
    return (
        <div>
            props.map((term)=>(
    <div className="search" key={term.hotelname}
    
    >
        <div className="search-1"
        
        >
            <Link to="/detail" ><img src="https://imghtlak.mmtcdn.com/images/hotels/200703311203122588/Entrance_Lobby.jpg" alt="images"
            onClick={()=>{
                let val=term;
                console.log(val);
            <Detail val={val}></Detail>}}
            ></img>
          
            </Link>
            

            <div className="displ">
                <h2>{term.hotelname}
                </h2>
                <p>{term.address}
                {term.city}
                {term.state}</p>
            </div>
        </div>
    </div>));
      
        </div>
    );
};

  
export default Print;