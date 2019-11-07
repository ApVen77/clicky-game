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
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessCorrect = true;
                }
            }
            return newItem;
        })
        guessCorrect ? this.handleCorrectGuess(newData) : this.handleInCorrectGuess(newData)
    }
    // handleClick() {


    //     const prevState = this.state.clicked.slice(GameCards);



    //     // shuffles the images

    //     const shuffled = this.shuffled(GameCards);



    //     // tracks score

    //     let score = this.state.score;

    //     let highScore = this.state.highScore;



    //     // if the clicked item is not in wasClicked, then it hasn't been clicked and the score is increased

    //     if (!this.state.clicked.includes(data)) {

    //       if (score === highScore) {

    //         score++;

    //         highScore++;

    //       } else {

    //         score++;

    //       }

    //       prevState.push(GameCards);

    //     }

    handleCorrectGuess = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);
        this.setState({
            data: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
        })
    }
    handleInCorrectGuess = newData => {
        this.setState({
            cards: this.resetFuntion(newData),
            score: 0
        })
    }
    resetFuntion = data => {
        const resetData = cards.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetData);
    }
    shuffleData = cards => {
        let i = cards.length - 1;
        while (i > 0) {
            let j = Math.floor(Math.random() * (i + 1)); //j=5
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
            i--;
        }
        return cards;
    }

    gameOver = () => {
        if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score }, function () {
                console.log(this.state.topScore);
            });
        }
        this.state.cards.forEach(card => {
            card.count = 0;
        });
        alert(`Game Over :( \nscore: ${this.state.score}`);
        this.setState({ score: 0 });
        return true;
    }

    render() {
        return (
            <div>

                <ScoreCard score={this.state.score} topScore={this.state.topScore} />

                <div className="container">
                    <Wrapper>

                        {this.state.cards.map(item => (
                            <GameCards src={item.image} id={item.id} handleClick={this.handleItemClick} />
                        ))}

                    </Wrapper>
                </div>

            </div>
        )
    }
}
export default Game;