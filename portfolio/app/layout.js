import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
    return (
        <html>
            <body>

                {children}
            </body>
        </html>
    );
};

export default Layout;