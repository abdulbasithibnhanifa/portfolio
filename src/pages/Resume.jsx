import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code, ArrowUpRight } from 'lucide-react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Button from '../components/Button';
import Card from '../components/Card';

const Resume = () => {
    return (
        <Container fluid className="d-flex flex-column px-4 px-md-5 resume-container">
            <div className="row flex-grow-1 align-items-center h-100">
                {/* Left Side: Header & Button */}
                <div className="col-lg-4 d-flex flex-column justify-content-center align-items-start order-1 order-lg-1 mb-5 mb-lg-0 pt-5 pt-lg-0">
                    <div className="mb-4 mb-lg-5">
                        <h1 className="display-3 fw-bold text-white mb-2">Resume</h1>
                        <p className="text-gray-400 lead">Take a look at my professional journey.</p>
                    </div>

                    <a href="/resume.pdf" download="abdulbasith_cv.pdf" className="text-decoration-none mt-2 mt-lg-4">
                        <Button variant="glow" className="d-flex align-items-center gap-2 px-4 py-3">
                            <Download size={20} /> Download PDF
                        </Button>
                    </a>
                </div>

                {/* Right Side: Preview Image */}
                <div className="col-lg-8 h-100 d-flex align-items-center justify-content-center order-2 order-lg-2 py-4">
                    <div className="position-relative resume-preview-container">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="d-block h-100 position-relative group shadow-2xl rounded-4 overflow-hidden border border-secondary">
                            <img
                                src="/resume-view.jpg"
                                alt="Resume Preview"
                                className="resume-preview-image bg-dark-800"
                            />
                            <div className="position-absolute inset-0 d-flex align-items-center justify-content-center bg-dark-900 bg-opacity-60 opacity-0 group-hover-opacity-100 transition-all w-100 h-100">
                                <div className="bg-dark p-3 rounded-pill d-flex align-items-center gap-2 shadow-glow border border-secondary">
                                    <span className="text-white fw-bold">Open Full PDF</span>
                                    <ArrowUpRight className="text-neon-blue" size={20} />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

// Removed ResumeItem component as it's no longer used here (moved logic to Home.jsx)

export default Resume;
