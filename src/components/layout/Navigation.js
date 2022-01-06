const Navigation = props => {
    return <div>
        <button type="button" onClick={() => console.log('Users Clicked')}>Users</button>
        <button type="button" onClick={() => console.log('Admin Clicked')}>Admin</button>
        <button type="button" onClick={props.onLogout}>Logout</button>
    </div>
}

export default Navigation;