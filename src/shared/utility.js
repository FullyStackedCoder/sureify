export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const getData = () => {
  return {
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
};
