import { useState } from 'react';
import './TodoApp.css';

// Components
import Todo from './Todo';

export const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();

        if (title === '') return;

        const newTask = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        };

        setTasks([newTask, ...tasks]);
        setTitle('');
    }

    function onChangeHandler({ target }) {
        setTitle(target.value);
    }

    function onUpdateHandler(id, value) {
        const temp = [...tasks];
        const item = temp.find((item) => item.id === id);

        item.title = value;

        setTasks(temp);
    }

    function onCompleteHandler(id) {
        const temp = tasks.filter((item) => item.id !== id);

        setTasks(temp);
    }
    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={onSubmitHandler}>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    className="todoInput"
                    value={title}
                />
                <input
                    onClick={onSubmitHandler}
                    type="submit"
                    value="Create Task"
                    className="buttonCreate"
                />
            </form>
            <div className="todosContainer">
                {tasks.map((item) => (
                    <Todo
                        key={item.id}
                        item={item}
                        onUpdate={onUpdateHandler}
                        onComplete={onCompleteHandler}
                    />
                ))}
            </div>
        </div>
    );
};
