const Home = props => {
    return <div>
        Home page
        <button type="button" onClick={props.onLogout} >Logout</button>
    </div>
}

export default Home;