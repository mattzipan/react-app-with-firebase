import React, { Component } from 'react';
import Question from './Question';
import { loadQuestions } from '../helpers/QuestionsHelper'

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true
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
                    questions, currentQuestion: questions[0],
                    loading: false
                }
            )
        } catch (err) {
            console.err(err)
        }
    }

    changeQuestion = () => {
        // get rnadom question index
        // set curretn question to the random index
        // remove the question from the array
        // update state to reflect changes
    }

    render() {
        return (
            <>
                {this.state.loading && <div id="loader" />}
                {!this.state.loading && this.state.currentQuestion && (
                    <Question question={this.state.currentQuestion} />
                )}

            </>
        );
    }
}

export default Game;