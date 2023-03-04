import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AiFillCaretDown } from 'react-icons/ai';
import { addBook, addBooks, fetchBooks } from 'redux/books/bookSlice';
import '../css/AddForm.css';

function AddForm() {
  const [book, setBook] = useState({
    author: null,
    title: null,
    item_id: uuidv4(),
    category: '',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      item_id: uuidv4(),
    });
    dispatch(addBook(book));

    dispatch(addBooks(book));
    setTimeout(() => {
      dispatch(fetchBooks);
    }, 500);
    e.target.reset();
  };
  return (
    <div className="form">
      <hr className="form-line" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Author"
          className="input-author"
          name="author"
          required
          onChange={handleChange}
        />
        <br />
        {/* <input
          type="text"
          placeholder="Title"
          className="input-title"
          name="title"
          required
          onChange={handleChange}
        /> */}
        <div className="inputcat">
          <span className="input-span">Category</span>
          <AiFillCaretDown className="downicon" />
        </div>
        <br />
        <div className="input-submit" type="submit">
          <span className="addformspan">ADD BOOK</span>
        </div>
      </form>
    </div>
  );
}
export default AddForm;
