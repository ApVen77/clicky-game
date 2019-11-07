import React from "react";
import "./style.css";

const ScoreCard = props => (
    
    <div className="gameScore">
        <ul>
            <li>
                <a href ="/"><strong>Clicky Game</strong></a>
            </li>
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        <li>

        </li>
        </ul>
        {/* <h2 className="score"> Your Score: {props.total}</h2>
        <h2> className= "status> {props.status}</h2> */}

    </div>
);


export default ScoreCard;

