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

            {/* Background Gradient Effect - Custom CSS needed as Bootstrap doesn't have this out of the box */}
            <div className="position-fixed top-0 start-0 w-100 h-100 pe-none z-n1 overflow-hidden" style={{ zIndex: -1 }}>
                <div className="position-absolute bg-neon-blue opacity-10 rounded-circle blur-xl" style={{ top: '-10%', left: '-10%', width: '40%', height: '40%', filter: 'blur(100px)' }} />
                <div className="position-absolute bg-neon-purple opacity-10 rounded-circle blur-xl" style={{ bottom: '-10%', right: '-10%', width: '40%', height: '40%', filter: 'blur(100px)' }} />
            </div>
        </div>
    );
};

export default Layout;
