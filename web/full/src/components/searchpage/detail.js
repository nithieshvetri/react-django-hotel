import React from 'react';


const Detail=(props)=>{
    console.log(props);
    return (
        <div className="det">
            <div className="detail">
            <h1>{props.location.state.hotelname}</h1>
            <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/04/ff/86/hotel-malligi-hampi.jpg"/>
            </div>
            <h3>{props.location.state.hotelname}</h3>
            <p>{props.location.state.address}</p>
            <p>{props.location.state.city}</p>
            <p>{props.location.state.room_type}</p>
            <p>{props.location.state.hotel_category}</p>
            <p>{props.location.state.property_value}</p>
            <p>{props.location.state.starrating}</p>
           
            
        </div>
    );
};

export default Detail;