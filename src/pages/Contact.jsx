import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.location.href = `mailto:abdulbasithibnhanifa@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <Container className="pt-5 pb-3 pb-lg-5" style={{ maxWidth: '1000px' }}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="display-4 fw-bold text-center mb-4 mb-lg-5"
            >
                Get In <span className="text-neon-blue">Touch</span>
            </motion.h1>

            <Row className="gy-4 gy-md-5">
                {/* Contact Info */}
                <Col md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="d-flex flex-column gap-4"
                    >
                        <div>
                            <h2 className="h3 fw-bold text-white mb-3">Let's Discuss Your Project</h2>
                            <p className="text-gray-400 lead">
                                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            <ContactItem icon={<Mail className="text-neon-blue" />} label="Email" value="abdulbasithibnhanifa@gmail.com" href="mailto:abdulbasithibnhanifa@gmail.com" />
                            <ContactItem icon={<Phone className="text-neon-purple" />} label="Phone" value="8778685195" href="tel:8778685195" />
                            <ContactItem icon={<Linkedin className="text-primary" />} label="LinkedIn" value="linkedin.com/in/abdul-basith-ibn-hanifa" href="https://www.linkedin.com/in/abdul-basith-ibn-hanifa/" target="_blank" />
                            <ContactItem icon={<Github className="text-white" />} label="GitHub" value="github.com/abdulbasithibnhanifa" href="https://github.com/abdulbasithibnhanifa" target="_blank" />
                        </div>
                    </motion.div>
                </Col>

                {/* Contact Form */}
                <Col md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="bg-dark-800 border-secondary">
                            <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                                <Form.Group>
                                    <Form.Label className="text-gray-400 fw-medium">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="bg-dark border-secondary text-white focus-neon"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="text-gray-400 fw-medium">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="bg-dark border-secondary text-white focus-neon"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="text-gray-400 fw-medium">Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        className="bg-dark border-secondary text-white focus-neon"
                                        style={{ resize: 'none' }}
                                    />
                                </Form.Group>
                                <Button variant="glow" type="submit" className="w-100 d-flex justify-content-center align-items-center gap-2 py-3 mt-2">
                                    <Send size={18} /> Send Message
                                </Button>
                            </Form>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

const ContactItem = ({ icon, label, value, href, target }) => (
    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className="d-flex align-items-center gap-3 text-decoration-none group p-3 rounded-3 hover-bg-dark-800 transition-colors">
        <div className="d-flex align-items-center justify-content-center rounded-circle border border-secondary" style={{ width: '48px', height: '48px', minWidth: '48px' }}>
            {icon}
        </div>
        <div>
            <p className="text-gray-400 small mb-0">{label}</p>
            <p className="text-white fw-medium mb-0 hover-text-neon transition-colors">{value}</p>
        </div>
    </a>
);

export default Contact;
