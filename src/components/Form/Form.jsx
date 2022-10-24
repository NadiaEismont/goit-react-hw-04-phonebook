import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
class SignUpForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    this.props.onSubmit({ name, number });
    form.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SignUpForm;
