import React, {Component, PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';

class SelectInput extends React.Component {
  render() {
    return (
      <SelectField
        {...this.props}
        disabled={
          this.props.shouldDisable ? this.props.shouldDisable() : false
        }
      >
        {this.props.childen}
      </SelectField>
    );
  }
}

SelectInput.propTypes = {
  id: PropTypes.string,
  floatingLabelText: PropTypes.string,
  shouldDisable: PropTypes.func,
  onChange: PropTypes.func,
  errorText: PropTypes.string,
  defaultValue: PropTypes.number,
  maxHeight: PropTypes.number,
  childen: PropTypes.arrayOf(PropTypes.node),
};

export default SelectInput;
