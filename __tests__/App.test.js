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

  it('contains initial state of `countyNames`', () => {
    expect(app.state().countyNames).toEqual([]);
  });
  
  it('contains initial state of `medianIncomes`', () => {
    expect(app.state().medianIncomes).toEqual([]);
  });

  it('renders a Preloader component if `techSalaries` state is empty', () => {
    expect(app.find('Preloader').exists()).toBe(true);
  });

  describe('when `techSalaries` state is not empty', () => {
    beforeEach(() => {
      app.setState({
        techSalaries: [{id: 1}]
      });
    });

    afterEach(() => {
      app.setState({
        techSalaries: []
      });
    });

    it('it renders the app', () => {
      expect(app.find('.App').exists()).toBe(true);
    });
  });
  
});