import React, { useState } from 'react';
import './App.css';
import QuestionAnswerSection from './components/QuestionAnswerSection/QuestionAnswerSection';
import ScoreSection from './components/ScoreSection/ScoreSection';
import Questions from './Questions';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (currentQuestion < (Questions.length - 1)){
      setCurrentQuestion(currentQuestion + 1)
    }
    else{
      setShowScore(true);
    }
    if (isCorrect == true){
      setScore(score + 1);
    }
  }
  return (
      <div>
        {
          showScore ? 
          (
            <ScoreSection score = {score} />
          ) :
          (
            <QuestionAnswerSection currentQuestion={currentQuestion} handleAnswerOptionClick = {handleAnswerOptionClick}/>
          )
        }
      </div>
    );
  }

export default App;
