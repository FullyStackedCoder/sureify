import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Home from '../containers/Home';
import '../setupTests';

describe('<Home />', () => {
  it('should render the Home page <Home /> correctly', () => {
    const mockStore = configureStore();
    const store = mockStore({
      home: { data: fakeData, error: null, loading: false }
    });
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
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
