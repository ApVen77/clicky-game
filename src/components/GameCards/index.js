import React from "react";
import "./style.css";


const GameCards = props => (

  <div className="card">
    
    <div className="container-hover">
      <img
        alt="cards"
        src={props.src} 
        onClick={() =>{props.handleClick(props.id)}}
      />
      
    </div>
  </div>

);



export default GameCards;

