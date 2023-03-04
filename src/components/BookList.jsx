import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from 'redux/books/bookSlice';
import BookUi from './BookUi';

/* eslint-disable react/prop-types */
function BookList() {
  const dispatch = useDispatch();
  useEffect(() => {
    let active = true;
    (async () => {
      if (active) {
        dispatch(fetchBooks());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch]);
  const bookStore = useSelector((store) => store.bookstore.books);
  return (
    <div>
      {bookStore.map((book) => (
        <BookUi
          key={book.id}
          id={book.id}
          bookId={book.id}
          author={book.author}
          title={book.title}
        />
      ))}
    </div>
  );
}
export default BookList;
