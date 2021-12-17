import React from "react";
import s from "../ContactInput/ContactInput.module.css";

const ContactInput = () => {
    return (
      <section className={s.section}>
        <div className={s.container}>
          <h1>Phonebook</h1>
                <label className={s.inputLabel}>Name
            <input
              className={s.contactInput}
                        type="text"
                       
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
                </label>
                
                <button type="button" className={s.inputButton}>Add contacts</button>
        </div>
      </section>
    ); }


export default ContactInput;