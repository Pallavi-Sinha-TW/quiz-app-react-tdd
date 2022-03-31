import QuestionAnswerSection from './QuestionAnswerSection';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });


describe("Basic rendering of QuestionAnswerSection", () => {

    it("Should render QuestionAnswerSection successfully without crashing", () => {
        const questionAnswerSection = shallow(<QuestionAnswerSection />);
        expect(questionAnswerSection.exists()).toEqual(true);
    })
})