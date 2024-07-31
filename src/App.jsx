import { Component } from 'react';
import { customAlphabet } from 'nanoid';
import { GlobalStyle } from './componets/GlobalStyle'; 
import { Container } from './componets/Container/Container.styled'; 
import { ContactForm } from './componets/ContactForm/ContactForm';
import { ContactList } from './componets/ContactList/ContactList';
import { SearchBox } from './componets/SearchBox/SearchBox';
import { Notification } from './componets/Notification/Notification';

const nanoid = customAlphabet('1234567890', 4);

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onFormSubmit = values => {
    const contactExists = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    this.addContact(values);
  };

  addContact = values => {
    const contact = { id: nanoid(), ...values };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filtedContacts = this.getFilterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmit} />

        <h2>Contacts</h2>
        <SearchBox value={filter} onChange={this.changeFilter} />

        {filtedContacts.length ? (
          <ContactList
            contacts={filtedContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <Notification message="There are no contacts" />
        )}

        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
