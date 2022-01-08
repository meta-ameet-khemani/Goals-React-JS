import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Home = () => {
    const ctx = useContext(AuthContext);
    return <div>
        Home page
        <button type="button" onClick={ctx.onLogout} >Logout</button>
    </div>
}

export default Home;