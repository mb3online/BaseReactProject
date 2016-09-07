import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';

import InputComponent from './input';

describe('Input Component', () => {
  it('should contain a material-ui TextField for text', () => {
    const ref = render(<InputComponent inputType="text" type="password" id="t"/>);
    expect(ref.prop(id)).toBe('t');
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
    fail('Throws weird error');
    // const ref = shallow(<InputComponent inputType="multiline" rows={6} />);
    // expect(ref).toBeDefined();
    // expect(ref.find(<textarea />)).toBeTruthy();
  });
});
