import { useState } from 'react';
import { useAppContext } from '../store/Store';
import { useNavigate } from 'react-router-dom';

// Components
import Layout from '../components/Layout';

export default function Create() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [intro, setIntro] = useState('');
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState('');

    const store = useAppContext();
    const navigate = useNavigate();

    const inputStyles = {
        formContainer: {
            width: '400px',
            margin: '0 auto',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            margin: '15px 0',
        },
        title: {
            fontSize: '16px',
            textAlign: 'left',
            color: 'white',
        },
        input: {
            padding: '10px',
            borderRadius: '5px',
            fontSize: '16px',
        },
    };

    const buttonStyle = {
        padding: '15px 20px',
        minWidth: '200px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#1e9638',
        color: 'white',
        fontWeigth: 'bolder',
        fontSize: '18px',
    };
    function handleChange({ target }) {
        const name = target.name;
        const value = target.value;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'author':
                setAuthor(value);
                break;
            case 'intro':
                setIntro(value);
                break;
            case 'completed':
                setCompleted(target.checked);
                break;
            case 'review':
                setReview(value);
                break;
            default:
        }
    }

    function handleUploadFile(event) {
        const element = event.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function () {
            setCover(reader.result.toString());
        };
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        };

        //Register book.
        store.createItem(newBook);
        navigate('/');
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Title</div>
                    <input
                        style={inputStyles.input}
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={title}
                    />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Author</div>
                    <input
                        style={inputStyles.input}
                        type="text"
                        name="author"
                        onChange={handleChange}
                        value={author}
                    />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Cover</div>
                    <input
                        style={inputStyles.input}
                        type="file"
                        name="cover"
                        onChange={handleUploadFile}
                    />
                    <div>
                        {!!cover ? (
                            <img
                                src={cover}
                                alt="cover book image"
                                width="200"
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Introduction</div>
                    <input
                        style={inputStyles.input}
                        type="text"
                        name="intro"
                        onChange={handleChange}
                        value={intro}
                    />
                </div>
                <div>
                    <div style={inputStyles.title}>Completed</div>
                    <input
                        type="checkbox"
                        name="completed"
                        onChange={handleChange}
                        value={completed}
                    />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Review</div>
                    <input
                        style={inputStyles.input}
                        type="text"
                        name="review"
                        onChange={handleChange}
                        value={review}
                    />
                </div>
                <input
                    style={buttonStyle}
                    type="submit"
                    value="Register Book"
                />
            </form>
        </Layout>
    );
}
