import React, { Component } from "react";
import GameCards from "./components/GameCards";
import Wrapper from "./components/Wrapper";
import Score from "./components/ScoreCard";
import cards from "./cards.json";
import Game from "./components/Game"



function App() {
    return <Game />


}
export default App;


// class App extends Component {
//     state = {
//         cards,
//         clickedimg: [],
//         score: 0,
//         winner: 7,
//         status: ""

//     };

//     //Shuffle//
//     shuffleScoreCard = id => {
//         let clickedimg = this.state.clickedimg;


//         if (clickedimg.includes(id)) {
//             this.setState({ clickedimg: [], score: 0, status: "So Sorry! Game Over. Try again!" });
//             return;
//         } else {
//             clickedimg.push(id)
//             if (clickedimg.length === 8) {
//                 this.setState({ score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedPuppyIds: [] });
//                 console.log('You Win');
//                 return;
//             }

//             this.setState({ cards, clickedimg, score: clickedimg.length, status: " " });

//             for (let i = cards.length - 1; i > 0; i--) {
//                 let j = Math.floor(Math.random() * (i + 1));
//                 [cards[i], cards[j]] = [cards[j], cards[i]];
//             }
//         }
//     }