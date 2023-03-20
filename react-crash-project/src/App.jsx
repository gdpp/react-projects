import { useState } from 'react';

// Components
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
    const [modalVisible, setModalVisible] = useState(false);

    function showModalHandler() {
        setModalVisible(true);
    }

    function hideModalHandler() {
        setModalVisible(false);
    }

    return (
        <>
            <MainHeader onCreatePost={showModalHandler} />
            <main>
                <PostsList
                    isPosting={modalVisible}
                    hideModalHandler={hideModalHandler}
                />
            </main>
        </>
    );
}

export default App;
