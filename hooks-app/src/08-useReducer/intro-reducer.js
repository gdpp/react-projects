const initialState = [
    {
        id: 1,
        todo: 'Get The Soul Stone',
        done: false,
    },
];

const miFuncionDeTodoReducer = (state = initialState, action = {}) => {
    if (action.type === '[TODO] Add Todo') {
        return [...state, action.payload];
    }

    return state;
};

let todos = miFuncionDeTodoReducer();

const newTodo = {
    id: 2,
    todo: 'Get The Power Stone',
    done: false,
};

const addToDoAction = {
    type: '[TODO] Add Todo',
    payload: newTodo,
};

todos = miFuncionDeTodoReducer(todos, addToDoAction);

console.log(todos);
