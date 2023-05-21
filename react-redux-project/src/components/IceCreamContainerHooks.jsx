import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainerHooks = () => {
    const numOfIceCreams = useSelector(
        (state) => state.iceCream.numOfIceCreams
    );
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Ice Creams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>
                Buy Ice Cream
            </button>
        </div>
    );
};

export default IceCreamContainerHooks;
