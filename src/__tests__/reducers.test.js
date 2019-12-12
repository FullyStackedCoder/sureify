import * as actionTypes from '../store/actions/actionTypes';
import { updateObject } from '../shared/utility';

import homeReducer from '../store/reducers/home';

describe('Home Reducer', () => {
  const initialState = {
    data: null,
    error: null,
    loading: false,
    searchInput: '',
    searchResults: null
  };
  it('should return initial state', () => {
    expect(homeReducer(initialState, {})).toEqual(initialState);
  });
  it('should process FETCH_HOME_DATA_START action', () => {
    expect(
      homeReducer(initialState, { type: actionTypes.FETCH_HOME_DATA_START })
    ).toEqual(
      updateObject(initialState, {
        error: null,
        loading: true
      })
    );
  });
  it('should process FETCH_HOME_DATA_SUCCESS action', () => {
    expect(
      homeReducer(initialState, {
        type: actionTypes.FETCH_HOME_DATA_SUCCESS,
        data: fakeData
      })
    ).toEqual(
      updateObject(initialState, {
        error: null,
        loading: false,
        data: fakeData
      })
    );
  });
  it('should process FETCH_HOME_DATA_FAIL action', () => {
    expect(
      homeReducer(initialState, {
        type: actionTypes.FETCH_HOME_DATA_FAIL,
        error: 'error message'
      })
    ).toEqual(
      updateObject(initialState, {
        error: 'error message',
        loading: false
      })
    );
  });
});

const fakeData = {
  columnHeaders: [
    {
      id: 'firstName',
      label: 'First Name',
      sortable: 'true',
      filterable: 'true'
    },
    {
      id: 'lastName',
      label: 'Last Name',
      sortable: 'true',
      filterable: 'true'
    },
    {
      id: 'dateOfBirth',
      label: 'Date of Birth',
      sortable: 'false',
      filterable: 'true'
    },
    {
      id: 'designation',
      label: 'Designation',
      sortable: 'true',
      filterable: 'true'
    },
    {
      id: 'department',
      label: 'Department',
      sortable: 'true',
      filterable: 'true'
    }
  ],
  rowData: [
    {
      id: 'user_id_1',
      data: [
        {
          id: 'firstName',
          value: 'John'
        },
        {
          id: 'lastName',
          value: 'Smith'
        },
        {
          id: 'dateOfBirth',
          value: '07-11-1992'
        },
        {
          id: 'designation',
          value: 'Software Engineer'
        },
        {
          id: 'department',
          value: 'Web'
        }
      ]
    },
    {
      id: 'user_id_2',
      data: [
        {
          id: 'firstName',
          value: 'Jane'
        },
        {
          id: 'lastName',
          value: 'Doe'
        },
        {
          id: 'dateOfBirth',
          value: '07-11-1995'
        },
        {
          id: 'designation',
          value: 'Intern'
        },
        {
          id: 'department',
          value: 'Mobile'
        }
      ]
    }
  ]
};
