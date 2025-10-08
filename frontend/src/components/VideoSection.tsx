import { useEffect, useRef, useState } from 'react';

const VideoSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <>
            <style>{`
                .hero-gradient {
                    background: linear-gradient(
                        135deg,
                        rgba(15, 23, 42, 0.88) 0%,
                        rgba(51, 65, 85, 0.75) 10%
                    );
                }

                .text-shadow-custom {
                    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 3rem !important;
                    }
                    .hero-subtitle {
                        font-size: 1.1rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .hero-title {
                        font-size: 2.4rem !important;
                    }
                    .hero-subtitle {
                        font-size: 1rem !important;
                    }
                }
            `}</style>

            <section ref={sectionRef} className="relative h-screen overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/Willkommen%20an%20der%20HTBLA%20Kaindorf%20-%20HTBLA%20Kaindorf%20(1080p,%20h264,%20youtube)%20-%20Compressed%20with%20FlexClip.mp4"
                    />
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
                    {/* Main Title */}
                    <div
                        className="text-center"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 1s ease 0.5s'
                        }}
                    >
                        <h1 className="hero-title text-6xl md:text-7xl font-extralight mb-6 text-white text-shadow-custom leading-tight tracking-wide">
                            HTL Kaindorf
                        </h1>
                        <p className="hero-subtitle text-lg md:text-xl font-light text-slate-200 text-shadow-custom tracking-wider">
                            Höhere Technische Lehranstalt
                        </p>
                        <p className="text-base md:text-lg font-light text-slate-300 mt-2 text-shadow-custom">
                            Technik • Innovation • Zukunft
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoSection;