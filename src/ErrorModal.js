const ErrorModal = props => {
    const mystyle = {
        position: 'fixed',
        top: '40%',
        left: '20%',
        width: '25%',
        height: '40vh',
        zIndex: '10',
        background: 'rgb(192,192,192)',
        overflow: 'hidden'
    };

    return <div style={mystyle}>
        <p>Error Modal</p>
        <h3>{props.error.title}</h3>
        <p>{props.error.description}</p>
        <button>asdfsdf</button>
    </div>
};

export default ErrorModal;