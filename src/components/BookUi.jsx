function BookUi({ title, author }) {
  return (
    <li>
      <span>Title:`{title}`</span>
      <span>Author: {author}</span>
      <button>Remove</button>
    </li>
  );
}
export default BookUi;
