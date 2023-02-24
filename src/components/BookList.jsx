import BookUi from './BookUi';
import { v4 as uuidv4 } from 'uuid';
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
