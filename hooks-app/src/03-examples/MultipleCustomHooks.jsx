import { useFetch, useCounter } from '../hooks';
import { Loader } from './Loader';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(10);

    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );

    const { quote, author } = !!data && data[0];

    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }

    return (
        <>
            <h1>Breaking Bad Qoutes</h1>
            <hr />
            {isLoading ? <Loader /> : <Quote quote={quote} author={author} />}
            <button
                className="btn btn-primary"
                onClick={() => increment()}
                disabled={isLoading}
            >
                Next Quote
            </button>
        </>
    );
};
