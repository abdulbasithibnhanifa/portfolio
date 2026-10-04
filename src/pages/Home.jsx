import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '../components/Button';
import SEO from '../components/SEO';
import profilePic from '../assets/PF-pic-2.png';

const Home = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:abdulbasithibnhanifa@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="pb-5 font-editorial">
            <SEO title="Abdul Basith — Full-Stack & AI Systems Engineer" />
            
            {/* 1. HERO SECTION */}
            <section className="min-vh-100 min-vh-lg-80 d-flex align-items-center py-5 section-padding">
                <Container>
                    <Row className="align-items-center gy-5">
                        <Col lg={8} className="order-2 order-lg-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="eyebrow mb-4">Engineering Report / 2026</span>
                                <h1 className="display-3 mb-4 lh-sm text-primary" style={{ fontWeight: 400, letterSpacing: '-0.04em' }}>
                                    Full-Stack &<br/>AI Systems Engineer
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-secondary fs-5 mb-5"
                                style={{ maxWidth: '600px', fontWeight: 300, lineHeight: 1.8 }}
                            >
                                Architecting production-grade multi-tenant SaaS platforms, robust data pipelines, and intelligent AI integrations. Focused on scalable backend architecture, zero-downtime migrations, and precision engineering.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="d-flex gap-3 flex-wrap font-mono"
                            >
                                <a href="#work" className="text-decoration-none">
                                    <Button variant="primary">
                                        View Data & Architecture <ArrowRight size={16} />
                                    </Button>
                                </a>
                                <a href="#resume" className="text-decoration-none">
                                    <Button variant="secondary">
                                        Download Resume <Download size={16} />
                                    </Button>
                                </a>
                            </motion.div>
                        </Col>

                        <Col lg={4} className="order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="position-relative w-100"
                                style={{ maxWidth: '300px' }}
                            >
                                <div className="surface-recessed p-1 overflow-hidden" style={{ aspectRatio: '3/4' }}>
                                    <img
                                        src={profilePic}
                                        alt="Abdul Basith"
                                        className="w-100 h-100 object-fit-cover grayscale-hover transition-all"
                                        style={{ filter: 'grayscale(1)', opacity: 0.9 }}
                                    />
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 2. CAPABILITIES SECTION */}
            <section id="expertise" className="section-padding bg-recessed border-top border-bottom border-subtle">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-5"
                    >
                        <span className="eyebrow">Engineering Scope</span>
                        <h2 className="h2 text-primary">System Architecture Taxonomy</h2>
                    </motion.div>

                    <Row className="g-0 border border-subtle surface-elevated font-mono">
                        <Col md={6} lg={4} className="p-4 border-end border-bottom border-subtle">
                            <div className="d-flex align-items-center mb-4">
                                <div className="data-marker"></div>
                                <span className="text-secondary" style={{ fontSize: '0.75rem' }}>01 / ARCHITECTURE</span>
                            </div>
                            <h3 className="h6 mb-3 text-primary" style={{ letterSpacing: 0 }}>Backend & APIs</h3>
                            <p className="small text-secondary mb-0 lh-lg">
                                Node.js, Express, NestJS, REST, Webhooks, background workers.
                            </p>
                        </Col>
                        <Col md={6} lg={4} className="p-4 border-end border-bottom border-subtle">
                            <div className="d-flex align-items-center mb-4">
                                <div className="data-marker bg-secondary"></div>
                                <span className="text-secondary" style={{ fontSize: '0.75rem' }}>02 / DATA</span>
                            </div>
                            <h3 className="h6 mb-3 text-primary" style={{ letterSpacing: 0 }}>Storage & Migrations</h3>
                            <p className="small text-secondary mb-0 lh-lg">
                                PostgreSQL, zero-downtime migrations, dual-writes, data reconciliation.
                            </p>
                        </Col>
                        <Col md={6} lg={4} className="p-4 border-bottom border-subtle">
                            <div className="d-flex align-items-center mb-4">
                                <div className="data-marker bg-secondary"></div>
                                <span className="text-secondary" style={{ fontSize: '0.75rem' }}>03 / IDENTITY</span>
                            </div>
                            <h3 className="h6 mb-3 text-primary" style={{ letterSpacing: 0 }}>Security & Auth</h3>
                            <p className="small text-secondary mb-0 lh-lg">
                                RBAC, JWT, multi-tenant data isolation, webhook signature validation.
                            </p>
                        </Col>
                        <Col md={6} lg={4} className="p-4 border-end border-subtle">
                            <div className="d-flex align-items-center mb-4">
                                <div className="data-marker bg-secondary"></div>
                                <span className="text-secondary" style={{ fontSize: '0.75rem' }}>04 / AI</span>
                            </div>
                            <h3 className="h6 mb-3 text-primary" style={{ letterSpacing: 0 }}>Intelligent Systems</h3>
                            <p className="small text-secondary mb-0 lh-lg">
                                RAG architectures, Vector Search, LLM integrations, AI-agent workflows.
                            </p>
                        </Col>
                        <Col md={6} lg={4} className="p-4 border-end border-subtle">
                            <div className="d-flex align-items-center mb-4">
                                <div className="data-marker bg-secondary"></div>
                                <span className="text-secondary" style={{ fontSize: '0.75rem' }}>05 / INTEGRATIONS</span>
                            </div>
                            <h3 className="h6 mb-3 text-primary" style={{ letterSpacing: 0 }}>Third-Party Ecosystems</h3>
                            <p className="small text-secondary mb-0 lh-lg">
                                Shopify APIs, Meta Cloud API, third-party logistics (3PL) sync.
                            </p>
                        </Col>
                        <Col md={6} lg={4} className="p-4">
                            <div className="d-flex align-items-center mb-4">
                                <div className="data-marker bg-secondary"></div>
                                <span className="text-secondary" style={{ fontSize: '0.75rem' }}>06 / INFRASTRUCTURE</span>
                            </div>
                            <h3 className="h6 mb-3 text-primary" style={{ letterSpacing: 0 }}>Caching & Queues</h3>
                            <p className="small text-secondary mb-0 lh-lg">
                                Redis, BullMQ, event-driven architectures, reliable delivery.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 3. PROFESSIONAL ENGINEERING SECTION */}
            <section id="work" className="section-padding">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-5"
                    >
                        <span className="eyebrow">Professional Case Files</span>
                        <h2 className="display-4 text-primary mb-4" style={{ letterSpacing: '-0.04em' }}>AutoShipp SaaS Ecosystem</h2>
                        <p className="text-secondary lead mw-700" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                            Engineering workstream reports detailing architecture, implementation, and verified data from the AutoShipp multi-tenant platform. Focus areas include shipping automation, Meta integrations, and strict zero-downtime data migrations.
                        </p>
                    </motion.div>

                    {/* Case Study 1 */}
                    <div className="case-study-border">
                        <Row className="g-5">
                            <Col lg={4}>
                                <div className="sticky-top" style={{ top: '100px' }}>
                                    <span className="ownership-badge mb-4">01 / IMPLEMENTED</span>
                                    <h3 className="h2 mb-4 text-primary" style={{ letterSpacing: '-0.03em' }}>Shopify Customer Migration</h3>
                                    <p className="text-secondary small mb-5 lh-lg">
                                        Data engineering and API pagination for zero-downtime customer record transfer.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="tech-badge">PostgreSQL</span>
                                        <span className="tech-badge">Shopify APIs</span>
                                        <span className="tech-badge">Transactions</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="mb-5 pb-5 border-bottom border-subtle">
                                    <span className="eyebrow">TECHNICAL SYSTEM</span>
                                    <p className="text-secondary font-mono small mb-4">
                                        Shopify API → pagination → checkpoint/resume → transaction → reconciliation
                                    </p>
                                    <p className="text-secondary lh-lg mb-0" style={{ fontWeight: 300 }}>
                                        Built a resumable, transactional migration pipeline to transfer highly structured e-commerce data from Shopify to AutoShipp's PostgreSQL infrastructure. Required strict environment validation, checkpoint/resume capability, profile synchronization, and zero-downtime execution. Handled Shopify Customer API pagination and complex JSONB metadata preservation. Validated 3-page / 750-customer pagination stability before the production run.
                                    </p>
                                </div>
                                
                                <div>
                                    <span className="eyebrow mb-4">DATA VISUALIZATION / OUTCOME</span>
                                    <div className="surface-recessed p-4 p-md-5 font-mono text-sm border border-subtle">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-secondary">SOURCE RECORDS</span>
                                            <span className="text-primary">7,528</span>
                                        </div>
                                        <div className="data-bar mb-5">
                                            <div className="data-fill bg-muted" style={{ width: '100%', backgroundColor: 'var(--text-muted)' }}></div>
                                        </div>
                                        
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-secondary">MIGRATED / ENRICHED</span>
                                            <span className="text-accent">7,525</span>
                                        </div>
                                        <div className="data-bar mb-5">
                                            <div className="data-fill accent" style={{ width: '99.96%' }}></div>
                                        </div>
                                        
                                        <div className="d-flex justify-content-between pt-4 border-top border-subtle">
                                            <span className="text-secondary">DISCREPANCY INVESTIGATED</span>
                                            <span className="text-primary">3</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Case Study 2 */}
                    <div className="case-study-border">
                        <Row className="g-5">
                            <Col lg={4}>
                                <div className="sticky-top" style={{ top: '100px' }}>
                                    <span className="ownership-badge mb-4">02 / ARCHITECTED & IMPLEMENTED</span>
                                    <h3 className="h2 mb-4 text-primary" style={{ letterSpacing: '-0.03em' }}>Platform Data Consolidation</h3>
                                    <p className="text-secondary small mb-5 lh-lg">
                                        Safe migration of isolated external product databases into the canonical schema.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="tech-badge">PostgreSQL</span>
                                        <span className="tech-badge">Dual-Writes</span>
                                        <span className="tech-badge">Neon DB</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="mb-5 pb-5 border-bottom border-subtle">
                                    <span className="eyebrow">TECHNICAL SYSTEM</span>
                                    <p className="text-secondary lh-lg mb-0" style={{ fontWeight: 300 }}>
                                        Consolidated isolated Fit Intelligence database schemas (28 `fit_*` tables) into the unified AutoShipp canonical database structure. Executed using feature-flagged database migrations and dual-write strategies to ensure zero interruption to live platform services.
                                    </p>
                                </div>
                                
                                <div>
                                    <span className="eyebrow mb-4">DATA VISUALIZATION / OUTCOME</span>
                                    <div className="surface-recessed p-4 p-md-5 font-mono border border-subtle">
                                        <Row className="g-4 text-center mb-5">
                                            <Col xs={6} md={3}>
                                                <div className="fs-2 text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>80</div>
                                                <div className="text-secondary" style={{fontSize: '0.65rem'}}>TABLES</div>
                                            </Col>
                                            <Col xs={6} md={3}>
                                                <div className="fs-2 text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>DUAL</div>
                                                <div className="text-secondary" style={{fontSize: '0.65rem'}}>WRITE MIGRATION</div>
                                            </Col>
                                            <Col xs={6} md={3}>
                                                <div className="fs-2 text-accent mb-2" style={{ letterSpacing: '-0.02em' }}>0</div>
                                                <div className="text-secondary" style={{fontSize: '0.65rem'}}>DATA LOSS</div>
                                            </Col>
                                            <Col xs={6} md={3}>
                                                <div className="fs-2 text-accent mb-2" style={{ letterSpacing: '-0.02em' }}>0</div>
                                                <div className="text-secondary" style={{fontSize: '0.65rem'}}>SERVICE INTERRUPTION</div>
                                            </Col>
                                        </Row>
                                        <div className="data-line mb-4 border-default"></div>
                                        <div className="d-flex justify-content-between align-items-center text-secondary w-100 overflow-auto pb-2" style={{fontSize: '0.7rem', whiteSpace: 'nowrap'}}>
                                            <span>LEGACY SCHEMA</span>
                                            <span className="mx-2">→</span>
                                            <span>DUAL WRITE</span>
                                            <span className="mx-2">→</span>
                                            <span>PARITY VALIDATION</span>
                                            <span className="mx-2">→</span>
                                            <span className="text-primary">CANONICAL SCHEMA</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Case Study 3 */}
                    <div className="case-study-border">
                        <Row className="g-5">
                            <Col lg={4}>
                                <div className="sticky-top" style={{ top: '100px' }}>
                                    <span className="ownership-badge mb-4">03 / ARCHITECTED & IMPLEMENTED</span>
                                    <h3 className="h2 mb-4 text-primary" style={{ letterSpacing: '-0.03em' }}>WhatsApp Meta Tech Provider Platform</h3>
                                    <p className="text-secondary small mb-5 lh-lg">
                                        SaaS architecture to support multi-tenant messaging directly through AutoShipp.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="tech-badge">Meta Cloud API</span>
                                        <span className="tech-badge">Redis</span>
                                        <span className="tech-badge">HMAC</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="mb-5 pb-5 border-bottom border-subtle">
                                    <span className="eyebrow">TECHNICAL SYSTEM</span>
                                    <p className="text-secondary lh-lg mb-0" style={{ fontWeight: 300 }}>
                                        Established AutoShipp as a Meta Tech Provider, allowing the platform to manage WhatsApp Business accounts for multiple client tenants without requiring them to own separate Meta Apps. Implemented secure webhook verification, HMAC signatures, tenant routing, and Redis deduplication for incoming payloads. Deployed multi-tenant messaging infrastructure routing webhooks reliably.
                                    </p>
                                </div>
                                
                                <div>
                                    <span className="eyebrow mb-4">DATA VISUALIZATION / OUTCOME</span>
                                    <div className="surface-recessed p-4 p-md-5 font-mono border border-subtle">
                                        <div className="mb-5">
                                            <div className="text-secondary mb-2" style={{fontSize: '0.7rem'}}>CAMPAIGN ANALYTICS / MOMZCRADLE</div>
                                        </div>
                                        <div className="d-flex flex-column gap-0">
                                            <div className="d-flex justify-content-between align-items-center border-bottom border-subtle py-3">
                                                <span className="text-secondary" style={{fontSize: '0.8rem'}}>SENT</span>
                                                <span className="text-primary fs-4" style={{ letterSpacing: '-0.02em' }}>2,900</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center border-bottom border-subtle py-3 ps-3 border-start border-subtle" style={{ borderLeftWidth: '2px !important' }}>
                                                <span className="text-secondary" style={{fontSize: '0.8rem'}}>READ</span>
                                                <span className="text-primary fs-4" style={{ letterSpacing: '-0.02em' }}>~1,500</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center py-3 ps-4 border-start" style={{ borderColor: 'var(--accent-primary) !important', borderLeftWidth: '2px !important' }}>
                                                <span className="text-secondary" style={{fontSize: '0.8rem'}}>MATCHED</span>
                                                <span className="text-accent fs-3" style={{ letterSpacing: '-0.02em' }}>9</span>
                                            </div>
                                        </div>
                                        
                                        <div className="data-line mt-4 mb-4 border-default"></div>
                                        
                                        <Row className="g-4 text-secondary" style={{fontSize: '0.75rem'}}>
                                            <Col xs={6} md={3}>
                                                <div className="text-primary fs-5 mb-1" style={{ letterSpacing: '-0.02em' }}>0.34%</div>
                                                <div style={{ fontSize: '0.65rem' }}>SENT → MATCHED</div>
                                            </Col>
                                            <Col xs={6} md={3}>
                                                <div className="text-primary fs-5 mb-1" style={{ letterSpacing: '-0.02em' }}>0.67%</div>
                                                <div style={{ fontSize: '0.65rem' }}>READ → MATCHED</div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <div className="d-flex justify-content-between border-bottom border-subtle pb-2 mb-2">
                                                    <span>REVENUE / SENT</span>
                                                    <span className="text-primary">₹9.51</span>
                                                </div>
                                                <div className="d-flex justify-content-between border-bottom border-subtle pb-2 mb-2">
                                                    <span>REVENUE / READ</span>
                                                    <span className="text-primary">₹18.39</span>
                                                </div>
                                                <div className="d-flex justify-content-between pt-1">
                                                    <span>AVG REVENUE / MATCHED</span>
                                                    <span className="text-accent">₹2,758.13</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Case Study 4 */}
                    <div className="case-study-border">
                        <Row className="g-5">
                            <Col lg={4}>
                                <div className="sticky-top" style={{ top: '100px' }}>
                                    <span className="ownership-badge mb-4">04 / ARCHITECTED</span>
                                    <h3 className="h2 mb-4 text-primary" style={{ letterSpacing: '-0.03em' }}>Identity & RBAC Modernization</h3>
                                    <p className="text-secondary small mb-5 lh-lg">
                                        Legacy identity replacement with dynamic account authorization.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="tech-badge">RBAC</span>
                                        <span className="tech-badge">Middleware</span>
                                        <span className="tech-badge">TypeORM</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="mb-4">
                                    <span className="eyebrow">TECHNICAL SYSTEM</span>
                                    <p className="text-secondary lh-lg mb-0" style={{ fontWeight: 300 }}>
                                        Redesigned legacy, hard-coded identity rules into a scalable Role-Based Access Control (RBAC) architecture using PostgreSQL and TypeORM. Implemented AccountVisibility guards and permissions validation at the API middleware layer to secure tenant data boundaries.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            {/* 4. INDEPENDENT ENGINEERING */}
            <section id="independent" className="section-padding bg-recessed border-top border-bottom border-subtle">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-5"
                    >
                        <span className="eyebrow">Independent Work</span>
                        <h2 className="h2 text-primary" style={{ letterSpacing: '-0.03em' }}>Academic & Personal Engineering</h2>
                    </motion.div>

                    <Row className="g-0 border border-subtle surface-elevated">
                        <Col lg={6} className="border-end-lg border-bottom-md border-subtle p-5">
                            <div className="h-100">
                                <span className="ownership-badge mb-4">DESIGNED & IMPLEMENTED</span>
                                <h3 className="h3 text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>NeuroVault — AI Knowledge Platform</h3>
                                <p className="text-secondary mb-5 lh-lg" style={{ fontWeight: 300 }}>
                                    Full-stack Next.js RAG application using MiniLM embeddings, Supabase pgvector, and asynchronous BullMQ workers for document ingestion and semantic retrieval.
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="tech-badge">Next.js</span>
                                    <span className="tech-badge">pgvector</span>
                                    <span className="tech-badge">BullMQ</span>
                                    <span className="tech-badge">Redis</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-5">
                            <div className="h-100">
                                <span className="ownership-badge mb-4">DESIGNED & IMPLEMENTED</span>
                                <h3 className="h3 text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>DevDesk — Project Management System</h3>
                                <p className="text-secondary mb-5 lh-lg" style={{ fontWeight: 300 }}>
                                    Secure MERN stack application featuring JWT authentication, refresh-token rotation in Axios interceptors, HttpOnly cookies, and strict MongoDB data modelling.
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="tech-badge">React.js</span>
                                    <span className="tech-badge">Express.js</span>
                                    <span className="tech-badge">MongoDB</span>
                                    <span className="tech-badge">JWT</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 5. RESUME SECTION */}
            <section id="resume" className="section-padding">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <span className="eyebrow mb-3">Curriculum Vitae</span>
                            <h2 className="display-5 text-primary mb-4" style={{ letterSpacing: '-0.03em' }}>Resume & Background</h2>
                            <p className="text-secondary fs-5 mb-5 mw-700" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                                A comprehensive timeline of my engineering experience, technical capabilities, and academic history. Download the full PDF to view my complete professional profile.
                            </p>
                            
                            <ul className="list-unstyled mb-5 font-mono text-secondary small d-flex flex-column gap-3">
                                <li className="d-flex align-items-center gap-3 border-bottom border-subtle pb-3">
                                    <div className="data-marker"></div>
                                    Software Engineer — Full-Stack & AI Systems
                                </li>
                                <li className="d-flex align-items-center gap-3 border-bottom border-subtle pb-3">
                                    <div className="data-marker bg-secondary"></div>
                                    Current AutoShipp ecosystem experience
                                </li>
                                <li className="d-flex align-items-center gap-3 border-bottom border-subtle pb-3">
                                    <div className="data-marker bg-secondary"></div>
                                    PDF Format (Standard A4)
                                </li>
                            </ul>

                            <a href="/Abdul_Basith_Resume.pdf" download="Abdul_Basith_Resume.pdf" className="text-decoration-none">
                                <Button variant="primary">
                                    <Download size={16} /> Download Full Resume
                                </Button>
                            </a>
                        </Col>
                        <Col lg={6}>
                            <div className="position-relative">
                                {/* Decorative background element */}
                                <div className="position-absolute top-0 end-0 bg-recessed" style={{ width: '100%', height: '100%', transform: 'translate(2%, -2%)', zIndex: -1 }}></div>
                                
                                <div className="surface-elevated p-1 overflow-hidden w-100 mx-auto" style={{ maxWidth: '450px' }}>
                                    <img 
                                        src="/current-resume-preview.jpg" 
                                        alt="Resume Preview" 
                                        className="img-fluid w-100 h-auto grayscale-hover transition-all"
                                        style={{ border: '1px solid var(--border-subtle)', filter: 'grayscale(1)' }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 6. CONTACT SECTION */}
            <section id="contact" className="section-padding bg-recessed border-top border-subtle">
                <Container style={{ maxWidth: '1000px' }}>
                    <div className="text-center mb-5 pb-4">
                        <span className="eyebrow mb-3">Connect</span>
                        <h2 className="display-5 text-primary mb-4" style={{ letterSpacing: '-0.03em' }}>Get in Touch</h2>
                        <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px', fontWeight: 300 }}>
                            Open to new opportunities and collaborations. Let's discuss backend architecture, production systems, or engineering roles.
                        </p>
                    </div>

                    <Row className="gy-5">
                        <Col md={5} className="d-flex flex-column justify-content-center gap-4 pe-lg-5">
                            <a href="mailto:abdulbasithibnhanifa@gmail.com" className="d-flex align-items-center gap-3 text-decoration-none text-secondary hover-text-accent transition-colors font-mono small">
                                <Mail size={20} />
                                <span className="text-primary">abdulbasithibnhanifa@gmail.com</span>
                            </a>
                            <a href="tel:8778685195" className="d-flex align-items-center gap-3 text-decoration-none text-secondary hover-text-accent transition-colors font-mono small">
                                <Phone size={20} />
                                <span className="text-primary">8778685195</span>
                            </a>
                            <div className="d-flex align-items-center gap-4 mt-4 pt-4 border-top border-subtle">
                                <a href="https://www.linkedin.com/in/abdul-basith-ibn-hanifa/" target="_blank" rel="noopener noreferrer" className="text-secondary hover-text-primary transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/abdulbasithibnhanifa" target="_blank" rel="noopener noreferrer" className="text-secondary hover-text-primary transition-colors">
                                    <Github size={24} />
                                </a>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="surface-elevated p-5 border-subtle font-mono text-sm">
                                <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                                    <div>
                                        <Form.Label className="text-secondary mb-1">NAME</Form.Label>
                                        <Form.Control type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                    </div>
                                    <div>
                                        <Form.Label className="text-secondary mb-1">EMAIL</Form.Label>
                                        <Form.Control type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                    </div>
                                    <div>
                                        <Form.Label className="text-secondary mb-1">MESSAGE</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Your inquiry..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required style={{ resize: 'none' }} />
                                    </div>
                                    <Button variant="primary" type="submit" className="w-100 mt-4 font-mono">
                                        <Send size={16} /> INITIATE CONTACT
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;
