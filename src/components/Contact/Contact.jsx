import { FaPhone, FaUser } from 'react-icons/fa6';
import css from './Contact.module.css';

import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function Contact({
  data: {
    id,
    info: { name, number },
  },
}) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.wrapper}>
        <p className={css.contact}>
          <FaUser className={css.icon} />
          {name}
        </p>

        <p className={css.contact}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
}
