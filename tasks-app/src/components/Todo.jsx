import { useState } from 'react';

function Todo({ item, onUpdate, onComplete }) {
    const [isEdit, setIsEdit] = useState(false);

    // Component
    function FormEdit() {
        const [newValue, setNewValue] = useState(item.title);

        function handlerSubmit(event) {
            event.preventDefault();
        }

        function handlerChange({ target }) {
            const value = target.value;
            setNewValue(value);
        }

        function handlerClick() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className="todoUpdateForm" onSubmit={handlerSubmit}>
                <input
                    type="text"
                    className="taskInput"
                    onChange={handlerChange}
                    value={newValue}
                />
                <button className="button" onClick={handlerClick}>
                    Update
                </button>
            </form>
        );
    }

    //Component
    function TodoElement() {
        return (
            <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>
                <button className="button" onClick={() => setIsEdit(true)}>
                    Edit
                </button>
                <button
                    className="buttonComplete"
                    onClick={(event) => onComplete(item.id)}
                >
                    Complete
                </button>
            </div>
        );
    }

    return (
        <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>
    );
}

export default Todo;
