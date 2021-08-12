import React from "react";

class ClassModal extends React.Component {

    onCancel() {
        this.props.onCancel();
    }

    onConfirm() {
        this.props.onConfirm();
    }

    render() {
        return (
            <div className="modal">
                <p>Are you sure ?</p>
                <button className="btn btn--alt" onClick={() => this.onCancel()}>Cancel</button>
                <button className="btn" onClick={() => this.onConfirm()}>Confirm</button>
            </div>
        );
    }
}

export default ClassModal;