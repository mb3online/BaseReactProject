import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import InputComponent from './input';

describe('Input', () => {
  it('should contain a material-ui Text Field for text', () => {
    const ref = shallow(<InputComponent type="text" />);
    expect(ref).toBeDefined();
    expect(ref.find(<input type="text" />)).toBeTruthy();
  });
  it('should contain a material-ui Select Field for select', () => {
    fail('SelectField Material-UI component is broken');
    // const ref = shallow(<InputComponent type="select" />);
    // expect(ref).toBeDefined();
    // expect(red.find(<select />)).toBeTruthy();
  });
  it('should contain a material-ui Date Picker for date', () => {
    fail('DatePicker Material-UI component is broken');
    // const ref = shallow(<InputComponent type="date" />);
    // expect(ref).toBeDefined();
    // expect(red.find(<input type="date" />)).toBeTruthy();
  });
  it('should contain a material-ui Multiline TextField for date', () => {
    // fail('Throws weird error');
    const ref = shallow(<InputComponent type="multiline" rows={6} />);
    expect(ref).toBeDefined();
    expect(ref.find(<textarea />)).toBeTruthy();
  });
});
