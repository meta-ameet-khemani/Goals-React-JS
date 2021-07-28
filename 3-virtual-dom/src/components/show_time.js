function showTime() {
    var seconds = setInterval(new Date().toLocaleString(), 1000);
    return (
        <div>
            <center>
                <h1>
                    {seconds}
                </h1>
            </center>
        </div>
    );
}

export default showTime;