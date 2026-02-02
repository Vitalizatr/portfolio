import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '../data/projects';
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);
  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  return (
    <AnimatePresence>
      {project &&
      <>
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xl"
          onClick={onClose} />


          <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-none">
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-12">
              <motion.div
              layoutId={`card-${project.id}`}
              className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}>

                <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-black/5 text-gray-900 transition-colors backdrop-blur-sm"
                aria-label="Close modal">

                  <X size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative bg-gray-50">
                    <motion.img
                    layoutId={`image-${project.id}`}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[400px] md:min-h-[600px]" />

                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
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
                      delay: 0.2,
                      duration: 0.4
                    }}>

                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mb-6">
                        {project.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-lg mb-8">
                        {project.description}
                      </p>

                      <div className="space-y-4 border-t border-gray-100 pt-8">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Year</span>
                          <span className="font-medium text-gray-900">
                            {project.year}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Client</span>
                          <span className="font-medium text-gray-900">
                            {project.from}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Role</span>
                          <span className="font-medium text-gray-900">
                            {project.role}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      }
    </AnimatePresence>);

}