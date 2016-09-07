import React, {Component, PropTypes} from 'react';
import DatePicker from 'material-ui/DatePicker';

class DateInput extends React.Component {
  render() {
    return (
      <DatePicker
        {...this.props}
        mode="landscape"
        disabled={
          this.props.shouldDisable ? this.props.shouldDisable() : false
        }
      />
    );
  }
}

DateInput.propTypes = {
  id: PropTypes.string,
  floatingLabelText: PropTypes.string,
  shouldDisable: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  errorText: PropTypes.string,
  defaultDate: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  locale: PropTypes.string
};

export default DateInput;
