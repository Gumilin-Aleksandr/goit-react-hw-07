import { FaPhone, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.container}>
      <div className={s.contact}>
        <p className={s.items}>
          <FaUser />
          {name}
        </p>
        <p className={s.items}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
