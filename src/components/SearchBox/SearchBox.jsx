import { useId } from 'react';
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

export default function SearchBox() {
  const nameFieldId = useId();

  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

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
          value={value}
          name="username"
          onChange={evt => dispatch(changeFilter(evt.target.value))}
        />
      </form>
    </>
  );
}
