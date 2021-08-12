import React from "react";

class ClassBackdrop extends React.Component {
    render() {
        return(
            <div className="backdrop" onClick={this.props.onOuterClick}></div>
        );
    }
}

export default ClassBackdrop;