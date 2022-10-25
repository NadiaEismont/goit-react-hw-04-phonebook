import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  TagForm,
  TagInput,
  ButtonSubmit,
  LabelForm,
} from './ContactForm.styled';
class ContactForm extends Component {
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
      <TagForm onSubmit={this.handleSubmit}>
        <LabelForm htmlFor="name">Name</LabelForm>
        <TagInput type="text" name="name" placeholder="Your name" />
        <LabelForm htmlFor="number">Number</LabelForm>
        <TagInput
          type="tel"
          name="number"
          placeholder="Your phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </TagForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
