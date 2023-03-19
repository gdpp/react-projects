import styles from './WheaterInfo.module.css';

export default function WheaterInfo({ wheater }) {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.city}>{wheater?.location.name}</div>
            <div className={styles.country}>{wheater?.location.country}</div>
            <div className={styles.row}>
                <div>
                    <img
                        src={`http:${wheater?.current.condition.icon}`}
                        alt="icon"
                        width="128"
                    />
                </div>
                <div className={styles.wheaterCondition}>
                    <div className={styles.condition}>
                        {wheater?.current.condition.text}
                    </div>
                    <div className={styles.current}>
                        {wheater?.current.temp_c}°
                    </div>
                </div>
            </div>
            <iframe
                title="map"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29770.671591325692!2d${wheater?.location.lon}89!3d${wheater?.location.lat}56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1679246427560!5m2!1ses-419!2smx`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
