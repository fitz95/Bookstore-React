import { FcPlus } from 'react-icons/fc';
import './AddForm.css';

function AddForm() {
  return (
    <>
      <form className="form-container">
        <input type="text" placeholder="Add Author" className="input-text" />
        <br />
        <br />
        <input type="text" placeholder="Add Title" className="input-text" />
        <br />
        <br />
        <button className="input-submit" type="button">
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
