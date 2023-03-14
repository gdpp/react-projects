import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const totalTodosCount = todos.length;
    const pendingTodosCount = todos.filter((todo) => !todo.done).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        if (!todo) {
            return;
        }

        const action = {
            type: 'ADD',
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE',
            payload: id,
        });
    };

    return {
        todos,
        totalTodosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };
};
