import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';

class TextInput extends React.Component {
  render() {
    return (
      <TextField
        {...this.props}
        disabled={
          this.props.shouldDisable ? this.props.shouldDisable() : false
        }
      />
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string,
  floatingLabelText: PropTypes.string,
  shouldDisable: PropTypes.func,
  onCange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  errorText: PropTypes.string,
  defaultValue: PropTypes.node,
};

export default TextInput;
