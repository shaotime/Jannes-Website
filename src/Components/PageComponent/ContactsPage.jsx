import React, { Component } from 'react';
import "./css/ContactsPage.css";
import GoogleMap from "./Features/ContactsFeatures/GoogleMap";
import ContactForm from "./Features/ContactsFeatures/ContactForm";
import EditableInformation from "./Features/ContactsFeatures/EditableInformation";

class ContactsPage extends Component {

  render() {
    return (
      <div className="Contacts">
        <div className="lander" style={{width:'auto', height:'auto'}}>
          <h1>Kontakt</h1>
          <p>Kontaktuppgifter med ett kontaktformulär och en karta med Jannes kontor utpekad</p>

          <EditableInformation />
          <br/>
          <ContactForm />
          <br/>
          <h2> This is where my office is located: </h2>
          <GoogleMap />
        </div>
      </div>
    )
  }
}
export default ContactsPage;
