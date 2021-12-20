import React from "react";

import "./App.css";
import ContactInput from "./Components/ContactInput/ContactInput";
import ContactList from "./Components/ContactList/ContactsList";
import { nanoid } from "nanoid";
import Filter from "./Components/Filter/Filter";

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  //checked is name already in contacts
  nameChecker = (newProperty, property, arr) => {
    if (arr.map((el) => el.property).includes(newProperty)) {
      alert(`${newProperty} is already in contacts `);
    } else {
      alert(`${newProperty} was succesfull add  `);
      return;
    }
  };

  //Add contact to contacts
  contactsAdder = (name, number) => {
    const namesArray = this.state.contacts.map((contact) => {
      return contact.name;
    });

    namesArray.includes(name)
      ? alert(`${name} is already in contacts `)
      : this.setState((prevState) => ({
          name,
          number,

          contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
        }));
  };

  //Remove contact from contacts

  contactsRemover = (e) => {
    const deletedContactIndex = this.state.contacts.findIndex((el) => {
      return el.id === e.currentTarget.id;
    });

    this.state.contacts.splice(deletedContactIndex, 1);
    this.setState({ contacts: this.state.contacts });
  };

  filterAdder = (filterQuery) => {
    this.setState({ filter: filterQuery });
  };

  render() {
    const { contactsAdder, filterAdder, contactsRemover } = this;
    const { contacts, filter } = this.state;

    //prepared filter`s value for function

    const filterLowCase = filter.toLowerCase();
    const FiltredContacts = contacts.filter((cont) => {
      return cont.name.toLowerCase().includes(filterLowCase);
    });

    return (
      <>
        <ContactInput whenSubmit={contactsAdder} />
        {contacts.length === 0 ? (
          <p>Please add contacts</p>
        ) : (
          <>
            <h2>Contacts</h2>
            <Filter onFiltred={filterAdder} />
            <ContactList
              contacts={FiltredContacts}
              onDeleteButton={contactsRemover}
            />
          </>
        )}
      </>
    );
  }
}

export default Phonebook;
