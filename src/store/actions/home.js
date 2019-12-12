import * as actionTypes from '../actions/actionTypes';

export const fetchHomeDataStart = () => {
  return {
    type: actionTypes.FETCH_HOME_DATA_START
  };
};

export const fetchHomeDataSuccess = data => {
  return {
    type: actionTypes.FETCH_HOME_DATA_SUCCESS,
    data
  };
};

export const fetchHomeDataFail = error => {
  return {
    type: actionTypes.FETCH_HOME_DATA_FAIL,
    error
  };
};

export const fetchHomeData = () => {
  return {
    type: actionTypes.FETCH_HOME_DATA
  };
};

export const sortData = id => {
  return {
    type: actionTypes.SORT_DATA,
    id
  };
};

export const filterData = searchInput => {
  return {
    type: actionTypes.FILTER_DATA,
    searchInput
  };
};
