import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Section from './Section/Section';
import { Container } from './Container/Container.styled';
import { saveContacts, parseContacts } from '../utils/localstarge';
export function App() {
  const [contacts, setContacts] = useState(
    parseContacts() ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
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
