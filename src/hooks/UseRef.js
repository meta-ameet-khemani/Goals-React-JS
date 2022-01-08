// useRef hook is usefull when we just want to get input or get complete dom element
// we should not update the state using it like [ emailRef.current.value = ''; ] is
// not a good thing. Though we can do this, but it is not responsible to update the 
// state as we have useState hook for exactly this job.

import { useRef } from 'react';

const UseRef = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const loginHanlder = (e) => {
        e.preventDefault();
        // console.log(emailRef);
        // console.log(passwordRef);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    };

    return <div>
        <form onSubmit={loginHanlder}>
            <div>
                <label>Email</label>
                <input type='text' ref={emailRef} />
            </div>
            <div>
                <label>Password</label>
                <input type='text' ref={passwordRef} />
            </div>
            <button type="submit" >Login</button>
        </form>
    </div>
};

export default UseRef;