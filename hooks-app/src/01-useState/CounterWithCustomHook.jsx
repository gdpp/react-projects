import { Fragment } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(10);

    return (
        <Fragment>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(5)}>
                +1
            </button>
            <button className="btn btn-primary" onClick={reset}>
                Reset
            </button>
            <button className="btn btn-primary" onClick={() => decrement(5)}>
                -1
            </button>
        </Fragment>
    );
};
