import DarkModeToggle from "../common/DarkModeToggle";

const Nav = () => {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide text-purple-400">Jitesh.dev</h1>
          <div className="flex items-center space-x-6">
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    );
  };
  
  export default Nav;