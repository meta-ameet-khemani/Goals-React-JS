// Ref: Get complete dom. Useful when we need value from input filed (not to update it's again [which we normally do using state]).

// Forward ref: Forward ref is such thing where we need to accesss/execute child's method/data from parent. It's like, suppose we have a custom input component
//              and we want to focus on specific field, if it doesn't have validated data. So we will create a ref inside our custom component and then link it
//              from parent also. And now we will have access to that custom component.
	     
// 	            This is possible because, using ref we get the actual dom elemant. Be it in using normal ref, where we get entire dom element or in using it
//              in our custom component (which by react will be turned into element).

//              Note: We have to create that custom element with the help of React.forwarRef((props, ref) => {})

import { useRef, useState } from 'react';
import CustomInput from './CustomInput';

const UseImperativeHandle = () => {
    
    const emailRef = useRef();
    const passwordRef = useRef();

    const [email, updateEmail] = useState('');
    
    return <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(emailRef);
            emailRef.current.focus();
            console.log(passwordRef);
            console.log('email -> ', email);
        }}>
            <CustomInput label='Email' type='text' ref={emailRef} value={email} onChange={updateEmail} />
            {/* <CustomInput label='Password' type='text' ref={passwordRef} /> */}
            <input type='text' ref={passwordRef} />
            <button type="submit" >Login</button>
        </form>
    </div>
};

export default UseImperativeHandle;