import { v4 as uuidv4 } from 'uuid';
import BookUi from './BookUi';
/* eslint-disable react/prop-types */
function BookList() {
  const bookArray = [{ title: 'GooseBumps', author: 'Theodore King' }];
  return (
    <ul>
      {bookArray.map((book) => (
        <BookUi title={book.title} author={book.author} key={uuidv4()} />
      ))}
    </ul>
  );
}
export default BookList;
