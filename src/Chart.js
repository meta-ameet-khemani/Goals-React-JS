const Chart = props => {

    let totalExpended = 0;
    const chartData = [
        { label: 'Jan', value: 0, perc: 0 },
        { label: 'Feb', value: 0, perc: 0 },
        { label: 'Mar', value: 0, perc: 0 },
        { label: 'Apr', value: 0, perc: 0 },
        { label: 'May', value: 0, perc: 0 },
        { label: 'Jun', value: 0, perc: 0 },
        { label: 'Jul', value: 0, perc: 0 },
        { label: 'Aug', value: 0, perc: 0 },
        { label: 'Sep', value: 0, perc: 0 },
        { label: 'Oct', value: 0, perc: 0 },
        { label: 'Nov', value: 0, perc: 0 },
        { label: 'Dec', value: 0, perc: 0 }
    ];

    props.expenses.forEach((expense, index) => {
        chartData[expense.date.getMonth()].value += expense.amount;
        totalExpended += expense.amount;
    });

    const maxValue = Math.max(...chartData.map(cd => cd.value));
    
    chartData.forEach((cd) => {
        cd.perc = Math.round((cd.value / maxValue) * 100);
    });

    return <div>
        <p>Chart</p>
        { chartData.map((cd, index) => {
            return <div key={index}>
                <div>
                    {cd.label} - {cd.value} - {cd.perc} %
                </div>
            </div>
        }) }
        <div>
            Total spent : {totalExpended}
        </div>
    </div>
};

export default Chart;