import { Component } from 'react';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './Form/Form';
import { Section } from './Default.styled';
export class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addContactToList = newContact => {
    const existingContact = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (existingContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };
  filterByName = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  render() {
    return (
      <Section>
        <h2>Phoneboock</h2>
        <ContactForm addContact={this.addContactToList} />
        <h2>Contacts</h2>
        <Filter filter={this.filterByName} />
        <ContactList
          contacts={this.state.contacts}
          filterValue={this.state.filter}
          deleteContact={this.onDeleteContact}
        />
      </Section>
    );
  }
}
