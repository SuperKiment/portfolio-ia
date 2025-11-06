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
            <div>
                <div className="h-screen overflow-hidden">
                    <motion.div
                        className="flex h-full"
                        animate={{ x: `-${page * 100}vw` }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <section className="min-w-full h-full flex items-center justify-center"><Home setPage={setPage} /></section>
                        <section className="min-w-full h-full flex items-center justify-center"><ProjectsSection /></section>
                        <section className="min-w-full h-full flex items-center justify-center"><About /></section>
                        <section className="min-w-full h-full flex items-center justify-center"><ContactSection /></section>
                    </motion.div>
                </div>

            </div>

            <Footer />
        </div>
    );
}