import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import { Container } from './Container/Container.styled';
import { saveContacts, parseContacts } from '../utils/localstarge';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { nanoid } from 'nanoid';
import initialContacts from '../constants/contact';

export function App() {
  const [contacts, setContacts] = useState(parseContacts() ?? initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  const onContactCreate = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name)) {
      return NotificationManager.warning(`${name} is already in contacts`);
    }

    setContacts([...contacts, { id: nanoid(), name, number }]);
  };
  const onContactDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={onContactCreate} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts()}
          onDelete={onContactDelete}
        />
      </Section>
      <NotificationContainer />
    </Container>
  );
}
