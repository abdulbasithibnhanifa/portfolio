import { Github, Linkedin, Mail } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-900 border-top border-secondary py-4">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col md="auto" className="text-center text-md-start mb-3 mb-md-0">
                        <small className="text-gray-400">
                            &copy; {currentYear} Abdul Basith. built with <span className="text-neon-blue">React</span> & <span className="text-neon-blue">Bootstrap</span>.
                        </small>
                    </Col>

                    <Col md="auto" className="d-flex justify-content-center gap-4">
                        <a href="https://github.com/abdulbasithibnhanifa" target="_blank" rel="noopener noreferrer" className="text-secondary hover-neon transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/abdul-basith-ibn-hanifa/" target="_blank" rel="noopener noreferrer" className="text-secondary hover-neon transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:abdulbasithibnhanifa@gmail.com" className="text-secondary hover-neon transition-colors">
                            <Mail size={20} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
