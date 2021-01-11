import React, { Component } from 'react';
import Question from './Question';
import { loadQuestions } from '../helpers/QuestionsHelper'

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true,
            score: 0
        }
    }

    async componentDidMount() {
        // async await fetch api
        try {
            const questions = await loadQuestions();
            // add data to state
            //choose first question and pass it to Question component
            this.setState(
                {
                    questions
                }, () => { this.changeQuestion(); }
            )

        } catch (err) {
            console.err(err)
        }
    }

    changeQuestion = (bonus = 0) => {
        // get rnadom question index
        const randomQuestionIndex = Math.floor(Math.random() * this.state.questions.length)
        // set curretn question to the random index
        const currentQuestion = this.state.questions[randomQuestionIndex]
        // remove the question from the array
        const remainingQuestions = [...this.state.questions];
        remainingQuestions.splice(randomQuestionIndex, 1)
        // update state to reflect changes
        this.setState((prevState) => ({
            questions: remainingQuestions,
            currentQuestion,
            loading: false,
            score: prevState.score += bonus
        }))

        console.log(this.state.score)
    }

    render() {
        return (
            <>
                {this.state.loading && <div id="loader" />}
                {!this.state.loading && this.state.currentQuestion && (
                    <Question question={this.state.currentQuestion} changeQuestion={this.changeQuestion} />
                )}

            </>
        );
    }
}

export default Game;