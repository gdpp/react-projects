import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    incrementByAmount,
} from './store/slices/counter/counterSlice';

import './App.css';

function App() {
    const { counter } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>count is {counter}</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>
                    +5
                </button>
            </div>
        </div>
    );
}

export default App;
