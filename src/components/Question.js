import React from 'react';

function Question({ question }) {
    return (
        <div>
            <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
            {question.answerChoices.map((choice, index) => (
                <div key={"container" + index} className="choice-container">
                    <p key={"index-" + index} className="choice-prefix">{index + 1}</p>
                    <p key={"choice-" + index} className="choice-text" dangerouslySetInnerHTML={{ __html: choice }}></p>
                </div>
            ))}

        </div>
    );
}

export default Question;