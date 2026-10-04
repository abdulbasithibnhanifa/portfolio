import { Github, Linkedin, Mail } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-elevated py-4 border-top" style={{ borderColor: 'var(--border-subtle)' }}>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col md="auto" className="text-center text-md-start mb-3 mb-md-0">
                        <small className="text-secondary fw-medium font-editorial">
                            &copy; {currentYear} Abdul Basith. Portfolio.
                        </small>
                    </Col>

                    <Col md="auto" className="d-flex justify-content-center gap-4">
                        <a href="https://github.com/abdulbasithibnhanifa" target="_blank" rel="noopener noreferrer" className="text-secondary transition-colors" style={{ transition: 'color 0.2s' }}>
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/abdul-basith-ibn-hanifa/" target="_blank" rel="noopener noreferrer" className="text-secondary transition-colors" style={{ transition: 'color 0.2s' }}>
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:abdulbasithibnhanifa@gmail.com" className="text-secondary transition-colors" style={{ transition: 'color 0.2s' }}>
                            <Mail size={20} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
