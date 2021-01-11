import React, { useState } from 'react';

export default function Question({ question, changeQuestion }) {

    // hook with initial value
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [classToApply, setClassToApply] = useState("");
    const [answering, setAnswering] = useState(false);


    const checkAnswer = (selectedAnswer) => {
        if (answering) return
        setAnswering(true); //they are answering
        setSelectedAnswer(selectedAnswer); //we know what they answered

        const classToApply = selectedAnswer === question.answer ? "correct" : "incorrect";
        setClassToApply(classToApply)
        // selectedAnswer equals question.answer
        const bonus = selectedAnswer === question.answer ? 10 : 0;

        setTimeout(() => {
            setSelectedAnswer(-1)
            setAnswering(false)
            changeQuestion(bonus)
        }, 1000)
    }

    return (
        <div>
            <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
            {question.answerChoices.map((choice, index) => (
                <div key={"container" + index}
                    className="choice-container"
                    className={`choice-container ${selectedAnswer === index && classToApply}`}
                    onClick={() => checkAnswer(index)}
                >
                    <p key={"index-" + index} className="choice-prefix">{index + 1}</p>
                    <p key={"choice-" + index} className="choice-text" dangerouslySetInnerHTML={{ __html: choice }}></p>
                </div>
            ))}

        </div>
    );
}

