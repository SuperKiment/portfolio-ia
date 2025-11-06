'use client';
import React, { useState } from 'react';
import Home from './HomeSection';
import About from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Navbar from './Navbar';

import { motion } from 'framer-motion';

export default function Portfolio() {
    const [page, setPage] = useState(0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
            <Navbar setPage={setPage} />
            <div className="pt-20">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${page * 100}vw)` }}
                >
                    <motion.div
                        className="flex h-full"
                        animate={{ x: `-${page * 100}vw` }}
                        transition={{
                            ease: [0.4, 0.0, 0.2, 1], // cubic-bezier douce (équivalent easeInOut standard)
                            duration: 0.9,
                        }}
                    >
                        <Home setPage={setPage} />
                        <About setPage={setPage} />
                        <ProjectsSection setPage={setPage} />
                        <ContactSection setPage={setPage} />
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}