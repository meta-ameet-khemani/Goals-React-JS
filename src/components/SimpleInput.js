import { useState, useRef } from "react";

const SimpleInput = (props) => {

  const [name, updateName] = useState('');
  const [isNameEmpty, updateIsNameEmpty] = useState(true);
  const [isNameTouched, updateIsNameTouched] = useState(false);

  const inputRef = useRef();

  const inputNameHandler = event => updateName(event.target.value);

  const formSubmitHandler = event => {
    event.preventDefault();
    updateIsNameTouched(true);
    if (name.trim() === '') {
      return;
    }
    updateIsNameEmpty(false);
    
    console.log('Entered name: ', name);
    // REF IS GOOD WHEN WE JUST WANT TO GET THE INPUT, NOT FOR UPDATING VALUE LIKE RESETING IT
    console.log('Entered name: ', inputRef.current.value);

    // WE SHOULDN'T MANIPULATE DOM. IT'S THE JOB OF REACT
    // inputRef.current.value = '';

    // WE SHOULD RATHER DO
    // updateName('');
  }

  const isNameInvalid = isNameEmpty && isNameTouched;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={inputNameHandler} 
          ref={inputRef} 
        />
        {
          isNameInvalid && <p>Name must not be empty</p>
        }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
