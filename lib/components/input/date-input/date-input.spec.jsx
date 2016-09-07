import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DateInput from './date-input';

describe('Date Input', () => {
  it('should render', () => {
    const ref = shallow(
      <DateInput />
    );
    expect(ref).toBeDefined();
  });
});
