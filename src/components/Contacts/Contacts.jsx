import React from 'react';
import { PropTypes } from 'prop-types';
// import { ChangeColor, MainButton } from './FeedbackOptions.styled';
const Contacts = ({ listOfContacts, onDelete }) => (
  <div>
    <ul>
      {listOfContacts.map(contact => (
        <li key={contact.id}>
          <label type="text" name="name">
            {contact.name}
          </label>
          <label
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          >
            {}
          </label>
          <button
            type="button"
            key={contact.id}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Contacts.propTypes = {
  listOfContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contacts;
