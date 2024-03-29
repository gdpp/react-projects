//Components
import Navbar from './Navbar';

export default function Layout({ children }) {
    const containerStyle = {
        width: '90%',
        margin: '100px auto',
    };

    return (
        <div>
            <Navbar />
            <div style={containerStyle}>{children}</div>
        </div>
    );
}
