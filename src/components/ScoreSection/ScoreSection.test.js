import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';

import ScoreSection from './ScoreSection';
import { render } from '@testing-library/react';
import Questions from '../../questions';

Enzyme.configure({ adapter: new Adapter() });

it("Should render ScoreSection successfully without crashing", () => {
    const score = 1;
    const scoreSection = shallow(<ScoreSection score = { score }/>)
    
    expect(scoreSection.exists()).toEqual(true);
})

it("Should display current score", () => {
    const score = 1;
    const { getByTestId } = render(<ScoreSection score = { score }/>);
    
    const expectedScoreMessage = "You scored " + score + " out of " + Questions.length;
    expect(getByTestId("score-section")).toHaveTextContent(expectedScoreMessage);
})