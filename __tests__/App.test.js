import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../dev/components/App.jsx';
configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';



const app = shallow(<App />);

describe('App', () => {
  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains initial state of `techSalaries`', () => {
    expect(app.state().techSalaries).toEqual([]);
  });

  it('renders a Preloader component if `techSalaries` state is empty', () => {
    expect(app.find('Preloader').exists()).toBe(true);
  });
});