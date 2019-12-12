import React from 'react';

const Highlight = props => {
  const highlightQueryText = (text, filterValue) => {
    const reg = new RegExp(`(${filterValue})`, 'gi');
    const textParts = text.split(reg);
    return (
      <span>
        {textParts.map(part => (part.match(reg) ? <mark>{part}</mark> : part))}
      </span>
    );
  };

  return <>{highlightQueryText(props.string, props.searchInput)}</>;
};

export default Highlight;
