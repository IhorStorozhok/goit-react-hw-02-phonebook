import React from 'react';

import './App.css';
import ContactInput from './Components/ContactInput/ContactInput'

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  render() { return (<ContactInput/>)}
}


export default Phonebook;
