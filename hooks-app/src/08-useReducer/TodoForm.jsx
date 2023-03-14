import { useForm } from '../hooks/useForm';

export const TodoForm = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (description.length < 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="New todo"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-success mt-1">
                Add
            </button>
        </form>
    );
};
