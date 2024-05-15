import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initStateContacts = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initStateContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(info) {
        return {
          payload: {
            info,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const indexDelate = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(indexDelate, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
