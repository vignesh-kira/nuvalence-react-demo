import addressDetailsReducer, { setSelectedAddress } from './addressDetailsSlice';

describe('Address Details Reducer', () => {
  const initialState = {
    selectedAddress: {}
  };

  const userAddress = {
    name: {
      first: 'Jack',
      title: 'Mr',
      last: 'Sparrow'
    },
    location: {
      city: 'NY',
      country: 'USA',
      postcode: 'Random',
      state: 'NY',
      street: 'Baker Street',
    }
  }

  it('should handle initial state', () => {
    expect(addressDetailsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setSelectedAddress', () => {
    const actual = addressDetailsReducer(initialState, setSelectedAddress(userAddress));
    expect(actual.selectedAddress).toEqual(userAddress);
  });
});
