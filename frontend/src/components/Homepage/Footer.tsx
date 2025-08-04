import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/Footer.module.css';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowUp,
    ExternalLink
} from 'lucide-react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        unternehmen: {
            title: 'Unternehmen',
            links: [
                { name: 'Über uns', path: '/Unternehmen' },
                { name: 'Geschichte', path: '/geschichte' },
                { name: 'Vision & Mission', path: '/vision' },
                { name: 'Team', path: '/team' }
            ]
        },
        services: {
            title: 'Leistungen',
            links: [
                { name: 'Consulting', path: '/Leistungen/consulting' },
                { name: 'Projektmanagement', path: '/Leistungen/pm' },
                { name: 'Digitalisierung', path: '/Leistungen/digital' },
                { name: 'Support', path: '/Leistungen/support' }
            ]
        },
        branchen: {
            title: 'Branchen',
            links: [
                { name: 'Automotive', path: '/Branchen/automotive' },
                { name: 'Technologie', path: '/Branchen/tech' },
                { name: 'Gesundheitswesen', path: '/Branchen/health' },
                { name: 'Finanzwesen', path: '/Branchen/finance' }
            ]
        },
        legal: {
            title: 'Rechtliches',
            links: [
                { name: 'Impressum', path: '/impressum' },
                { name: 'Datenschutz', path: '/datenschutz' },
                { name: 'AGB', path: '/agb' },
                { name: 'Cookie-Richtlinie', path: '/cookies' }
            ]
        }
    };

    const contactInfo = [
        { icon: MapPin, text: 'Musterstraße 123, 12345 Musterstadt' },
        { icon: Phone, text: '+49 (0) 123 456 789' },
        { icon: Mail, text: 'info@promax.de' },
        { icon: Clock, text: 'Mo-Fr: 8:00-18:00 Uhr' }
    ];

    const socialLinks = [
        { icon: Facebook, url: '#', name: 'Facebook' },
        { icon: Twitter, url: '#', name: 'Twitter' },
        { icon: Linkedin, url: '#', name: 'LinkedIn' },
        { icon: Instagram, url: '#', name: 'Instagram' }
    ];

    return (
        <>
            <footer
                ref={footerRef}
                className={`${styles.footer} ${isVisible ? styles.footerVisible : ''}`}
            >
                {/* Orange Gradient Line */}
                <div className={styles.footerGradientLine}></div>

                {/* Main Footer Content */}
                <div className={styles.footerContainer}>
                    {/* Company Info Section */}
                    <div className={`${styles.footerSection} ${styles.companySection} ${isVisible ? styles.animateUp : ''}`}>
                        <div className={styles.companyLogo}>
                            <h3 className={styles.logoText}>PROMAX</h3>
                            <p className={styles.companyTagline}>Ihr Partner für digitale Transformation</p>
                        </div>
                        <p className={styles.companyDescription}>
                            Seit über 15 Jahren unterstützen wir Unternehmen dabei, ihre digitalen
                            Potentiale zu entdecken und erfolgreich umzusetzen. Vertrauen Sie auf
                            unsere Expertise und Leidenschaft für Innovation.
                        </p>

                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.contactItem} ${isVisible ? styles.animateFadeIn : ''}`}
                                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                >
                                    <item.icon size={16} />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([key, section], sectionIndex) => (
                        <div
                            key={key}
                            className={`${styles.footerSection} ${styles.linksSection} ${isVisible ? styles.animateUp : ''}`}
                            style={{ animationDelay: `${0.3 + sectionIndex * 0.1}s` }}
                        >
                            <h4 className={styles.sectionTitle}>{section.title}</h4>
                            <ul className={styles.linksList}>
                                {section.links.map((link, linkIndex) => (
                                    <li
                                        key={linkIndex}
                                        className={`${styles.linkItem} ${isVisible ? styles.animateFadeIn : ''}`}
                                        style={{ animationDelay: `${0.5 + sectionIndex * 0.1 + linkIndex * 0.05}s` }}
                                    >
                                        <Link to={link.path} className={styles.footerLink}>
                                            {link.name}
                                            <ExternalLink size={12} className={styles.linkIcon} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Media & Bottom Bar */}
                <div className={`${styles.footerBottom} ${isVisible ? styles.animateUp : ''}`} style={{ animationDelay: '0.8s' }}>
                    <div className={styles.footerBottomContainer}>
                        <div className={styles.socialSection}>
                            <span className={styles.socialTitle}>Folgen Sie uns:</span>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className={`${styles.socialLink} ${isVisible ? styles.animateBounce : ''}`}
                                        style={{ animationDelay: `${1.0 + index * 0.1}s` }}
                                        aria-label={social.name}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className={styles.copyright}>
                            <p>&copy; 2025 PROMAX. Alle Rechte vorbehalten.</p>
                        </div>

                        <div className={styles.qualityBadges}>
                            <span className={styles.badge}>ISO 9001</span>
                            <span className={styles.badge}>DSGVO konform</span>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        className={`${styles.scrollTopBtn} ${styles.animateBounceIn}`}
                        onClick={scrollToTop}
                        aria-label="Nach oben scrollen"
                    >
                        <ArrowUp size={20} />
                    </button>
                )}
            </footer>
        </>
    );
};

export default Footer;