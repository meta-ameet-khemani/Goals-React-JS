import React from "react";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Like extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked
    };
  }
  
  toggle = () => this.setState({ liked: !this.state.liked });

  render() {
    return (
      <div>
        <center>
          <div onClick={() => this.toggle()}>
            {
              this.state.liked === true ? 
                (<FontAwesomeIcon icon={faThumbsUp} />) : 
                (<FontAwesomeIcon icon={faThumbsDown} />)
            }
          </div>
        </center>
      </div>
    );
  }
}

export default Like;