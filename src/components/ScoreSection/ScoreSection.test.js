import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';

import ScoreSection from './ScoreSection';
import { render } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

it("Should render ScoreSection successfully without crashing", () => {
    const scoreSection = shallow(<ScoreSection />)
    
    expect(scoreSection.exists()).toEqual(true);
})