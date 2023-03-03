import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, removeBooks } from 'redux/books/bookSlice';
// eslint-disable-next-line react/prop-types
function BookUi({ bookId, title, author }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(remove(bookId));
    dispatch(removeBooks(bookId));
  };
  return (
    <li key={bookId}>
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
      <button type="button" className="btn" onClick={handleClick}>
        Remove
      </button>
    </li>
  );
}
export default BookUi;
