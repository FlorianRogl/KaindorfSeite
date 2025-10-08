import { ChevronRight, CheckCircle, MapPin, Phone, Mail, Award, Users, BookOpen, Globe } from "lucide-react";
import VideoSection from "./VideoSection.tsx";
import {useNavigate} from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();
    const highlights = [
        {
            icon: <Award className="w-7 h-7" />,
            title: "Leistung mit Menschlichkeit",
            description: "Unser Leitmotto prägt den Schulalltag"
        },
        {
            icon: <Users className="w-7 h-7" />,
            title: "Praxisnahe Ausbildung",
            description: "Intensive Wirtschaftskontakte und Firmenprojekte"
        },
        {
            icon: <BookOpen className="w-7 h-7" />,
            title: "Moderne Ausstattung",
            description: "State-of-the-Art Labore und CNC-Werkstätten"
        },
        {
            icon: <Globe className="w-7 h-7" />,
            title: "Internationale Perspektive",
            description: "Cambridge Zertifikate und Austauschprogramme"
        }
    ];

    const news = [
        {
            date: "24. September 2025",
            title: "Recruiting Day 2025 - Über 100 Firmen vor Ort",
            excerpt: "Unsere schulinterne Jobmesse bietet Schülern direkten Kontakt zu potenziellen Arbeitgebern aus ganz Österreich.",
            image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop"
        },
        {
            date: "20. September 2025",
            title: "Cambridge English Gold Preparation Centre",
            excerpt: "Wir sind stolz auf unsere Auszeichnung als Gold-Level Vorbereitungszentrum für Cambridge English Zertifikate.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
        },
        {
            date: "15. September 2025",
            title: "MINT-Gütesiegel erneut verliehen",
            excerpt: "Die HTL Kaindorf erhält zum wiederholten Mal das MINT-Gütesiegel für innovative Bildung.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <VideoSection></VideoSection>
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop"
                    alt="HTL Kaindorf"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">HTL Kaindorf an der Sulm</h1>
                        <p className="text-xl md:text-2xl">Technische Ausbildung im Herzen der Südsteiermark</p>
                    </div>
                </div>
            </div>

            {/* Highlights */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {highlights.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-blue-700 bg-blue-50 rounded">
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ausbildungsrichtungen */}
            <section id="departments" className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Unsere Ausbildungsrichtungen
                        </h2>
                        <p className="text-gray-600 max-w-3xl">
                            Vier technische Fachrichtungen mit 5-jähriger Ausbildung und Matura. Praxisorientiert und zukunftsorientiert.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Informatik */}
                        <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        onClick={() => navigate("/informatik")}>
                            <div className="aspect-[16/9] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
                                    alt="Informatik"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Informatik</h3>
                                <p className="text-sm text-blue-700 mb-4 font-medium">Softwareengineering und Management</p>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    Die größte Abteilung mit Fokus auf Softwareentwicklung und Entrepreneurship.
                                    Praxisorientierter Unterricht ab dem ersten Jahrgang.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Programmieren</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Datenbanken</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Cyber Security</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">4 Vertiefungen</span>
                                </div>
                                <p className="text-sm text-gray-500">5 Jahre • Mit Matura</p>
                            </div>
                        </div>

                        {/* Automatisierungstechnik */}
                        <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-[16/9] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=450&fit=crop"
                                    alt="Automatisierungstechnik"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Automatisierungstechnik</h3>
                                <p className="text-sm text-blue-700 mb-4 font-medium">Industrie 4.0 und Steuerungstechnik</p>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    Hoher Bedarf in der Wirtschaft. Technische Ausbildung mit praxisbezogenem
                                    Unterricht in modernen Werkstätten.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">CAD & Simulation</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">CNC-Werkstätten</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Steuerungstechnik</span>
                                </div>
                                <p className="text-sm text-gray-500">5 Jahre • Mit Matura</p>
                            </div>
                        </div>

                        {/* Mechatronik */}
                        <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-[16/9] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=450&fit=crop"
                                    alt="Mechatronik"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Mechatronik</h3>
                                <p className="text-sm text-blue-700 mb-4 font-medium">Mechanik, Elektronik & Informatik</p>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    Einzigartige Kombination aus drei Disziplinen. Standort Arnfels mit
                                    Englisch als Arbeitssprache - einmalig in der Steiermark.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Englisch als Arbeitssprache</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Standort Arnfels</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Roboterkonstruktion</span>
                                </div>
                                <p className="text-sm text-gray-500">5 Jahre • Mit Matura</p>
                            </div>
                        </div>

                        {/* Robotik */}
                        <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-[16/9] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop"
                                    alt="Robotik"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Robotik</h3>
                                <p className="text-sm text-blue-700 mb-4 font-medium">Smart Engineering der Zukunft</p>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    Jüngste Abteilung für Digitalisierung und Industrie 4.0. Vereint Mechanik,
                                    Elektronik, Sensorik, Aktorik und Informatik.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Autonome Systeme</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">KI & Machine Learning</span>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">Sensorik & Aktorik</span>
                                </div>
                                <p className="text-sm text-gray-500">5 Jahre • Mit Matura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warum HTL Kaindorf */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Warum HTL Kaindorf?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Im Herzen der Südsteiermark bereiten wir unsere Schülerinnen und Schüler optimal auf die Anforderungen der modernen Arbeitswelt vor. Durch offenen und ehrlichen Umgang im Zeichen von Toleranz und gegenseitiger Wertschätzung.
                            </p>

                            <div className="space-y-3 mb-8">
                                {[
                                    "Modernste technische Ausstattung und Labore",
                                    "Praxisorientierte Ausbildung mit Industriepartnern",
                                    "Cambridge English Gold Preparation Centre",
                                    "Recruiting Day mit über 100 Firmen",
                                    "MINT-Gütesiegel für innovative Bildung",
                                    "Individuelle Förderung und Mentoring"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors">
                                    Mehr erfahren
                                </button>
                                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                                    Virtueller Rundgang
                                </button>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg"
                                alt="HTL Kaindorf Campus"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* News */}
            <section id="news" className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Aktuelles
                        </h2>
                        <p className="text-gray-600">
                            Neuigkeiten aus der HTL Kaindorf
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {news.map((item, index) => (
                            <article key={index} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs text-blue-700 font-semibold mb-2">{item.date}</p>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.excerpt}</p>
                                    <a href="#" className="text-blue-700 font-medium text-sm hover:text-blue-800 inline-flex items-center gap-1">
                                        Weiterlesen
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="px-6 py-3 bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors">
                            Alle News anzeigen
                        </button>
                    </div>
                </div>
            </section>

            {/* Partner */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Unsere Partner
                        </h2>
                        <p className="text-gray-600">
                            Starke Partnerschaften für deine Zukunft
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-200 p-6 flex items-center justify-center h-24 hover:border-blue-700 transition-colors">
                                <div className="text-gray-400 font-semibold text-sm">Partner {i + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="text-lg font-bold mb-4">HTL Kaindorf</h4>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Technische Ausbildung im Herzen der Südsteiermark. Leistung mit Menschlichkeit.
                            </p>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Grazer Straße 202, 8430 Leibnitz</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>050 248 067</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>office@htl-kaindorf.at</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-base font-bold mb-4">Schnellzugriff</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">WebUntis</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Moodle</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Schulkalender</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-base font-bold mb-4">Ausbildung</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Informatik</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Mechatronik</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Automatisierung</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Robotik</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-base font-bold mb-4">Folge uns</h4>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <Globe className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <p>&copy; 2025 HTL Kaindorf. Alle Rechte vorbehalten.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Impressum</a>
                            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
                            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;