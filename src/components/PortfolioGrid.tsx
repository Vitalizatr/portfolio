import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
interface PortfolioGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}
export function PortfolioGrid({
  projects,
  onProjectClick
}: PortfolioGridProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

        {projects.map((project) =>
        <motion.div
          key={project.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 20
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
          className="break-inside-avoid">

            <ProjectCard project={project} onClick={onProjectClick} />
          </motion.div>
        )}
      </motion.div>
    </div>);

}