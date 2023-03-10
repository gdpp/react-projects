import PropTypes from 'prop-types';

const greet = () => {
    return 'Greet Message';
};

export const FirstApp = (props) => {
    // console.log(props);

    const newMessage = 'This is a message';

    return (
        <div>
            <h3>FirstApp</h3>
            <p>{newMessage}</p>
            <div>{greet()}</div>
            <code>{props.title}</code>
            <br />
            <code>{props.subTitle}</code>
        </div>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    title: 'No title',
    subTitle: 'No Subtitle',
};
