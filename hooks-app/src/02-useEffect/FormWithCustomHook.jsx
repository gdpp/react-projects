import { Fragment } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm, username, email, password } =
        useForm({
            username: '',
            email: '',
            password: '',
        });

    return (
        <Fragment>
            <h1>Form With Custom Hook</h1>
            <hr />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2" onClick={onResetForm}>
                Reset
            </button>
        </Fragment>
    );
};
