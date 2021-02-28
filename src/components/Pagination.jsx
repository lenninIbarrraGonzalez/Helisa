import React from 'react';

const Pagination = (props) => {
  const { onLefClick, onRightClick, page, totalPage } = props;

  return (
    <div>
      <button onClick={onLefClick}>
        <div>-</div>
      </button>
      <div>
        {' '}
        {page} de {totalPage}
      </div>
      <button onClick={onRightClick}>
        <div>+</div>
      </button>
    </div>
  );
};

export default Pagination;
