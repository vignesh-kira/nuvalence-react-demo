import addressBookReducer from './addressBookSlice';

describe('Address Book Reducer', () => {
  const initialState = {
    usersList: [],
    pageSize: 5,
    currentPage: 1,
    fetchUsersListStatus: null
  };
  it('should handle initial state', () => {
    expect(addressBookReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

});
