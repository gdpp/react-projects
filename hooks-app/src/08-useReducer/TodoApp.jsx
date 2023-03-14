import { Fragment, useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useTodo } from '../hooks/useTodo';

// Components
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export const TodoApp = () => {
    const {
        todos,
        totalTodosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    } = useTodo();

    return (
        <Fragment>
            <h1>TodoApp ({totalTodosCount})</h1>
            <p>Pending: {pendingTodosCount}</p>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Add Todo</h4>
                    <hr />
                    <TodoForm onNewTodo={handleNewTodo} />
                </div>
            </div>
        </Fragment>
    );
};
