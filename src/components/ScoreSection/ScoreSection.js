import Questions from "../../Questions";

const ScoreSection = ({score}) => {
    return (
        <div className = "main">
            <div className = "score-section" data-testid = "score-section">
                You scored {score} out of {Questions.length}
            </div>
        </div>

    )
}

export default ScoreSection;