import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="group relative glass-card cursor-pointer transition-all duration-500 rounded-3xl shadow-xl"
    whileHover={{ y: -10, scale: 1.02 }}
    onClick={() => onClick(project)}
  >
    <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
      <project.icon className="w-16 h-16 text-white/80" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-sm mb-4 line-clamp-2">{project.description}</p>
      <div className="flex space-x-3">
        <a
          href={project.liveUrl}
          className="flex items-center space-x-1 text-purple-400 text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live</span>
        </a>
        <a
          href={project.githubUrl}
          className="flex items-center space-x-1 text-gray-400 text-sm"
        >
          <Github className="w-4 h-4" />
          <span>Code</span>
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
