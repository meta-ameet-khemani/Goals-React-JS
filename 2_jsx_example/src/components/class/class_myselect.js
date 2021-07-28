import React from "react";
import ClassMyOption from "./class_myoption";

class ClassMySelect extends React.Component {
    render() {
        var myStyle = {
            border: '1px solid #999',
            display: 'inline-block',
            padding: '10px'
        };
        return (
            <center>
                <div style={myStyle}>
                    Select any option
                    <ClassMyOption value="Jodhpur"></ClassMyOption>
                    <ClassMyOption value="Jaipur"></ClassMyOption>
                    <ClassMyOption value="Jaisalmer"></ClassMyOption>
                    <ClassMyOption value="Pune"></ClassMyOption>
                </div>
            </center>
        );
    }
}

export default ClassMySelect;