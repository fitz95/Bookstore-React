import { FcPlus } from 'react-icons/fc';
import './AddForm.css'

const InputBook = () => {

    return (
      <>
        <form className="form-container">
          <input
            type="text"
            placeholder="Add Author"
            className="input-text"
          />
           <input
            type="text"
            placeholder="Add Title"
            className="input-text"
          />
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
  };
  export default InputBook;