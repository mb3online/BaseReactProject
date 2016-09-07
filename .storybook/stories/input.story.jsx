import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {storiesOf} from '@kadira/storybook';

import {InputComponent} from '../../lib/components';

storiesOf('Input', module)
  .add('single line', () => (
    <MuiThemeProvider>
      <InputComponent
        id="1"
        inputType="text"
        label="simple label"
        hint="a small hint"
        shouldDisable={() => false} />
    </MuiThemeProvider>))
  .add('multiline', () => (
    <MuiThemeProvider>
      <InputComponent
        id="2"
        inputType="multiline"
        label="this is multiple lines"
        maxRows={10}
        shouldDisable={() => false}
      />
    </MuiThemeProvider>))
  .add('password', () => (
    <MuiThemeProvider>
      <InputComponent
        id="2"
        inputType="text"
        type="password"
        label="password"
        errorText="Please enter a password"
        shouldDisable={() => false}
      />
    </MuiThemeProvider>));
