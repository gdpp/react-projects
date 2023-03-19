import { useState, useEffect } from 'react';
import styles from './WheaterApp.module.css';

// Components
import WheaterForm from './WheaterForm';
import WheaterInfo from './WheaterInfo';
import Loader from './Loader';

function WheaterApp() {
    const [wheater, setWheater] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Wheater | ${wheater?.location.name ?? ''}`;
    }, [wheater]);

    async function loadInfo(city = 'tokyo') {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_URL}&key=${
                    import.meta.env.VITE_APP_KEY
                }&q=${city}`
            );

            const json = await response.json();

            setTimeout(() => {
                setWheater(json);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    function onChangeCityHandler(city) {
        setWheater(null);
        loadInfo(city);
    }

    return (
        <div className={styles.wheaterContainer}>
            <WheaterForm onChangeCity={onChangeCityHandler} />
            {wheater ? <WheaterInfo wheater={wheater} /> : <Loader />}
        </div>
    );
}

export default WheaterApp;
