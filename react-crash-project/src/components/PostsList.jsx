import { useState } from 'react';
import styles from './PostsList.module.css';

// Components
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

function PostsList({ isPosting, hideModalHandler }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPost) => [postData, ...existingPost]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onCancel={hideModalHandler}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.body}
                            author={post.author}
                            body={post.body}
                        />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are not posts yet!</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;
