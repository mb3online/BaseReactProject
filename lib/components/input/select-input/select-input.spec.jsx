import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import SelectInput from './select-input';

describe('Select Input', () => {
  it('should render', () => {
    const ref = shallow(
      <SelectInput />
    );
    expect(ref).toBeDefined();
  });
});
