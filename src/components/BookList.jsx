import { useSelector } from 'react-redux';
import BookUi from './BookUi';

/* eslint-disable react/prop-types */
function BookList() {
  const bookStore = useSelector((store) => store.bookstore.books);
  return (
    <ul>
      {bookStore.map((book) => (
        <BookUi key={book.item_id} bookId={book.item_id} author={book.author} title={book.title} />
      ))}
    </ul>
  );
}
export default BookList;
