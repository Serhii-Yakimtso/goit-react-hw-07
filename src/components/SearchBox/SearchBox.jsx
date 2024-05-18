import { useId } from 'react';
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeNameFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const nameFieldId = useId();

  const valueFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    console.log('filter ', evt.target.value);
    dispatch(changeNameFilter(evt.target.value));
  };

  return (
    <>
      <form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Find contacts by name
        </label>
        <input
          className={css.input}
          id={nameFieldId}
          type="text"
          value={valueFilter}
          name="username"
          onChange={handleFilter}
        />
      </form>
    </>
  );
}
