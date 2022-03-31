import Questions from '../../Questions';


const QuestionAnswerSection = ({currentQuestion}) => {
    return (
        <div className="main">
            <div className="question-section">
                <div className="question-text" data-testid = "question-text">
                    { Questions[currentQuestion].questionLabel }
                </div>
            </div>
        </div>
    )
}

export default QuestionAnswerSection;