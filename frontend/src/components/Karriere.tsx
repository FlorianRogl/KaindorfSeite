import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Mail, X } from 'lucide-react';
import planungImage from '../assets/Fotolia_59046832_XS.jpg';
import { jobService } from '../services/jobService';
import type { FormattedJob } from '../types/job.types';

const getDepartmentColor = (department: string): string => {
    const colors: { [key: string]: string } = {
        'Engineering': '#1e3767',
        'Design': '#d97539',
        'Projektmanagement': '#2d4a73',
        'Automatisierung': '#e68545',
        'Management': '#1a2f5f'
    };
    return colors[department] || '#1e3767';
};

const Karriere: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<FormattedJob | null>(null);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Sanity Integration States
    const [jobOpenings, setJobOpenings] = useState<FormattedJob[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Refs
    const heroRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    // Helper function for section refs
    const setSectionRef = (key: string) => (el: HTMLElement | null) => {
        sectionRefs.current[key] = el;
    };

    // Jobs von Sanity laden
    useEffect(() => {
        const loadJobs = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);
                const jobs = await jobService.getActiveJobs();
                setJobOpenings(jobs);
            } catch (err) {
                console.error('Fehler beim Laden der Jobs:', err);
                setError('Jobs konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
            } finally {
                setLoading(false);
            }
        };

        loadJobs();
    }, []);

    // SEO Meta Tags setzen
    useEffect(() => {
        document.title = 'Karriere bei PROMAX - Jobs im Industrieanlagenbau in Graz';

        const setMetaTag = (name: string, content: string, property = false): void => {
            const attribute = property ? 'property' : 'name';
            let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, name);
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        setMetaTag('description', 'Karrieremöglichkeiten bei PROMAX in Graz. Offene Stellen für Verfahrensingenieure, CAD-Konstrukteure, Projektmanager und Automatisierungstechniker. Jetzt bewerben!');
        setMetaTag('keywords', 'Jobs Graz, Karriere Industrieanlagenbau, Verfahrensingenieur Jobs, CAD Konstrukteur, Projektmanager Anlagenbau, Automatisierungstechniker, PROMAX Karriere');
    }, []);

    // Intersection Observer für Scroll-Animationen
    useEffect(() => {
        if (loading) return;

        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries: IntersectionObserverEntry[]): void => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section');
                    if (sectionId === 'hero') {
                        setIsVisible(true);
                    } else if (sectionId) {
                        setVisibleSections(prev => {
                            const newSet = new Set(prev);
                            newSet.add(sectionId);
                            return newSet;
                        });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        setTimeout(() => {
            if (heroRef.current) {
                heroRef.current.setAttribute('data-section', 'hero');
                observer.observe(heroRef.current);

                const rect = heroRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    setIsVisible(true);
                }
            }

            Object.entries(sectionRefs.current).forEach(([key, ref]) => {
                if (ref) {
                    ref.setAttribute('data-section', key);
                    observer.observe(ref);
                }
            });
        }, 100);

        return () => {
            observer.disconnect();
        };
    }, [loading]);

    // Carousel scroll functions
    const scrollCarousel = useCallback((direction: 'left' | 'right'): void => {
        if (carouselRef.current) {
            const scrollAmount = 350;
            const currentScroll = carouselRef.current.scrollLeft;
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            carouselRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    }, []);

    // Check if carousel can scroll
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

    const checkScrollability = useCallback((): void => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkScrollability);
            checkScrollability();

            window.addEventListener('resize', checkScrollability);

            return () => {
                carousel.removeEventListener('scroll', checkScrollability);
                window.removeEventListener('resize', checkScrollability);
            };
        }
    }, [checkScrollability, jobOpenings]);

    // Touch handling for mobile
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (): void => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) scrollCarousel('right');
        if (isRightSwipe) scrollCarousel('left');
    };

    const handleJobClick = (job: FormattedJob): void => {
        setSelectedJob(job);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (): void => {
        setSelectedJob(null);
        document.body.style.overflow = 'unset';
    };

    // Loading State
    if (loading) {
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767', minHeight: '100vh' }}>
                <div className="max-w-6xl mx-auto px-6 py-40 text-center">
                    <div className="animate-pulse">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200"></div>
                        <div className="text-xl">Jobs werden geladen...</div>
                    </div>
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767', minHeight: '100vh' }}>
                <div className="max-w-6xl mx-auto px-6 py-40 text-center">
                    <div className="text-xl text-red-600 mb-4">{error}</div>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 text-white hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#1e3767' }}
                    >
                        Seite neu laden
                    </button>
                </div>
            </div>
        );
    }

    // Keine Jobs vorhanden
    if (!loading && jobOpenings.length === 0) {
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767', minHeight: '100vh' }}>
                <section className="max-w-6xl mx-auto px-6 py-40 text-center">
                    <h1 className="text-4xl font-bold mb-4">Karriere bei PROMAX</h1>
                    <p className="text-xl mb-8">
                        Momentan sind keine offenen Stellen verfügbar.
                    </p>
                    <p className="text-lg mb-8">
                        Wir freuen uns aber jederzeit über Initiativbewerbungen!
                    </p>
                    <div className="bg-white border p-8 max-w-md mx-auto" style={{ borderColor: '#d1d8dc' }}>
                        <Mail size={48} className="mx-auto mb-4" style={{ color: '#1e3767' }} />
                        <h3 className="text-xl font-bold mb-2">Initiativbewerbung</h3>
                        <p className="text-sm mb-4">
                            Senden Sie uns Ihre Bewerbungsunterlagen an:
                        </p>
                        <a
                            href="mailto:karriere@promax.at"
                            className="text-lg font-medium hover:underline"
                            style={{ color: '#d97539' }}
                        >
                            karriere@promax.at
                        </a>
                    </div>
                </section>
            </div>
        );
    }

    // Split jobs into featured and carousel
    const featuredJobs = jobOpenings.slice(0, 3);
    const carouselJobs = jobOpenings.slice(3);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section ref={heroRef} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ backgroundColor: '#d1d8dc' }}>
                        <Sparkles size={16} style={{ color: '#1e3767' }} />
                        <span className="text-sm font-medium" style={{ color: '#1e3767' }}>Wir stellen ein</span>
                    </div>

                    <h1 className="text-7xl font-bold mb-8" style={{ color: '#1e3767' }}>
                        KARRIERE
                    </h1>

                    <p className="text-xl max-w-3xl leading-relaxed mb-12" style={{ color: '#1e3767' }}>
                        Werden Sie Teil eines innovativen Teams von über 100 Experten und arbeiten Sie an
                        wegweisenden Projekten in der Pharma-, Chemie- und Lebensmittelindustrie.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section ref={setSectionRef('values')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-bold mb-8" style={{ color: '#1e3767' }}>
                                Innovation trifft auf Tradition
                            </h2>

                            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#1e3767' }}>
                                <p>
                                    Bei uns erleben Sie eine einzigartige Arbeitskultur, die <strong>technische Exzellenz</strong> mit
                                    menschlichen Werten verbindet. Seit über drei Jahrzehnten entwickeln wir wegweisende Lösungen
                                    für die komplexesten Herausforderungen der Industrie.
                                </p>

                                <p>
                                    Unser Team aus über 100 Spezialisten lebt von der perfekten Balance zwischen <strong>Innovation
                                    und Teamgeist</strong>. Wir investieren nicht nur in modernste Technologien, sondern vor allem
                                    in die Menschen, die diese zum Leben erwecken.
                                </p>

                                <p>
                                    Flexible Arbeitsmodelle, internationale Projekte und eine Kultur des kontinuierlichen Lernens
                                    schaffen ein Umfeld, in dem sich <strong>persönliche Ambitionen mit beruflichem Erfolg</strong>
                                    vereinen lassen.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#1e3767' }}>
                                    <span className="text-white text-xl">💼</span>
                                </div>
                                <span className="text-lg font-medium" style={{ color: '#1e3767' }}>
                                    Work-Life-Balance ist bei uns kein Buzzword, sondern gelebte Realität
                                </span>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="w-full h-96 lg:h-[500px] shadow-2xl overflow-hidden">
                                <img
                                    src={planungImage}
                                    alt="PROMAX Team bei der Projektplanung"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section - Angular Design */}
            <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl font-bold mb-4" style={{ color: '#1e3767' }}>
                        Offene Stellen
                    </h2>
                    <p className="text-lg mb-16 max-w-2xl" style={{ color: '#1e3767' }}>
                        Finden Sie Ihre perfekte Position in unserem wachsenden Unternehmen
                    </p>

                    {/* Featured Jobs - Angular Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {featuredJobs.map((job, index) => (
                            <div
                                key={job.id}
                                className="group relative bg-white p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                style={{
                                    boxShadow: '0 8px 32px rgba(30, 55, 103, 0.12)',
                                    transitionDelay: `${index * 100}ms`
                                }}
                                onClick={() => handleJobClick(job)}
                            >
                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1"
                                    style={{ backgroundColor: getDepartmentColor(job.department) }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div
                                            className="px-4 py-2 text-sm font-semibold text-white"
                                            style={{ backgroundColor: getDepartmentColor(job.department) }}
                                        >
                                            {job.department}
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                            <ArrowRight size={20} style={{ color: getDepartmentColor(job.department) }} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-4 leading-tight" style={{ color: '#1e3767' }}>
                                        {job.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed mb-6 opacity-80 line-clamp-3" style={{ color: '#1e3767' }}>
                                        {job.description}
                                    </p>

                                    {/* Metadata */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-xs" style={{ color: '#1e3767' }}>
                                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100">
                                                <MapPin size={12} />
                                                <span className="font-medium">{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100">
                                                <Clock size={12} />
                                                <span className="font-medium">{job.type}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-xs" style={{ color: '#1e3767' }}>
                                            <div className="flex items-center gap-2 opacity-70">
                                                <Users size={12} />
                                                <span>Team: {job.teamSize}</span>
                                            </div>
                                            <div className="opacity-70">
                                                {job.posted}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                    style={{ backgroundColor: getDepartmentColor(job.department) }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Carousel Jobs */}
                    {carouselJobs.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold" style={{ color: '#1e3767' }}>Weitere Positionen</h3>
                                <div className="flex gap-3">
                                    <button
                                        className="w-12 h-12 flex items-center justify-center transition-all duration-300 disabled:opacity-40"
                                        style={{
                                            backgroundColor: canScrollLeft ? '#1e3767' : '#f8f9fa',
                                            color: canScrollLeft ? 'white' : '#1e3767',
                                            boxShadow: '0 4px 16px rgba(30, 55, 103, 0.2)'
                                        }}
                                        onClick={() => scrollCarousel('left')}
                                        disabled={!canScrollLeft}
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        className="w-12 h-12 flex items-center justify-center transition-all duration-300 disabled:opacity-40"
                                        style={{
                                            backgroundColor: canScrollRight ? '#1e3767' : '#f8f9fa',
                                            color: canScrollRight ? 'white' : '#1e3767',
                                            boxShadow: '0 4px 16px rgba(30, 55, 103, 0.2)'
                                        }}
                                        onClick={() => scrollCarousel('right')}
                                        disabled={!canScrollRight}
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            <div
                                className="overflow-x-auto scrollbar-hide"
                                ref={carouselRef}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                                    {carouselJobs.map((job) => (
                                        <div
                                            key={job.id}
                                            className="group relative bg-white p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                            style={{
                                                width: '340px',
                                                flexShrink: 0,
                                                boxShadow: '0 8px 32px rgba(30, 55, 103, 0.12)'
                                            }}
                                            onClick={() => handleJobClick(job)}
                                        >
                                            {/* Top accent line */}
                                            <div
                                                className="absolute top-0 left-0 w-full h-1"
                                                style={{ backgroundColor: getDepartmentColor(job.department) }}
                                            />

                                            {/* Content */}
                                            <div className="relative z-10">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-6">
                                                    <div
                                                        className="px-4 py-2 text-sm font-semibold text-white"
                                                        style={{ backgroundColor: getDepartmentColor(job.department) }}
                                                    >
                                                        {job.department}
                                                    </div>
                                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                                        <ArrowRight size={20} style={{ color: getDepartmentColor(job.department) }} />
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold mb-4 leading-tight" style={{ color: '#1e3767' }}>
                                                    {job.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-sm leading-relaxed mb-6 opacity-80 line-clamp-3" style={{ color: '#1e3767' }}>
                                                    {job.description}
                                                </p>

                                                {/* Metadata */}
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3 text-xs" style={{ color: '#1e3767' }}>
                                                        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100">
                                                            <MapPin size={12} />
                                                            <span className="font-medium">{job.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100">
                                                            <Clock size={12} />
                                                            <span className="font-medium">{job.type}</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between text-xs" style={{ color: '#1e3767' }}>
                                                        <div className="flex items-center gap-2 opacity-70">
                                                            <Users size={12} />
                                                            <span>Team: {job.teamSize}</span>
                                                        </div>
                                                        <div className="opacity-70">
                                                            {job.posted}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover effect */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                                style={{ backgroundColor: getDepartmentColor(job.department) }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center mt-6 text-sm lg:hidden opacity-60" style={{ color: '#1e3767' }}>
                                ← Wischen Sie für weitere Stellen →
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits Section */}
            <section ref={setSectionRef('benefits')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl font-bold mb-16" style={{ color: '#1e3767' }}>
                        Was wir bieten
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Attraktive Vergütung</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Leistungsgerechte Bezahlung über Kollektivvertrag</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Flexible Arbeitszeiten</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Gleitzeit und Home-Office Möglichkeiten</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Weiterbildung</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Individuelle Entwicklungsprogramme und Schulungen</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Gesundheitsvorsorge</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Betriebsarzt und Gesundheitsprogramme</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Internationale Projekte</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>Spannende Projekte weltweit</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>Modernes Arbeitsumfeld</h4>
                            <p className="text-sm" style={{ color: '#1e3767' }}>State-of-the-art Büros und Technologie</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section ref={setSectionRef('process')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl font-bold mb-16" style={{ color: '#1e3767' }}>
                        Unser Bewerbungsprozess
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {[
                            { num: '1', title: 'Bewerbung', desc: 'Senden Sie uns Ihre aussagekräftigen Unterlagen' },
                            { num: '2', title: 'Erstgespräch', desc: 'Persönliches oder virtuelles Kennenlernen' },
                            { num: '3', title: 'Fachgespräch', desc: 'Detailliertes Gespräch mit dem Fachbereich' },
                            { num: '4', title: 'Angebot', desc: 'Individuelles Vertragsangebot' },
                            { num: '5', title: 'Onboarding', desc: 'Strukturierte Einarbeitung im Team' }
                        ].map((step) => (
                            <div key={step.num} className="text-center">
                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-white font-bold"
                                     style={{ backgroundColor: '#1e3767' }}>
                                    {step.num}
                                </div>
                                <h4 className="text-lg font-bold mb-2" style={{ color: '#1e3767' }}>{step.title}</h4>
                                <p className="text-sm" style={{ color: '#1e3767' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={setSectionRef('cta')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`text-center transition-all duration-1000 transform ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-3xl font-bold mb-4" style={{ color: '#1e3767' }}>
                        Bewerbungen und Kontakt
                    </h3>
                    <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#1e3767' }}>
                        Interessiert? Senden Sie Ihre vollständigen Bewerbungsunterlagen
                        per E-Mail an unser HR-Team.
                    </p>
                    <div className="bg-white border p-8 max-w-md mx-auto" style={{ borderColor: '#d1d8dc' }}>
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#1e3767' }}>
                                <Mail size={24} color="white" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold mb-2" style={{ color: '#1e3767' }}>E-Mail Bewerbung</h4>
                        <a
                            href="mailto:karriere@promax.at"
                            className="text-lg font-medium hover:underline"
                            style={{ color: '#d97539' }}
                        >
                            karriere@promax.at
                        </a>
                        <p className="text-sm mt-4" style={{ color: '#1e3767' }}>
                            Bitte fügen Sie Lebenslauf, Anschreiben und relevante Zeugnisse bei.
                        </p>
                    </div>
                </div>
            </section>

            {/* Modern Job Details Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-[9999] bg-black bg-opacity-60 backdrop-blur-sm">
                    <div className="h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
                        <div className="relative bg-white w-full max-w-7xl max-h-[90vh] shadow-2xl flex flex-col">
                            {/* Header with Close Button */}
                            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                                <div>
                                    <div
                                        className="inline-block px-3 py-1 text-sm font-semibold text-white mb-2"
                                        style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                    >
                                        {selectedJob.department}
                                    </div>
                                    <h1 className="text-xl font-bold" style={{ color: '#1e3767' }}>
                                        {selectedJob.title}
                                    </h1>
                                </div>
                                <button
                                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                    onClick={closeModal}
                                    style={{ borderRadius: '50%' }}
                                >
                                    <X size={20} style={{ color: '#1e3767' }} />
                                </button>
                            </div>

                            {/* Content Area */}
                            <div className="flex flex-1 overflow-hidden">
                                {/* Fixed Left Sidebar */}
                                <div className="w-80 flex-shrink-0 p-6 border-r border-gray-200 bg-gray-50 overflow-y-auto">
                                    {/* Job Meta Info */}
                                    <div className="space-y-4 mb-6">
                                        <div className="text-sm" style={{ color: '#1e3767' }}>
                                            <div className="font-semibold text-sm mb-1">Standort</div>
                                            <div className="opacity-70">{selectedJob.location}</div>
                                        </div>

                                        <div className="text-sm" style={{ color: '#1e3767' }}>
                                            <div className="font-semibold text-sm mb-1">Arbeitszeit</div>
                                            <div className="opacity-70">{selectedJob.type}</div>
                                        </div>

                                        <div className="text-sm" style={{ color: '#1e3767' }}>
                                            <div className="font-semibold text-sm mb-1">Team</div>
                                            <div className="opacity-70">{selectedJob.teamSize} Personen</div>
                                        </div>

                                        <div className="text-sm" style={{ color: '#1e3767' }}>
                                            <div className="font-semibold text-sm mb-1">Veröffentlicht</div>
                                            <div className="opacity-70">{selectedJob.posted}</div>
                                        </div>

                                        <div className="text-sm" style={{ color: '#1e3767' }}>
                                            <div className="font-semibold text-sm mb-1">Erfahrung</div>
                                            <div className="opacity-70">{selectedJob.experience}</div>
                                        </div>
                                    </div>

                                    {/* Team Description */}
                                    <div className="bg-white p-4 border-l-4 mb-6" style={{ borderLeftColor: getDepartmentColor(selectedJob.department) }}>
                                        <p className="text-xs text-gray-700 leading-relaxed">
                                            Als Teil unseres {selectedJob.department}-Teams arbeiten Sie in einem dynamischen Umfeld
                                            mit modernster Technologie und internationalen Projekten. Wir bieten Ihnen die Möglichkeit,
                                            Ihre Expertise einzusetzen und gleichzeitig kontinuierlich zu wachsen.
                                        </p>
                                    </div>

                                    {/* Quick Contact Info */}
                                    <div className="p-4 bg-white border border-gray-200 shadow-sm">
                                        <h4 className="font-semibold mb-2 text-sm" style={{ color: '#1e3767' }}>Direkter Kontakt</h4>
                                        <p className="text-xs text-gray-600 mb-1">Haben Sie Fragen zu dieser Position?</p>
                                        <p className="text-xs" style={{ color: '#1e3767' }}>
                                            <span className="font-medium">HR-Team:</span><br />
                                            karriere@promax.at
                                        </p>
                                    </div>
                                </div>

                                {/* Scrollable Right Content Area */}
                                <div className="flex-1 overflow-y-auto">
                                    <div className="p-6 lg:p-8">
                                        {/* Job Description */}
                                        <section className="mb-8">
                                            <h2 className="text-xl lg:text-2xl font-bold mb-6" style={{ color: '#1e3767' }}>Über diese Position</h2>
                                            <div>
                                                <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#1e3767' }}>
                                                    {selectedJob.description}
                                                </p>
                                            </div>
                                        </section>

                                        {/* Responsibilities and Requirements Side by Side */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                            {/* Responsibilities */}
                                            <section>
                                                <h2 className="text-lg lg:text-xl font-bold mb-5" style={{ color: '#1e3767' }}>Ihre Aufgaben</h2>
                                                <div className="space-y-3">
                                                    {selectedJob.responsibilities.map((item, index) => (
                                                        <div key={index} className="flex items-start gap-3 p-3 bg-white border border-gray-200 shadow-sm">
                                                            <div
                                                                className="w-6 h-6 flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0"
                                                                style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                                            >
                                                                {index + 1}
                                                            </div>
                                                            <span className="leading-relaxed text-sm lg:text-base" style={{ color: '#1e3767' }}>{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            {/* Requirements */}
                                            <section>
                                                <h2 className="text-lg lg:text-xl font-bold mb-5" style={{ color: '#1e3767' }}>Ihr Profil</h2>
                                                <div className="space-y-3">
                                                    {selectedJob.requirements.map((item, index) => (
                                                        <div key={index} className="flex items-start gap-3 p-3 bg-white border border-gray-200 shadow-sm">
                                                            <div
                                                                className="w-6 h-6 flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0"
                                                                style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                                            >
                                                                {index + 1}
                                                            </div>
                                                            <span className="leading-relaxed text-sm lg:text-base" style={{ color: '#1e3767' }}>{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        </div>

                                        {/* Benefits */}
                                        <section className="mb-6">
                                            <h2 className="text-lg lg:text-xl font-bold mb-5" style={{ color: '#1e3767' }}>Was wir bieten</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {selectedJob.benefits.map((item, index) => (
                                                    <div key={index} className="flex items-start gap-3 p-3 bg-white border border-gray-200 shadow-sm">
                                                        <div
                                                            className="w-6 h-6 flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0"
                                                            style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                                        >
                                                            {index + 1}
                                                        </div>
                                                        <span className="leading-relaxed text-sm lg:text-base" style={{ color: '#1e3767' }}>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        {/* Contact Information */}
                                        <section className="border-t border-gray-200 pt-6">
                                            <div className="text-center">
                                                <h3 className="text-lg font-bold mb-3" style={{ color: '#1e3767' }}>
                                                    Interesse an dieser Position?
                                                </h3>
                                                <p className="text-sm lg:text-base mb-4 text-gray-700">
                                                    Senden Sie Ihre Bewerbungsunterlagen an unser HR-Team.
                                                </p>
                                                <div className="bg-white border border-gray-200 p-6 shadow-sm max-w-md mx-auto">
                                                    <div className="flex items-center justify-center mb-3">
                                                        <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: '#1e3767' }}>
                                                            <Mail size={20} color="white" />
                                                        </div>
                                                    </div>
                                                    <p className="font-medium text-lg mb-1" style={{ color: '#1e3767' }}>karriere@promax.at</p>
                                                    <p className="text-sm text-gray-600">
                                                        Bitte fügen Sie Lebenslauf, Anschreiben und relevante Zeugnisse bei.
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <style>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .pl-13 {
                    padding-left: 3.25rem;
                }
            `}</style>
        </div>
    );
};

export default Karriere;