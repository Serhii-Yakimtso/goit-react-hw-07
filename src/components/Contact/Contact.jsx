import { FaPhone, FaUser } from 'react-icons/fa6';
import css from './Contact.module.css';

import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';

export default function Contact({ data }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log(data.id);
    dispatch(deleteContact(data.id));
  };
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.contact}>
          <FaUser className={css.icon} />
          {data.name}
        </p>

        <p className={css.contact}>
          <FaPhone className={css.icon} />
          {data.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
