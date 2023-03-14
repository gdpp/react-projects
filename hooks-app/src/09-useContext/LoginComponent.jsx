import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginComponent = () => {
    const { hola, user } = useContext(UserContext);
    console.log(hola, user);

    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <pre>{JSON.stringify(user, null, 4)}</pre>
        </>
    );
};
