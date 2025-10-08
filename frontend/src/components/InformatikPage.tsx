
import { CheckCircle, Users, Code, Database, Globe, Shield, Brain, Briefcase, GraduationCap, Clock, Mail, Phone} from "lucide-react";

const InformatikPage = () => {

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section id="overview" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 rounded text-sm font-medium mb-6">
                                Größte Abteilung der Schule
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                                Informatik
                            </h1>
                            <h2 className="text-2xl text-gray-600 mb-8 font-light">
                                Softwareengineering und Management
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Die Abteilung Informatik ist die zahlenmäßig größte an unserer Schule.
                                Unser Fokus liegt auf Softwareentwicklung und Entrepreneurship.
                                Schon im ersten Jahrgang beginnt unser praxisorientierter Unterricht mit dem
                                Programmieren in Kleingruppen.
                            </p>

                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                                    <div className="text-sm text-gray-600">Jahre Ausbildung</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
                                    <div className="text-sm text-gray-600">Vertiefungen</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                                    <div className="text-sm text-gray-600">Partner</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                                alt="Informatik Labor"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Kompetenzen */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Kompetenzbereiche</h2>
                        <p className="text-lg text-gray-600">Fundierte Ausbildung in allen Bereichen der modernen Informatik</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Code className="w-7 h-7" />, title: "Softwareentwicklung", desc: "Von Grundlagen bis zu komplexen Enterprise-Anwendungen" },
                            { icon: <Globe className="w-7 h-7" />, title: "Web & Mobile", desc: "Moderne Webtechnologien und App-Development" },
                            { icon: <Database className="w-7 h-7" />, title: "Datenbanken", desc: "Design, Implementierung und Management von Datenbanksystemen" },
                            { icon: <Shield className="w-7 h-7" />, title: "Cyber Security", desc: "IT-Sicherheit und Schutz vor digitalen Bedrohungen" },
                            { icon: <Brain className="w-7 h-7" />, title: "Künstliche Intelligenz", desc: "Machine Learning und KI-Anwendungen" },
                            { icon: <Briefcase className="w-7 h-7" />, title: "IT-Management", desc: "Projektleitung und unternehmerisches Denken" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 border border-gray-200">
                                <div className="w-14 h-14 bg-gray-100 flex items-center justify-center text-gray-900 mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vertiefungen */}
            <section id="specializations" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Vertiefungsrichtungen</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Ab dem vierten Jahrgang wählen unsere Studierenden ihre Spezialisierung
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white border border-gray-200 overflow-hidden group hover:border-gray-400 transition-colors">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop"
                                    alt="Game Development"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Game Development and Simulation
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Entwicklung von Spielen und Simulationen mit modernen Game Engines und 3D-Technologien
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 overflow-hidden group hover:border-gray-400 transition-colors">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
                                    alt="Business"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Business Organisation and Leadership
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Management, Unternehmensführung und betriebswirtschaftliche Kompetenzen für IT-Profis
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 overflow-hidden group hover:border-gray-400 transition-colors">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
                                    alt="Security"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Ethical Hacking and Security
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Cyber Security, Penetration Testing und Schutz vor digitalen Bedrohungen
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 overflow-hidden group hover:border-gray-400 transition-colors">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
                                    alt="UI/UX"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    User Interface Design and Experience
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Moderne UI/UX-Gestaltung für Web- und Mobile-Anwendungen
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ausbildung */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                alt="Unterricht"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Ausbildung</h2>
                            <div className="space-y-5">
                                {[
                                    "Fundierte Allgemeinbildung",
                                    "Technischer Fokus mit Programmieren, Datenbanken und Netzwerktechnik",
                                    "Kaufmännischer Fokus mit Betriebswirtschaft, Recht und Management",
                                    "Wahlpflichtfächer mit aktuellen Themen",
                                    "Soft Skills und Präsentationstechniken",
                                    "Möglichkeit zur Wahl einer Englisch-Schwerpunktklasse"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Besonderheiten */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Was uns auszeichnet</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Permanente Anpassung an die Erfordernisse von Industrie und Wirtschaft",
                            "Praxisorientiertes Abwickeln von Softwareprojekten mit Firmen",
                            "Intensive Wirtschaftskontakte durch Firmenbesuche und Fachvorträge",
                            "Teamteaching und optimierte Gruppengrößen",
                            "Erfolgreiche Teilnahme an Wettbewerben",
                            "Erlangen von Englisch- und Industriezertifikaten",
                            "Schulinterne Jobmesse mit über 100 potenziellen Arbeitgebern",
                            "Unterstützung bei Start-ups",
                            "Individualisierung durch Förderkurse und Begabtenförderung"
                        ].map((item, index) => (
                            <div key={index} className="p-6 border border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lehrplan */}
            <section id="curriculum" className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Lehrplan</h2>
                        <p className="text-lg text-gray-600">
                            Übersicht über die technischen Fächer
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Fach</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">I</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">II</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">III</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">IV</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">V</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="px-8 py-5 text-sm font-medium text-gray-900">Programmieren und Software Engineering</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">C-Programmierung</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Java OOP</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">GUI + DB</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Parallele Progr.</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Aktuelle Tech.</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-8 py-5 text-sm font-medium text-gray-900">Datenbanken und Informationssysteme</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Office-Apps</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Desktop-DB</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Oracle SQL</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Komplexe DB</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Big Data</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-8 py-5 text-sm font-medium text-gray-900">Netzwerksysteme und Cyber Security</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">—</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Netzwerk-Basics</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Administration</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Security</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">—</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-8 py-5 text-sm font-medium text-gray-900">Webprogrammierung und Mobile Computing</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">—</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">HTML/CSS/JS</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Webapps</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Mobile Apps</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">Enterprise</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-5 text-sm font-medium text-gray-900">Data Science und Artificial Intelligence</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">—</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">—</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">—</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">ML Basics</td>
                                    <td className="px-6 py-5 text-sm text-gray-600 text-center">KI Ethics</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Karriere */}
            <section id="careers" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Karrierechancen</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Unseren Absolventinnen und Absolventen stehen alle Türen offen
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            { title: "Softwareentwickler", desc: "Desktop-, Web- und Mobile-Anwendungen", icon: <Code className="w-6 h-6" /> },
                            { title: "Projektleiter", desc: "Leitung von IT-Projekten und Teams", icon: <Users className="w-6 h-6" /> },
                            { title: "Datenbankdesigner", desc: "Konzeption und Optimierung", icon: <Database className="w-6 h-6" /> },
                            { title: "Netzwerkadministrator", desc: "IT-Infrastruktur und Sicherheit", icon: <Globe className="w-6 h-6" /> },
                            { title: "IT-Consultant", desc: "Beratung und Strategieentwicklung", icon: <Briefcase className="w-6 h-6" /> },
                            { title: "Entrepreneur", desc: "Gründung eigener Unternehmen", icon: <GraduationCap className="w-6 h-6" /> }
                        ].map((career, index) => (
                            <div key={index} className="p-8 border border-gray-200">
                                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-gray-900 mb-6">
                                    {career.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{career.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{career.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-gray-50 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Studium</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>Anrechnung bis zu 3 Semester</li>
                                <li>Optimaler Studienstart durch fundierte Ausbildung</li>
                                <li>Ing.-Titel nach 3 Jahren Berufserfahrung</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-gray-50 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Karriere-Support</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>Recruiting Day mit über 100 Unternehmen</li>
                                <li>Start-up Unterstützung</li>
                                <li>Entrepreneurship-Programme</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für deine IT-Zukunft?
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Starte deine Karriere in der größten Informatik-Abteilung der Steiermark
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <button className="bg-white text-gray-900 px-8 py-4 rounded hover:bg-gray-100 transition-colors">
                            Jetzt anmelden
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-gray-900 transition-colors">
                            Tag der offenen Tür
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
                        <div className="text-center">
                            <Clock className="w-6 h-6 text-gray-400 mx-auto mb-3" />
                            <div className="text-gray-400 text-sm mb-1">Tag der offenen Tür</div>
                            <div className="text-white font-medium">31.1. & 1.2.2025</div>
                        </div>
                        <div className="text-center">
                            <Phone className="w-6 h-6 text-gray-400 mx-auto mb-3" />
                            <div className="text-gray-400 text-sm mb-1">Telefon</div>
                            <div className="text-white font-medium">050 248 067</div>
                        </div>
                        <div className="text-center">
                            <Mail className="w-6 h-6 text-gray-400 mx-auto mb-3" />
                            <div className="text-gray-400 text-sm mb-1">E-Mail</div>
                            <div className="text-white font-medium">office@htl-kaindorf.at</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
);
};

export default InformatikPage;