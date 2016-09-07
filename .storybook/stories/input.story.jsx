import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {storiesOf, action} from '@kadira/storybook';

import {TextInput, DateInput, MultilineInput} from '../../lib/components';

storiesOf('Date Picker', module)
  .add('default', () => {
    <MuiThemeProvider>
      <DateInput
        id="datepicker"
        closeOnSelect={true}
        floatingLabelText="test"
        shouldDisable={() => false}
        labels={{
          ok: 'hello',
          cancel: 'not hello'
        }}
        onChange={(event, key, payload) =>
          action(`Change Input: ${event}, ${key}, ${payload}`)}
      />
    </MuiThemeProvider>
  });

storiesOf('Input', module)
  .add('single line', () => (
    <MuiThemeProvider>
      <TextInput
        id="1"
        floatingLabelText="simple label"
        hintText="a small hint"
        shouldDisable={() => false}
        onChange={(event, key, payload) =>
          action(`Change Input: ${event}, ${key}, ${payload}`)}
      />
    </MuiThemeProvider>))
  .add('multiline', () => (
    <MuiThemeProvider>
      <MultilineInput
        id="2"
        floatingLabelText="this is multiple lines"
        maxRows={10}
        shouldDisable={() => false}
      />
    </MuiThemeProvider>))
  .add('password', () => (
    <MuiThemeProvider>
      <TextInput
        id="4"
        type="password"
        floatingLabelText="password"
        errorText="Please enter a password"
        shouldDisable={() => false}
      />
    </MuiThemeProvider>));
