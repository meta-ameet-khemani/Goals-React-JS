let expenses = [
    {
        id: 1,
        title: 'First',
        amount: 340,
        date: new Date(2020, 7, 14)
    },
    {
        id: 2,
        title: 'Second',
        amount: 340,
        date: new Date(2021, 11, 25)
    },
    {
        id: 3,
        title: 'Third',
        amount: 4000,
        date: new Date(2021, 10, 30)
    },
    {
        id: 4,
        title: 'Fourth',
        amount: 40,
        date: new Date(2022, 1, 2)
    },
    {
        id: 5,
        title: 'Fifth',
        amount: 500,
        date: new Date(2019, 0, 1)
    },
];

const tempData = () => {
    return expenses;
}

const addData = data => expenses.push(data);

export default tempData;
export {
    addData
};