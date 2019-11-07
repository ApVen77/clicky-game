import React from "react";
import "./style.css";



const GameCards = props => (

  <div className="card" onClick={() =>{props.handleClick(props.id)}}>
    <div className="container-hover">
      <img
        alt="cards"
        src={props.src} 
        
      />
      
    </div>
  </div>

);
// import React from "react";
// import "./Card.css";

// const Card = props => (
//   <div className="card" onClick={() => props.clickCount(props.id)}>
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//   </div>
// );




export default GameCards;

