import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  data: null,
  error: null,
  loading: false,
  searchInput: '',
  searchResults: null
};

const fetchHomeDataStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const fetchHomeDataSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    data: action.data
  });
};

const fetchHomeDataFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const sortData = (state, action) => {
  let dataCopy = Object.assign({}, state.data);
  dataCopy.rowData.sort(function(a, b) {
    for (let i = 0; i < a.data.length; i++) {
      if (a.data[i].id === action.id) {
        let valueA = a.data[i].value.toUpperCase();
        let valueB = b.data[i].value.toUpperCase();
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }

        return 0;
      }
    }
    return 0;
  });
  return updateObject(state, {
    data: dataCopy
  });
};

const filterData = (state, action) => {
  let dataCopy = Object.assign({}, state.data);
  // eslint-disable-next-line
  dataCopy.rowData = dataCopy.rowData.filter(singleRow => {
    if (
      // eslint-disable-next-line
      singleRow.data.filter(singleData => {
        if (singleData.value.includes(action.searchInput)) {
          return singleData;
        }
      }).length > 0
    ) {
      return singleRow;
    }
  });

  console.log(dataCopy);
  return updateObject(state, {
    searchInput: action.searchInput,
    searchResults: dataCopy
  });
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_DATA_START:
      return fetchHomeDataStart(state, action);
    case actionTypes.FETCH_HOME_DATA_SUCCESS:
      return fetchHomeDataSuccess(state, action);
    case actionTypes.FETCH_HOME_DATA_FAIL:
      return fetchHomeDataFail(state, action);
    case actionTypes.SORT_DATA:
      return sortData(state, action);
    case actionTypes.FILTER_DATA:
      return filterData(state, action);
    default:
      return state;
  }
};

export default homeReducer;
