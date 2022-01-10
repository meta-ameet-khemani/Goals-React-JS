// like side effect in functional components

import { Component } from "react";
import UserContext from "../store/user-context";

class ComponentLifeCycle extends Component {

    static contextType = UserContext;

    constructor() {
        super();
        this.state = {
            items: [],
            searchedText: ''
        };
    }

    componentDidMount() {
        this.setState({ items: this.context.users });
    }

    getSearchedText(event) {
        this.setState({ searchedText: event.target.value });
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.searchedText !== this.state.searchedText) {
            const searchedItems = this.context.users.filter((item) => item.name.toLowerCase().includes(this.state.searchedText.toLowerCase()));
            if (searchedItems.length == 0) {
                throw new Error('Users should not be empty');
            }
            this.setState({ items: searchedItems });
        }
    }

    render() {
        return <div>
            <div>
                <label>Search</label>
                <input type='text' onChange={this.getSearchedText.bind(this)} />
            </div>
            <h2>List Of Users</h2>
            <ul>
                {
                    this.state.items.map((item) => {
                        return <li key={item.id}>
                            { item.name }
                        </li>
                    })
                }
            </ul>
        </div>
    }

}

export default ComponentLifeCycle;