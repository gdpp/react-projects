import { useState, Fragment } from 'react';

export const Counter = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <Fragment>
            <h1>Counter One: {counter1}</h1>
            <h1>Counter Two: {counter2}</h1>
            <h1>Counter Three: {counter3}</h1>
            <hr />
            <button
                className="btn btn-info"
                onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}
            >
                +1
            </button>
            <button
                className="btn btn-info"
                onClick={() => setCounter(state.counter1 - 1)}
            >
                -1
            </button>
        </Fragment>
    );
};
