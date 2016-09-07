import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TextInput from './text-input';

describe('Text Input', () => {
  it('should render', () => {
    const ref = shallow(
      <TextInput />
    );
    expect(ref).toBeDefined();
  });
});
