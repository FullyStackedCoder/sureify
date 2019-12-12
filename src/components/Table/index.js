import React from 'react';

import Highlight from '../Highlight';

const Table = props => {
  const getTableHeaders = data => {
    if (data && data.columnHeaders && data.columnHeaders.length > 0) {
      return data.columnHeaders.map((columnHeader, index) => (
        <th
          key={index}
          onClick={
            columnHeader.sortable === 'true'
              ? event => props.click(event, columnHeader.id)
              : null
          }
        >
          {columnHeader.label}
        </th>
      ));
    }
    return <th>No data found...</th>;
  };

  const getTableRows = data => {
    if (data && data.rowData && data.rowData.length > 0) {
      return data.rowData.map((row, index) => {
        return (
          <tr key={index}>
            {row.data.map((singleRow, index) => (
              <td key={index} align="center">
                {props.searchInput && props.searchInput.length > 0 ? (
                  <Highlight
                    searchInput={props.searchInput}
                    string={singleRow.value}
                  />
                ) : (
                  singleRow.value
                )}
              </td>
            ))}
          </tr>
        );
      });
    }
    return (
      <tr>
        <td align="center">No data found...</td>
      </tr>
    );
  };

  return (
    <table className="table product-overview">
      <thead>
        <tr>{getTableHeaders(props.data)}</tr>
      </thead>

      <tbody>{getTableRows(props.data)}</tbody>
    </table>
  );
};

export default Table;
