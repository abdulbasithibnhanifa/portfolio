import { motion } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Card from '../components/Card';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <Container className="pt-5 pb-3 pb-lg-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 mb-lg-5"
            >
                <h1 className="display-4 fw-bold mb-3">Featured Projects</h1>
                <p className="text-gray-400 lead mw-700">
                    A selection of projects highlighting my focus on <span className="text-neon-blue">backend architecture</span>, <span className="text-neon-purple">security</span>, and <span className="text-neon-green">scalability</span>.
                </p>
            </motion.div>

            {/* Technical Skills Section (Moved from Resume) */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 mb-lg-5"
            >
                <div className="d-flex align-items-center gap-3 mb-4">
                    <Code className="text-neon-purple" size={24} />
                    <h2 className="h3 fw-bold text-white mb-0">Technical Skills</h2>
                </div>
                <Row className="g-4 mb-5">
                    <Col md={6}>
                        <Card hover={false} className="h-100 bg-dark-800 border-secondary">
                            <h3 className="h5 fw-semibold mb-3 text-neon-blue">Frontend</h3>
                            <div className="d-flex flex-wrap gap-2">
                                {["React.js", "Bootstrap", "Framer Motion", "HTML5", "CSS3", "JavaScript (ES6+)"].map(skill => (
                                    <Badge key={skill} bg="dark" className="border border-secondary text-light fw-normal p-2">{skill}</Badge>
                                ))}
                            </div>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card hover={false} className="h-100 bg-dark-800 border-secondary">
                            <h3 className="h5 fw-semibold mb-3 text-neon-purple">Backend</h3>
                            <div className="d-flex flex-wrap gap-2">
                                {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"].map(skill => (
                                    <Badge key={skill} bg="dark" className="border border-secondary text-light fw-normal p-2">{skill}</Badge>
                                ))}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </motion.section>



            <Row className="g-4">
                {projects.map((project, index) => (
                    <Col md={6} lg={4} key={project.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-100"
                        >
                            <Link to={`/projects/${project.id}`} className="text-decoration-none">
                                <Card className="h-100 d-flex flex-column justify-content-between group-hover-border">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <h3 className="h4 fw-bold text-white mb-0 btn-link">{project.title}</h3>
                                            <ArrowUpRight className="text-secondary" />
                                        </div>
                                        <p className="text-gray-400 mb-4 small">{project.description}</p>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2 mt-auto">
                                        {project.techStack.slice(0, 3).map(tech => (
                                            <span key={tech} className="badge bg-dark border border-secondary text-neon-blue fw-normal">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="badge bg-transparent text-secondary border border-secondary">+{project.techStack.length - 3}</span>
                                        )}
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;
