import QuestionAnswerSection from './QuestionAnswerSection';
import Questions from '../../Questions';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import { getByRole, getByTestId, render, screen} from '@testing-library/react';


Enzyme.configure({ adapter: new Adapter() });


describe("Basic rendering of QuestionAnswerSection", () => {

    it("Should render QuestionAnswerSection successfully without crashing", () => {
        const currentQuestionIndex = 0
        const questionAnswerSection = shallow(<QuestionAnswerSection currentQuestion={ currentQuestionIndex }/>);
        expect(questionAnswerSection.exists()).toEqual(true);
    })
})


describe("Testing functionality of QuestionAnswerSection", () => {

    it("Should display question text of the current question", () => {
        const currentQuestionIndex = 0;
        const {getByTestId} = render(<QuestionAnswerSection currentQuestion = {currentQuestionIndex}/>);
        
        expect(getByTestId("question-text")).toHaveTextContent(Questions[currentQuestionIndex].questionLabel);

    })

    it("Should display answer options of the current question", () => {
        const currentQuestionIndex = 0;
        render(<QuestionAnswerSection currentQuestion={ currentQuestionIndex }/>);
        
        Questions[currentQuestionIndex].answerOptions.forEach((answerOption) => {
            expect( screen.getByText(answerOption.answerLabel)).toBeInTheDocument();
        })
    })


})