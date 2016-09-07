import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
// import SelectField from 'material-ui/SelectField';
// import DatePicker from 'material-ui/DatePicker';
import {EventEmitter} from 'fbemitter';

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.emitter = new EventEmitter();
    this._generatePropTypesConfig();
  }

  onChange(value) {
    this.emitter.emit('on-change', value);
  }

  static get TYPES() {
    return {
      TEXT: 'text',
      SELECT: 'select',
      DATE: 'date',
      MULTILINE: 'multiline',
    };
  }

  _generatePropTypesConfig() {
    let config = {
      id: PropTypes.string.required,
      hint: PropTypes.string.required,
      label: PropTypes.string.required,
      shouldDisable: PropTypes.func.required,
      inputType: PropTypes.string.required,
    };

    switch(this.props.inputType) {
      case InputComponent.TYPES.TEXT:
        Object.assign({}, config, {
          type: PropTypes.string.required,
          name: PropTypes.string.required,
          errorText: PropTypes.string.required,
          fullWidth: PropTypes.boolean,
          defaultValue: PropTypes.any,
        });
        break;

      case InputComponent.TYPES.DATE:
        Object.assign({}, config, {
          type: PropTypes.string.required,
          name: PropTypes.string.required,
          errorText: PropTypes.string.required,
          closeOnSelect: PropTypes.boolean,
          initialDate: PropTypes.object,
          minDate: PropTypes.object,
          maxDate: PropTypes.object,
          labels: PropTypes.object,
          format: PropTypes.string,
          locale: PropTypes.string
        });
        break;

      case InputComponent.TYPES.SELECT:
        Object.assign({}, config, {
          children: PropTypes.array.required,
          errorText: PropTypes.string.required,
          autoWidth: PropTypes.boolean,
          fullWidth: PropTypes.boolean,
          defaultValue: PropTypes.number,
          maxHeight: PropTypes.number,
        });
        break;

      case InputComponent.TYPES.MULTILINE:
        Object.assign({}, config, {
          name: PropTypes.array.required,
          errorText: PropTypes.string.required,
          fullWidth: PropTypes.boolean,
          defaultValue: PropTypes.number,
          rows: PropTypes.number,
          rowsMax: PropTypes.number,
        });
        break;
    }

    return config;
  }

  render() {
    switch(this.props.inputType) {
      case InputComponent.TYPES.TEXT:
        return (
          <TextField
            id={this.props.id}
            type={this.props.type}
            name={this.props.name}
            errorText={this.props.errorText}
            hintText={this.props.hint}
            floatingLabelText={this.props.label}
            fullWidth={this.props.fullWidth || false}
            defaultValue={this.props.defaultValue}
            onChange={this.onChange}
            disabled={this.props.shouldDisable()}
          />
        );
      // case InputComponent.TYPES.DATE:
        // return (
        //   <DatePicker
        //     hintText={this.props.hint}
        //     floatingLabelText={this.props.label}
        //     autoOk={this.props.closeOnSelect}
        //     minDate={this.props.minDate}
        //     maxDate={this.props.maxDate}
        //     onChange={this.onChange}
        //     locale={this.props.locale}
        //     dateTimeFormat={this.props.format}
        //     okLabel={this.props.labels.ok}
        //     cancelLabel={this.props.labels.cancel}
        //     defaultDate={this.props.initialDate}
        //     disabled={this.props.shouldDisable()}
        //   />
        // );
      // case InputComponent.TYPES.SELECT:
        // return (
        //   <SelectField
        //     id={this.props.id}
        //     children={this.props.children}
        //     autoWidth={this.props.autoWidth}
        //     errorText={this.props.errorText}
        //     hintText={this.props.hint}
        //     floatingLabelText={this.props.label}
        //     fullWidth={this.props.fullWidth}
        //     value={this.props.defaultValue}
        //     onChange={this.onChange}
        //     disabled={this.props.shouldDisable()}
        //     maxHeight={this.props.maxHeight}
        //   />
        // );
      case InputComponent.TYPES.MULTILINE:
        return (
          <TextField
            id={this.props.id}
            type="text"
            name={this.props.name}
            errorText={this.props.errorText}
            hintText={this.props.hint}
            floatingLabelText={this.props.label}
            fullWidth={this.props.fullWidth}
            defaultValue={this.props.defaultValue}
            onChange={this.onChange}
            disabled={this.props.shouldDisable()}
            multiLine
            rows={this.props.rows}
            rowsMax={this.props.rowsMax}
          />
        );
    };
  }
}
