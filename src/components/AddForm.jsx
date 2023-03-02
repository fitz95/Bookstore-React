import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { FcPlus } from 'react-icons/fc';
import { addBook } from 'redux/books/bookSlice';
import './AddForm.css';

function AddForm() {
  const [user, setUser] = useState({
    author: null,
    title: null,
    item_id: uuidv4(),
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user, item_id: uuidv4(),
    });
    dispatch(addBook(user));
    e.target.reset();
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Author"
          className="input-text"
          name="author"
          required
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Add Title"
          className="input-text"
          name="title"
          required
          onChange={handleChange}
        />
        <br />
        <button className="input-submit" type="submit">
          <FcPlus
            style={{
              fontSize: '20px',
              marginTop: '2px',
            }}
          />
        </button>
      </form>
    </>
  );
}
export default AddForm;
