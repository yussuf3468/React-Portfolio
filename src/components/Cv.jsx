import React from 'react';
import { motion } from 'framer-motion';
import { usePDF } from 'react-to-pdf';

const Cv = () => {
    const { toPDF, targetRef } = usePDF({
        filename: 'yussuf-muse-cv.pdf',
        page: { margin: 20, format: 'A4' },
    });

    // Full CV data - replace with your actual data
    const cvData = {
        name: 'Yussuf Hassan Muse',
        title: 'Full-Stack Developer',
        contact: {
            email: 'Yussufh080@gmail.com', // Replace with your email
            phone: '+254769484646', // Replace with your phone number
            linkedin: 'https://www.linkedin.com/in/yussuf-h-muse-a10362336/', // Replace with your LinkedIn
            github: 'https://github.com/yussuf3468', // Replace with your GitHub
            location: 'Nairobi, Kenya', // Replace with your location
        },
        summary:
            'Full-stack developer with a passion for creating impactful applications. Skilled in React, Node.js, and SQL, with a strong desire to learn and master advanced technologies. Currently pursuing an Advanced Diploma in Software Engineering from Aptech Education.',
        experience: [
            {
                company: 'Freelance',
                position: 'Full-Stack Developer',
                period: '2023 - Present',
                achievements: [
                    'Developed custom web applications using React and Node.js',
                    'Integrated third-party APIs to enhance functionality',
                    'Implemented secure user authentication with JWT and bcrypt',
                ],
            },
        ],
        education: [
            {
                institution: 'Aptech Education',
                degree: 'Advanced Diploma in Software Engineering',
                period: '2023 - Present',
            },
            {
                institution: 'IGCSE',
                degree: 'International General Certificate of Secondary Education',
                period: '2019 - 2023',
            },
            {
                institution: 'Primary Education',
                degree: 'KCPE (Kenya Certificate of Primary Education)',
                period: '2012 - 2019',
            },
        ],
        skills: [
            'React',
            'Node.js',
            'JavaScript',
            'SQL',
            'HTML',
            'CSS',
            'JWT',
            'bcrypt',
            'API Integration',
            'Git',
            'Docker',
        ],
        projects: [
            {
                name: 'Odyssey Travel',
                description:
                    'A travel app built with React and Node.js, with features like user authentication, booking system, and a user-friendly interface.',
                techStack: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express'],
            },
            {
                name: 'E-Commerce Platform',
                description:
                    'An online shopping platform with features like product search, shopping cart, and total price calculation.',
                techStack: ['React', 'Node.js', 'MongoDB'],
            },
            {
                name: 'Skyline Estates',
                description: 'A real estate website showcasing property listings and a contact form for inquiries.',
                techStack: ['HTML', 'CSS'],
            },
            {
                name: 'Portfolio Website',
                description:
                    'Personal portfolio website featuring smooth animations, responsive design, and interactive elements.',
                techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
            },
            {
                name: 'Weather App',
                description:
                    'A weather application that displays the current weather, temperature, and forecast for any location.',
                techStack: ['React', 'API Integration'],
            }
        ],
        languages: ['English', 'Somali', 'Swahili'],
        certifications: [
            'Aptech Advanced Diploma in Software Engineering (In Progress)',
            'Full-Stack Web Development Bootcamp (Coursera)',
        ],
        hobbies: [
            'Learning advanced web technologies',
            'Math problems and problem-solving',
            'Reading and exploring deep philosophical topics',
        ],
        references: 'Available upon request.',
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            className="min-h-screen mt-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8 md:p-12 lg:p-16"
        >
            <div className="max-w-6xl mx-auto">
                {/* CV Content */}
                <div ref={targetRef} className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <h1 className="text-4xl font-bold mb-2">{cvData.name}</h1>
                                <p className="text-xl opacity-90">{cvData.title}</p>
                            </div>
                            <div className="mt-4 md:mt-0 text-center md:text-right">
                                <p className="text-sm opacity-85">{cvData.contact.location}</p>
                                <p className="text-sm opacity-85">{cvData.contact.phone}</p>
                                <p className="text-sm opacity-85">{cvData.contact.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div className="lg:col-span-2">
                            <motion.section {...fadeIn}>
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Summary</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{cvData.summary}</p>
                            </motion.section>

                            <motion.section {...fadeIn} className="mt-8">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Experience</h2>
                                {cvData.experience.map((exp, index) => (
                                    <div key={index} className="mb-6">
                                        <h3 className="text-lg font-semibold">{exp.company}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            {exp.position} | {exp.period}
                                        </p>
                                        <ul className="list-disc list-inside mt-2 space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="text-gray-600 dark:text-gray-300">
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </motion.section>

                            <motion.section {...fadeIn} className="mt-8">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Projects</h2>
                                {cvData.projects.map((project, index) => (
                                    <div key={index} className="mb-6">
                                        <h3 className="text-lg font-semibold">{project.name}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.section>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-1">
                            <motion.section {...fadeIn}>
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Education</h2>
                                {cvData.education.map((edu, index) => (
                                    <div key={index} className="mb-6">
                                        <h3 className="font-semibold">{edu.institution}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                                    </div>
                                ))}
                            </motion.section>

                            <motion.section {...fadeIn} className="mt-8">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {cvData.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.section>

                            <motion.section {...fadeIn} className="mt-8">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Languages</h2>
                                <div className="flex flex-wrap gap-2">
                                    {cvData.languages.map((language, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                                        >
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            </motion.section>

                            <motion.section {...fadeIn} className="mt-8">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Hobbies</h2>
                                <ul className="list-disc list-inside">
                                    {cvData.hobbies.map((hobby, index) => (
                                        <li key={index} className="text-gray-600 dark:text-gray-300">{hobby}</li>
                                    ))}
                                </ul>
                            </motion.section>

                            <motion.section {...fadeIn} className="mt-8">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Certifications</h2>
                                <ul className="list-disc list-inside">
                                    {cvData.certifications.map((cert, index) => (
                                        <li key={index} className="text-gray-600 dark:text-gray-300">{cert}</li>
                                    ))}
                                </ul>
                            </motion.section>

                            <motion.section {...fadeIn} className="mt-8">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">References</h2>
                                <p className="text-gray-600 dark:text-gray-300">{cvData.references}</p>
                            </motion.section>
                        </div>
                    </div>

                    <div className="p-8 flex justify-center">
                        <button
                            onClick={toPDF}
                            className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                        >
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Cv;
