import { motion } from 'framer-motion';
import { ArrowRight, Download, Server, Shield, Database, Layout as LayoutIcon, GraduationCap } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../components/Button';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    const techStack = [
        { category: "Frontend", items: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap"], icon: <LayoutIcon size={24} className="text-neon-blue" /> },
        { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"], icon: <Server size={24} className="text-neon-purple" /> },
        { category: "Database", items: ["MongoDB", "SQL (Learning)"], icon: <Database size={24} className="text-neon-green" /> },
        { category: "Tools & DevOps", items: ["Git", "GitHub", "Docker (Learning)", "Azure (Learning)"], icon: <Shield size={24} className="text-white" /> }
    ];

    return (
        <div className="pb-5">
            {/* Hero Section */}
            <section className="min-vh-100 min-vh-lg-80 d-flex align-items-center py-3 py-lg-0 hero-desktop-spacing">
                <Container>
                    <Row className="align-items-center gy-4 gy-lg-5">
                        <Col lg={6} className="order-2 order-lg-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-neon-blue h5 mb-3 letter-spacing-wide fw-bold">ABDUL BASITH</h2>
                                <h1 className="display-3 display-lg-1 fw-bold mb-4 lh-1">
                                    Full-Stack <br />
                                    <span className="text-white">Developer.</span>
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-gray-400 lead fs-4 border-start border-4 border-info ps-4 mb-5"
                                style={{ borderColor: 'var(--neon-blue) !important', maxWidth: '600px' }}
                            >
                                Designing Secure and Scalable Full-Stack Applications with <span className="text-white fw-medium">Structured Backend Architecture</span>.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="d-flex gap-3 flex-wrap"
                            >
                                <Link to="/projects">
                                    <Button variant="glow" className="d-flex align-items-center gap-2 px-4 py-3 fs-5">
                                        View Projects <ArrowRight size={22} />
                                    </Button>
                                </Link>
                                <a href="/resume.pdf" download="abdulbasith_cv.pdf" className="text-decoration-none">
                                    <Button variant="primary" className="d-flex align-items-center gap-2 px-4 py-3 fs-5">
                                        Download Resume <Download size={22} />
                                    </Button>
                                </a>
                            </motion.div>
                        </Col>

                        <Col lg={6} className="order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="position-relative me-lg-5"
                            >
                                <div className="position-absolute w-100 h-100 bg-gradient-neon rounded-circle blur-3xl opacity-60"
                                    style={{ background: 'radial-gradient(circle, var(--neon-blue), var(--neon-purple))', filter: 'blur(100px)', transform: 'scale(1.2)' }}></div>
                                <div className="glass-card d-flex align-items-center justify-content-center position-relative overflow-hidden hero-image-container">
                                    <img src="src/assets/PF-pic-2.png" alt="profile-pic" className="w-100 h-100 object-fit-cover" />
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Tech Stack Section */}
            <section className="py-3 py-lg-5">
                <Container>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 mb-lg-5 d-flex align-items-center gap-2"
                    >
                        <span className="text-neon-blue">{'>'}</span> Technical Arsenal
                    </motion.h2>

                    <Row className="g-4">
                        {techStack.map((stack, index) => (
                            <Col md={6} lg={3} key={stack.category}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="h-100"
                                >
                                    <Card className="h-100">
                                        <div className="mb-4 bg-dark py-2 px-2 rounded-3 d-inline-flex align-items-center justify-content-center border border-secondary" style={{ width: '48px', height: '48px' }}>
                                            {stack.icon}
                                        </div>
                                        <h3 className="h5 fw-bold mb-3 text-white">{stack.category}</h3>
                                        <div className="d-flex flex-wrap gap-2">
                                            {stack.items.map(item => (
                                                <span key={item} className="badge bg-dark border border-secondary text-secondary fw-normal p-2">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Education Section (Moved from Resume) */}
            <section className="py-3 py-lg-5 bg-dark-800 border-top border-secondary">
                <Container>
                    <div className="d-flex align-items-center gap-3 mb-5">
                        <GraduationCap className="text-neon-green" size={24} />
                        <h2 className="h3 fw-bold text-white mb-0">Education</h2>
                    </div>
                    <ResumeItem
                        role="Bachelor of Computer Application"
                        company="Madurai Kamaraj University"
                        period="2018 - 2022"
                        description="Specialized in Software Engineering and Database Systems. Graduated with Honors."
                        delay={0.3}
                    />
                </Container>
            </section>
        </div>
    );
};

const ResumeItem = ({ role, company, period, description, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="ms-3 ps-4 border-start border-secondary position-relative"
    >
        <span className="position-absolute top-0 start-0 translate-middle rounded-circle bg-neon-blue" style={{ width: '12px', height: '12px', left: '-1px', marginTop: '10px' }} />
        <h3 className="h5 fw-bold text-white">{role}</h3>
        <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-neon-blue fw-medium">{company}</span>
            <span className="text-muted small">{period}</span>
        </div>
        <p className="text-gray-400 mb-0">{description}</p>
    </motion.div>
);

export default Home;
