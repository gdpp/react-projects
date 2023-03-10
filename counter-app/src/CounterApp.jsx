import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    console.log('Render when state change');

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubtract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(value);
    };

    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+ 1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>- 1</button>
        </div>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 0,
};
