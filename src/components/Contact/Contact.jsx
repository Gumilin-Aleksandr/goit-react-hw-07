import { FaPhone, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";

import { deleteContactThunk } from "../../redux/contactsOps";

function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
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
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
