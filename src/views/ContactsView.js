import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactList from '../components/contactList/ContactList';
import Form from '../components/Form/Form';

import Filter from '../components/Filter/Filter';

import 'react-toastify/dist/ReactToastify.css';
import { contactsOperations } from '../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
