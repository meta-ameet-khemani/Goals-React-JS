const TODO_LIST = [
    {
        "id": 1,
        "title": "React Hooks",
        "created_at": (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()) + ' ' + (new Date().getHours()) + ':' + (new Date().getMinutes()) + ':' + (new Date().getSeconds()),
        "completed": false,
    },
    {
        "id": 2,
        "title": "Flutter Practice",
        "created_at": (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()) + ' ' + (new Date().getHours()) + ':' + (new Date().getMinutes()) + ':' + (new Date().getSeconds()),
        "completed": true,
    },
    {
        "id": 3,
        "title": "Flutter App Demo",
        "created_at": (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()) + ' ' + (new Date().getHours()) + ':' + (new Date().getMinutes()) + ':' + (new Date().getSeconds()),
        "completed": false,
    }
];

export function getTodoData() {
    return TODO_LIST;
}

export function addTodo(todo) {
    console.log(todo);
    TODO_LIST.push({
        "id": TODO_LIST.length + 1,
        "title": todo.title,
        "created_at": todo.created_at,// (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()) + ' ' + (new Date().getHours()) + ':' + (new Date().getMinutes()) + ':' + (new Date().getSeconds()),
        "completed": false,
    });
    console.log(TODO_LIST.length);
}