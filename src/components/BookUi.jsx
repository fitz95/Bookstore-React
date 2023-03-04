import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, removeBooks } from 'redux/books/bookSlice';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/Book.css';

// eslint-disable-next-line react/prop-types
function BookUi({ bookId, title, author }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(remove(bookId));
    dispatch(removeBooks(bookId));
  };
  return (
    <div className="book-card">
      <div>
        <div key={bookId}>
          <span className="category">Action</span>
          <h4 className="book-title">{title}</h4>
          <span className="book-author">{author}</span>
          <div className="options">
            <span>Comments</span>
            <hr className="vertical" />
            <button type="button" className="remove-btn" onClick={handleClick}>
              Remove
            </button>
            <hr className="vertical" />
            <span>Edit</span>
          </div>
        </div>
      </div>
      <div className="percentage-flex">
        <div style={{ width: 100, height: 100 }}>
          <CircularProgressbar value={66} />
        </div>
        <div>
          <h2 className="Percent-Complete">64%</h2>
          <span className="completed">Completed</span>
        </div>
        <hr className="book-vertical" />
      </div>
      <div>
        <span className="Current-Chapter">CURRENT CHAPTER</span>
        <span className="Current-Lesson">Chapter 17</span>
        <div className="btn-div">
          <span className="Update-progress">UPDATE PROGRESS</span>
        </div>
      </div>
    </div>
  );
}
export default BookUi;
