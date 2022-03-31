import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });

it("Should render App successfully without crashing", () => {
  const app = shallow(<App />);
  expect(app.exists()).toEqual(true);
})