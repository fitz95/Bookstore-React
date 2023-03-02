import React from 'react';
import { useDispatch } from 'react-redux';
import { checkBookStatus } from 'redux/categories/categoriesSlice';

function BookCategory() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(checkBookStatus);
  }
  return (
    <div className="wrapper">
      <button type="button" onClick={handleClick}>
        Check Status
      </button>
    </div>
  );
}

export default BookCategory;
