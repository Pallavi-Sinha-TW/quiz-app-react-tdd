import QuestionAnswerSection from './QuestionAnswerSection';
import Questions from '../../Questions';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import {fireEvent, getByTestId, render, screen} from '@testing-library/react';


Enzyme.configure({ adapter: new Adapter() });

const handleAnswerOptionClick = jest.fn();


describe("Basic rendering of QuestionAnswerSection", () => {

    it("Should render QuestionAnswerSection successfully without crashing", () => {
        const currentQuestionIndex = 0
        const questionAnswerSection = shallow(<QuestionAnswerSection currentQuestion={ currentQuestionIndex } handleAnswerOptionClick = {handleAnswerOptionClick}/>);
        expect(questionAnswerSection.exists()).toEqual(true);
    })
})


describe("Testing functionality of QuestionAnswerSection", () => {

    it("Should display question text of the current question", () => {
        const currentQuestionIndex = 0;
        const {getByTestId} = render(<QuestionAnswerSection currentQuestion = {currentQuestionIndex} handleAnswerOptionClick = {handleAnswerOptionClick}/>);
        
        expect(getByTestId("question-text")).toHaveTextContent(Questions[currentQuestionIndex].questionLabel);

    })

    it("Should display answer options of the current question", () => {
        const currentQuestionIndex = 0;
        render(<QuestionAnswerSection currentQuestion={ currentQuestionIndex } handleAnswerOptionClick = {handleAnswerOptionClick}/>);
        
        Questions[currentQuestionIndex].answerOptions.forEach((answerOption) => {
            expect( screen.getByText(answerOption.answerLabel)).toBeInTheDocument();
        })
    })

    it("Should display current question count", () => {
        const currentQuestionIndex = 0;
        const { getByTestId } = render(<QuestionAnswerSection currentQuestion = {currentQuestionIndex} handleAnswerOptionClick = {handleAnswerOptionClick}/>);

        const expectedQuestionCount = currentQuestionIndex + 1;
        const totalQuestionCount = Questions.length;
        expect(getByTestId("question-count-number")).toHaveTextContent("Question " + expectedQuestionCount + " / " + totalQuestionCount);

    })

    it("Should call handleAnswerOptionClick method when answer option button is clicked", () => {
        const currentQuestionIndex = 0;
        const questionAnswerSection = render(<QuestionAnswerSection currentQuestion={ currentQuestionIndex } handleAnswerOptionClick = {handleAnswerOptionClick}/>);
        
        const butttons = questionAnswerSection.getAllByRole("button");

        butttons.forEach ( (button) => {
            fireEvent.click(button);
        })

        expect(handleAnswerOptionClick).toHaveBeenCalledTimes(4);
    })


})