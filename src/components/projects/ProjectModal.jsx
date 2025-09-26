import { motion } from "framer-motion";
import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-gray-900 rounded-3xl max-w-lg p-6 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X />
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
