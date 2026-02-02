import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      className="mb-8 break-inside-avoid cursor-pointer group"
      onClick={() => onClick(project)}
      whileHover={{
        y: -4
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}>

      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <motion.img
          layoutId={`image-${project.id}`}
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto object-cover transform transition-transform duration-500 will-change-transform group-hover:scale-105"
          loading="lazy" />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">{project.category}</p>
      </div>
    </motion.div>);

}