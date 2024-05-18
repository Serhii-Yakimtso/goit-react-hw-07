import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  // const contacts = useSelector(selectContacts);
  // const filterName = useSelector(selectNameFilter);
  // const visibleContacts = contacts.filter(contact => {
  //   return contact.info.name.toLowerCase().includes(filterName.toLowerCase());
  // });
  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
      {/* <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul> */}
    </>
  );
}
