import { act, fireEvent, render, waitFor} from '@testing-library/react';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import Questions from './Questions';
import QuestionAnswerSection from './components/QuestionAnswerSection/QuestionAnswerSection';


Enzyme.configure({ adapter: new Adapter() });

it("Should render App successfully without crashing", () => {
  const app = shallow(<App />);
  
  expect(app.exists()).toEqual(true);
})

it("Should render QuestionAnswerSection Component", () => {
  const app = shallow(<App />);
  
  expect(app.containsMatchingElement(<QuestionAnswerSection />)).toEqual(true);
})

it("Should have 'Pallavi's Quiz' as heading", () => {
  const {getByTestId} = render(<App />);

  expect(getByTestId("heading")).toHaveTextContent("Pallavi's Quiz");
})

describe("Testing functionality of App component", () => {

  it("Should display next question after some delay when option button of current question is clicked provided the current question is not the last", async() => {
    const app = render(<App />);
    const currentQuestionIndex = 0
    const button = app.getByText(Questions[currentQuestionIndex].answerOptions[0].answerLabel);
    fireEvent.click(button);
    
    const expectedQuestionLabel = Questions[currentQuestionIndex + 1].questionLabel;
    await waitFor(() => app.getByText(expectedQuestionLabel));
    expect(app.getByTestId("question-text")).toHaveTextContent(expectedQuestionLabel);
  })

it("Should display correct score after some delay when option button of last question is clicked", async () => {
  const app = render(<App />);
  let currentQuestionIndex = 0;
  let expectedScore = 0
  while(currentQuestionIndex < (Questions.length - 1)){
    let question = Questions[currentQuestionIndex];
    let option = question.answerOptions[0];
    if (option.isCorrect == true){
      expectedScore += 1;
    }
    
    let optionButton = app.getByText(option.answerLabel);
    fireEvent.click(optionButton);
    
    let nextQuestion = Questions[currentQuestionIndex + 1];
    await waitFor(() => app.getByText(nextQuestion.questionLabel));
    currentQuestionIndex += 1;
  }

  let question = Questions[currentQuestionIndex];
  let option = question.answerOptions[0];
  if (option.isCorrect == true){
    expectedScore += 1
  }

  let optionButton = app.getByText(option.answerLabel);
  fireEvent.click(optionButton);

  const expectedScoreMessage = "You scored " + expectedScore + " out of " + Questions.length;
  await waitFor(() => app.getByText(expectedScoreMessage));
  expect(app.getByTestId("score-section")).toHaveTextContent(expectedScoreMessage);
})
})