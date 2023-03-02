import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/books/bookSlice';
// eslint-disable-next-line react/prop-types
function BookUi({ bookId, title, author }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>
        Title:
        {title}
      </span>
      <br />
      <br />
      <span>
        Author:
        {author}
      </span>
      <button
        type="button"
        className="btn"
        onClick={() => {
          dispatch(remove(bookId));
        }}
      >
        Remove
      </button>
    </li>
  );
}
export default BookUi;
