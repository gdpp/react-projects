import { useState, useCallback } from 'react';

//Components
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback((value) => {
        setCounter((c) => c + value);
    }, []);

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    );
};
