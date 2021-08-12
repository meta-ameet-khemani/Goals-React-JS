import React from 'react';
import ClassModal from './ClassModal';
import ClassBackdrop from './ClassBackdrop';
import ClassTest from './ClassTest';

class ClassTodo extends React.Component {
    constructor(){
        super();
        this.state = {
            isModalOpen: false,
            count: 0
        };
    }

    deleteHandler() {
        this.setState({
            isModalOpen: true
        });
    }

    disableModal() {
        this.setState({
            isModalOpen: false
        });
    }

    incrementOne() {
        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state.count); })
        // console.log(this.state.count);
    }

    incrementFive() {
        // this.incrementOne();
        // this.incrementOne();
        // this.incrementOne();
        // this.incrementOne();
        // this.incrementOne();
        this.setState((previousState, props) => ({
            count: previousState.count + 5
        }), () => { console.log(this.state.count); })
    }
    
    render(){
        return(
            <div className="card">
                <h3>{this.props.title}</h3>
                <div className="actions">
                    <button className="btn" onClick={() => this.deleteHandler()}>Delete</button>
                </div>
                { this.state.isModalOpen && <ClassModal onCancel={() => this.disableModal()} onConfirm={() => this.disableModal()} /> }
                { this.state.isModalOpen && <ClassBackdrop onOuterClick={() => this.disableModal()} /> }
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>Counter - {this.state.count}</p>
                            </td>
                            <td>
                                <button onClick={() => this.incrementOne()}>Increment 1</button>
                            </td>
                            <td>
                                <button onClick={() => this.incrementFive()}>Increment 5</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ClassTest />
            </div>
        );
    }
}

export default ClassTodo;