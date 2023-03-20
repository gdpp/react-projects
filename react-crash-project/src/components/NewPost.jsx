import { useState } from 'react';

import styles from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
    const [bodyValue, setBodyValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');

    function changeBodyHandler(event) {
        setBodyValue(event.target.value);
    }

    function changeAuthorHandler(event) {
        setAuthorValue(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: bodyValue,
            author: authorValue,
        };

        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea
                    id="body"
                    required
                    rows={3}
                    onChange={changeBodyHandler}
                />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={changeAuthorHandler}
                />
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;
