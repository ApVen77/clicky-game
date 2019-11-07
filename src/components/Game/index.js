import React, { Component } from "react";
import cards from "../../cards.json";
import ScoreCard from "../ScoreCard/index";
import GameCards from "../GameCards";
import Wrapper from "../Wrapper";



class Game extends Component {
    state = {
        cards,
        score: 0,
        topScore: 0,
        status: ""

    };
    handleItemClick = (id) => {
        let guessCorrect = false;
        const newData = this.state.cards.map(item => {
            const newItem = {...item};
            if(newItem.id === id){
                if(!newItem.clicked){
                    newItem.clicked = true;
                    guessCorrect = true;
                }
            }
            return newItem;
        })
        guessCorrect ? this.handleCorrectGuess(newData) : this.handleInCorrectGuess(newData)
    }
    handleCorrectGuess = newData => {
        const {topScore, score} = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);
        this.setState({
            data:this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
        })
    }
    handleInCorrectGuess =newData => {
        this.setState({
            cards: this.resetFuntion(newData),
            score: 0
        })
    }
    resetFuntion = data => {
        const resetData = cards.map(item => ({...item, clicked:false}));
        return this.shuffleData(resetData);
    }
    shuffleData = cards => {
        let i = cards.length -1;
        while(i>0){
            let j = Math.floor(Math.random() * (i + 1)); //j=5
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
            i--;
        }
        return cards;
    }
    render() {
        return (
            <div>

                <ScoreCard score={this.state.score} topScore ={this.state.topScore} />
                <Wrapper>
                
                <div className="container">
                    {this.state.cards.map(item => (
                        <GameCards src={item.image} id={item.id} handleClick = {this.handleItemClick}/>
                    ))}
                </div>

                </Wrapper>
                
            </div>
        )
    }
}
export default Game;