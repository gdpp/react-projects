import { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Components
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    //Custom Hook
    const { images, isLoading } = useFetchGifs(category);

    return (
        <Fragment>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
                {images.map((image) => {
                    return <GifItem key={image.id} {...image} />;
                })}
            </div>
        </Fragment>
    );
};
