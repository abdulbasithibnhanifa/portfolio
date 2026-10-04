import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100-dvh overflow-x-hidden">
            <Navbar />
            <main className="flex-grow-1 pt-1 px-3 px-md-5 container-fluid mx-auto" style={{ maxWidth: '1320px', marginTop: '4rem' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
