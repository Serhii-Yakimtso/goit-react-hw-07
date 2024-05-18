import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from '../../redux/selectors';

import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

import css from './App.module.css';

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>error...</p>}
        <ContactForm />
        {/* <SearchBox /> */}
        <ContactList />
      </div>
    </>
  );
}

export default App;
