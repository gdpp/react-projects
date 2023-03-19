import { useState } from 'react';
import styles from './WheaterForm.module.css';

function WheaterForm({ onChangeCity }) {
    const [city, setCity] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();

        onChangeCity(city);
    }

    function onChangeHandler({ target }) {
        if (target.value === '') return;

        setCity(target.value);
    }
    return (
        <form className={styles.container} onSubmit={onSubmitHandler}>
            <input
                className={styles.input}
                type="text"
                onChange={onChangeHandler}
            />
        </form>
    );
}

export default WheaterForm;
