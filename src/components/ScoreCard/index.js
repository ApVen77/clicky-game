import React from "react";
import "./style.css";

const ScoreCard = props => (
    <div className="gameScore">
        <ul>
            <li>
                <a href ="/">Clicky Game</a>
            </li>
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
        {/* <h2 className="score"> Your Score: {props.total}</h2>
        <h2> className= "status> {props.status}</h2> */}

    </div>
);


export default ScoreCard;

