import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ProjectModal } from './components/ProjectModal';
import { projects, Project } from './data/projects';
import { motion } from 'framer-motion';
export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="max-w-2xl">

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900">
              Selected Works
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              My works that describe the list of my skills
            </p>
          </motion.div>
        </div>

        <PortfolioGrid
          projects={projects}
          onProjectClick={setSelectedProject} />

      </main>

      <footer className="border-t border-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © 2026 Vlad Baragan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.upwork.com/freelancers/~01151f7e524d5c303a?mp_source=share"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Upwork
            </a>
            <a
              href="https://github.com/Vitalizatr"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} />

    </div>);

}