import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions';
import Spinner from '../../components/Spinner';
import Table from '../../components/Table';

const Home = props => {
  useEffect(() => {
    props.onFetchHomeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSort = (event, id) => {
    console.log(event.target, id);
    props.onSortData(id);
  };

  const handleFilter = event => {
    console.log(event.target.value);
    props.onFilterData(event.target.value);
  };

  if (props.loading) {
    return <Spinner />;
  }

  return (
    <main className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          id="search"
          onChange={handleFilter}
          value={props.searchInput}
        />
      </div>
      <div className="strategies">
        <Table
          data={
            props.searchInput && props.searchInput.length > 0
              ? props.searchResults
              : props.data
          }
          click={handleSort}
          searchInput={props.searchInput}
        />
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.home.loading,
    error: state.home.error,
    data: state.home.data,
    searchInput: state.home.searchInput,
    searchResults: state.home.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchHomeData: () => dispatch(actions.fetchHomeData()),
    onSortData: id => dispatch(actions.sortData(id)),
    onFilterData: searchInput => dispatch(actions.filterData(searchInput))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
