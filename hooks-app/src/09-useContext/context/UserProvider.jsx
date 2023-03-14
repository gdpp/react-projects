import { UserContext } from './UserContext';

const user = {
    id: 123,
    name: 'Gustavo Perez',
    email: 'gustavo@mail.com',
};

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'mundo', user: user }}>
            {children}
        </UserContext.Provider>
    );
};
