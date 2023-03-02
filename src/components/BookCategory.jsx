import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from 'redux/categories/categoriesSlice';

function BookCategory() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.categories);
  function handleClick() {
    dispatch(checkBookStatus());
  }
  return (
    <div className="wrapper">
      <button type="button" onClick={handleClick}>
        Check Status
      </button>
      <p>{status}</p>
    </div>
  );
}

export default BookCategory;
