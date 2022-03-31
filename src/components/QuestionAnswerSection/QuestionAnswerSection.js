import Questions from '../../Questions';
import {nanoid} from 'nanoid';


const QuestionAnswerSection = ({currentQuestion}) => {


    const buttons = Questions[currentQuestion].answerOptions.map((answerOption) => (
        <button key = {nanoid()}>
            {answerOption.answerLabel}
        </button>
    ))
    return (
        <div className="main">
            <div className="question-section">
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