import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
    const [ isModalOpen, setModal ] = useState(false);

    function deleteHandler() {
        setModal(true);
    }

    function disableModal() {
        setModal(false);
    }

    return(
        <div className="card">
            <h3>{props.title}</h3>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { isModalOpen && <Modal onCancel={disableModal} onConfirm={disableModal} /> }
            { isModalOpen && <Backdrop onOuterClick={disableModal} /> }
        </div>
    );
}

export default Todo;