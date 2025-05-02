import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectLoading,
  selectVisibleContacts,
} from "../../redux/contactsSlice";

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <ul className={s.container}>
      {visibleContacts.map((contact) => (
        <li className={s.contactList} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
      {loading && <h2>Loading, please wait...</h2>}
      {error && <h2>Oops, something went wrong...</h2>}
      {visibleContacts.length === 0 && !loading && !error && (
        <h2>No contacts</h2>
      )}
    </ul>
  );
}

export default ContactList;
