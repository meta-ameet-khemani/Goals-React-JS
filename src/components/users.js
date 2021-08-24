import { Component } from "react";
import Avatar from "@material-ui/core/Avatar"

export default class Users extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        if (this.props.location.users !== undefined && this.props.location.users.length > 0) {
            return (
                <div>
                    <center>
                        <div>
                            <h2>
                                Users List
                            </h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        S.No
                                    </td>
                                    <td>
                                        Profile
                                    </td>
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        Age
                                    </td>
                                    <td>
                                        Email
                                    </td>
                                    <td>
                                        Contact No
                                    </td>
                                    <td>
                                        Address
                                    </td>
                                    <td>
                                        Gender
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.location.users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <span>{index + 1}</span>
                                            </td>
                                            <td>
                                                {user.image && <Avatar src={user.image.toString()} />}
                                            </td>
                                            <td>
                                                {user.name && <span>{user.name}</span>}
                                            </td>
                                            <td>
                                                {user.age && <span>{user.age}</span>}
                                            </td>
                                            <td>
                                                {user.email && <span>{user.email}</span>}
                                            </td>
                                            <td>
                                                {user.phone && <span>{user.phone}</span>}
                                            </td>
                                            <td>
                                                {user.address && <span>{user.address}</span>}
                                            </td>
                                            <td>
                                                {user.gender && <span>{user.gender}</span>}
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>
                    </center>
                </div>
            )
        } else {
            return (
                <div>
                    <center>
                        <h3>
                            No Data
                        </h3>
                        <button onClick={() => {
                            this.props.history.push({
                                pathname: '/',
                            });
                        }}>Add One</button>
                    </center>
                </div>
            )
        }
    }
}
