import React, { useState } from 'react';
import './App.css';
import QuestionAnswerSection from './components/QuestionAnswerSection/QuestionAnswerSection';
import Questions from './Questions';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (currentQuestion < (Questions.length - 1)){
      setCurrentQuestion(currentQuestion + 1)
    }
  }
  return (
      <div>
        <QuestionAnswerSection currentQuestion={currentQuestion} handleAnswerOptionClick = {handleAnswerOptionClick}/>
      </div>
    );
  }

export default App;
