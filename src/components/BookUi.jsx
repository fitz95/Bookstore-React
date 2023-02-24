// eslint-disable-next-line react/prop-types
function BookUi({ title, author }) {
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
      <button type="button">Remove</button>
    </li>
  );
}
export default BookUi;
