import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import MultilineInput from './multiline-input';

describe('Multiline Input', () => {
  it('should render', () => {
    const ref = shallow(
      <MultilineInput />
    );
    expect(ref).toBeDefined();
  });
});
