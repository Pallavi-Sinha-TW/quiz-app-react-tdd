import Questions from '../../Questions';
import {nanoid} from 'nanoid';
import React from 'react';


const QuestionAnswerSection = ({currentQuestion, handleAnswerOptionClick, buttonClass}) => {

    const buttons = Questions[currentQuestion].answerOptions.map((answerOption) => (
        <button key = {nanoid()} onClick = {() => handleAnswerOptionClick(answerOption.isCorrect) } className = {buttonClass}>
            {answerOption.answerLabel}
        </button>
    ))
    return (
        <div className="main">
            <div className="question-section">
                <div className='question-count' data-testid = "question-count-number">
                    <span >Question {currentQuestion + 1}</span> / {Questions.length}
                </div>
                <div className="question-text" data-testid = "question-text">
                    { Questions[currentQuestion].questionLabel }
                </div>
            </div>
            <div className='answer-section'>
                {buttons}
            </div>
        </div>
    )
}

export default QuestionAnswerSection;