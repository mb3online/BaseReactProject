import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';

class MultilineInput extends React.Component {
  render() {
    return (
      <TextField
        {...this.props}
        multiLine
        disabled={
          this.props.shouldDisable ? this.props.shouldDisable() : false
        }
      />
    );
  }
}

MultilineInput.propTypes = {
  id: PropTypes.string,
  floatingLabelText: PropTypes.string,
  shouldDisable: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  errorText: PropTypes.string,
  defaultValue: PropTypes.node,
  rows: PropTypes.number,
  maxRows: PropTypes.number
};

export default MultilineInput;
