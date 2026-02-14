import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100-dvh bg-dark-900 text-light font-sans selection-neon overflow-x-hidden">
            <Navbar />
            <main className="flex-grow-1 pt-1 px-3 px-md-5 container-fluid mx-auto" style={{ maxWidth: '1320px', marginTop: '4rem' }}>
                {children}
            </main>
            <Footer />

            {/* Background Gradient Effect - Optimized */}
            <div className="position-fixed top-0 start-0 w-100 h-100 pe-none z-n1 bg-gradient-body" style={{ zIndex: -1 }}></div>
        </div>
    );
};

export default Layout;
