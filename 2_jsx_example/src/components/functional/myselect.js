import MyOption from "./myoption";

function MySelect() {
    var myStyle = {
        border: '1px solid #999',
        display: 'inline-block',
        padding: '10px'
    };
    return (
        <center>
            <div style={myStyle}>
                Select any option
                <MyOption value="Jodhpur"></MyOption>
                <MyOption value="Jaipur"></MyOption>
                <MyOption value="Jaisalmer"></MyOption>
                <MyOption value="Pune"></MyOption>
            </div>
        </center>
    );
}

export default MySelect;