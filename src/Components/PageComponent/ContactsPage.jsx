import React, { Component } from 'react';
import "./css/ContactsPage.css";
import GoogleMap from "./Features/GoogleMap";
import ContactForm from "./Features/ContactForm";

class ContactsPage extends Component {

  render() {
    return (
      <div className="Contacts">
        <div className="lander" style={{width:'auto', height:'auto'}}>
          <h1>ContactsPage</h1>
          <p>Kontaktuppgifter med ett kontaktformulär och en karta med Jannes kontor utpekad</p>
          <ContactForm />
          <br/>
          <GoogleMap />
        </div>
      </div>
    )
  }
}
export default ContactsPage;
