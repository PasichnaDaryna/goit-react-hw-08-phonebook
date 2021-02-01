import { createSelector } from '@reduxjs/toolkit';
export const getAllContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
const getLoader = state => state.contacts.loading;

const getTotalContacts = state => {
  const todos = getAllContacts(state);
  return todos.length;
};

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactSelectors = {
  getAllContacts,
  getFilter,
  getLoader,
  getVisibleContacts,
  getTotalContacts,
};
export default contactSelectors;
