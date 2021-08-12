import { Avatar } from '@material-ui/core';
import React from 'react';
import Like from './Like';

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { id: 0, author: { name: 'Frank', image: <Avatar src="images/img_avatar.png"></Avatar> }, authorName: 'Frank', title: 'OOP', description: 'Object Oriendted Programming Concepts', reaction: false },
                { id: 1, author: { name: 'Mann', image: <Avatar src="images/img_avatar.png"></Avatar> }, title: 'Modular Programming', description: 'Modular Programming Techniques', reaction: true },
                { id: 2, author: { name: 'John', image: <Avatar src="images/img_avatar.png"></Avatar> }, title: 'Fat Arrow Functions',  description: 'Article on Fat Arrow Functions', reaction: false },
                { id: 3, author: { name: 'Naina', image: <Avatar src="images/img_avatar.png"></Avatar> }, title: 'Regex',  description: 'Regular Expression', reaction: true },
                { id: 4, author: { name: 'Broose', image: <Avatar src="images/img_avatar.png"></Avatar> }, title: 'SEO',  description: 'Search Engine Optimisation', reaction: false },
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>
                                <b>Author</b>
                            </td>
                            <td>
                                <b>Description</b>
                            </td>
                            <td>
                                <b>Reaction</b>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.posts && this.state.posts.map(post =>
                            <tr key={post.id}>
                                <td>
                                    <div>
                                        <center>
                                            {post.author.image}
                                            <h4>
                                                {post.author.name}
                                            </h4>
                                        </center>
                                    </div>
                                </td>
                                <td>
                                    <div><b>{post.title}</b></div>
                                    <div>{post.description}</div>
                                </td>
                                <td>
                                    <div>
                                        <Like liked={post.reaction}></Like>
                                    </div>
                                </td>    
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Post;