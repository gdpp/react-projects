// function App() {
//     return <h1> Hello, World! </h1>;
// }

// export default App;

//import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

export const App = () => {
    return (
        <div>
            {/* <h1>App Component</h1>
            <FirstApp
                title="Hello, My name is Gustavo"
                subTitle="Course of React"
            /> */}
            <CounterApp value={0} />
        </div>
    );
};
