import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Shield, Server, AlertTriangle, Layers, Image as ImageIcon } from 'lucide-react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Button from '../components/Button';
import Card from '../components/Card';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div className="text-center py-5 h3">Project not found</div>;
    }

    return (
        <Container className="pt-5 pb-3 pb-lg-5">
            <SEO title={project.title} description={project.description} url={`/projects/${project.id}`} />
            <Link to="/projects" className="d-inline-flex align-items-center text-secondary text-decoration-none hover-neon mb-4">
                <ArrowLeft size={20} className="me-2" /> Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 gap-md-4 mb-4 mb-lg-5">
                    <div>
                        <h1 className="display-4 fw-bold mb-3 text-white">{project.title}</h1>
                        <p className="lead text-gray-400 mw-700">{project.overview}</p>
                    </div>
                    <div className="d-flex gap-3">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="d-flex align-items-center gap-2">
                                <Github size={18} /> Source Code
                            </Button>
                        </a>
                    </div>
                </div>

                <Row className="gy-4">
                    {/* Left Column: Technical Details */}
                    <Col lg={8}>
                        <div className="d-flex flex-column gap-4">
                            <Section title="Problem & Solution" icon={<Layers className="text-neon-blue" />}>
                                <div className="mb-4">
                                    <h4 className="text-white h6 fw-bold mb-2">The Problem</h4>
                                    <p className="text-gray-400">{project.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-white h6 fw-bold mb-2">The Solution</h4>
                                    <p className="text-gray-400">{project.solution}</p>
                                </div>
                            </Section>

                            {project.architecture && (
                                <Section title="Backend Architecture" icon={<Server className="text-neon-purple" />}>
                                    <p className="text-gray-400">{project.architecture}</p>
                                </Section>
                            )}

                            {project.security && project.security.length > 0 && (
                                <Section title="Security Implementation" icon={<Shield className="text-neon-green" />}>
                                    <Row xs={1} md={2} className="g-3">
                                        {project.security.map((item, i) => (
                                            <Col key={i} className="d-flex align-items-center text-gray-300">
                                                <span className="d-inline-block rounded-circle me-3" style={{ width: '8px', height: '8px', backgroundColor: 'var(--neon-green)' }} />
                                                {item}
                                            </Col>
                                        ))}
                                    </Row>
                                </Section>
                            )}

                            <Section title="Challenges & Fixes" icon={<AlertTriangle className="text-warning" />}>
                                <div className="bg-dark p-4 rounded-3 border-start border-4 border-warning">
                                    <p className="text-white fw-medium mb-2">Challenge: {project.challenges}</p>
                                    <p className="text-gray-400 small mb-0">Fix: {project.fix}</p>
                                </div>
                            </Section>


                        </div>
                    </Col>

                    {/* Right Column: Tech Stack & Info */}
                    <Col lg={4}>
                        <Card className="bg-transparent border border-secondary">
                            <h3 className="h5 fw-bold mb-4 text-white">Tech Stack</h3>
                            <div className="d-flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <Badge key={tech} bg="dark" className="border border-secondary text-neon-blue fw-normal p-2">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </Card>

                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="mt-4">
                                <h3 className="h5 fw-bold mb-3 text-white d-flex align-items-center gap-2">
                                    <ImageIcon className="text-neon-blue" size={20} /> Project Gallery
                                </h3>
                                <div className="d-flex flex-column gap-3">
                                    {project.screenshots.map((shot, index) => (
                                        <div key={index} className="rounded-3 overflow-hidden border border-secondary shadow-sm">
                                            <img src={shot} alt={`Screenshot ${index + 1}`} className="w-100 h-100 object-fit-cover" style={{ aspectRatio: '16/9' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
};

const Section = ({ title, icon, children }) => (
    <div className="border border-secondary rounded-3 p-4 bg-dark-800">
        <div className="d-flex align-items-center gap-3 mb-4 border-bottom border-dark pb-3">
            {icon}
            <h3 className="h5 fw-bold text-white mb-0">{title}</h3>
        </div>
        {children}
    </div>
);

export default ProjectDetails;
