function Backdrop(props) {
    return (
        <div className="backdrop" onClick={props.onOuterClick}></div>
    );
}

export default Backdrop;