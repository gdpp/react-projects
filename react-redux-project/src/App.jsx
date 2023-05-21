import { Provider } from 'react-redux';
import store from './redux/store';

//components
// import CakeContainer from './components/CakeContainer';
import CakeContainerHooks from './components/CakeContainerHooks';
import IceCreamContainerHooks from './components/IceCreamContainerHooks';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app-container">
                <CakeContainerHooks />
                <IceCreamContainerHooks />
            </div>
        </Provider>
    );
};

export default App;
