import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../store/Store';

// Components
import Layout from '../components/Layout';

export default function View() {
    const [item, setItem] = useState(null);
    const params = useParams();
    const store = useAppContext();

    const itemStyles = {
        container: {
            display: 'flex',
            gap: '20px',
            color: 'white',
            width: '800px',
            margin: '0 auto',
        },
    };

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);

    if (!item) {
        return <Layout>Item Not Found!</Layout>;
    }

    return (
        <Layout>
            <div style={itemStyles.container}>
                <div>
                    {item?.cover ? <img src={item?.cover} width="400" /> : ''}
                </div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? 'READ' : 'IN PROGRESS'}</div>
                    <div>{item?.review}</div>
                </div>
            </div>
        </Layout>
    );
}
