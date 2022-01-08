import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
    // Using context consumer to consume values

    // return <AuthContext.Consumer>
    //     {(ctx) => {
    //         return (
    //             <div>
    //                 { ctx.isLoggedIn && <button type="button" onClick={() => console.log('Users Clicked')}>Users</button> }
    //                 { ctx.isLoggedIn && <button type="button" onClick={() => console.log('Admin Clicked')}>Admin</button> }
    //                 { ctx.isLoggedIn && <button type="button" onClick={props.onLogout}>Logout</button> }
    //             </div>
    //         )
    //     }}
    // </AuthContext.Consumer>

    // Using context hook to consume values

    const ctx = useContext(AuthContext);

    return (
        <div>
            {ctx.isLoggedIn && <button type="button" onClick={() => console.log('Users Clicked')}>Users</button>}
            {ctx.isLoggedIn && <button type="button" onClick={() => console.log('Admin Clicked')}>Admin</button>}
            {ctx.isLoggedIn && <button type="button" onClick={ctx.onLogout}>Logout</button>}
        </div>
    );
}

export default Navigation;