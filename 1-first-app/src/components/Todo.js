function Todo(props) {
    function deleteHandler() {
        console.log(props.title + ' clicked');
    }

    return(
        <div className="card">
            <h3>{props.title}</h3>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;