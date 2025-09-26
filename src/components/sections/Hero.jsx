import Typewriter from "../common/Typewriter";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m <span className="text-purple-400">Jitesh</span></h1>
      <Typewriter words={["Frontend Engineer", "React Developer", "Animation Lover", "Creative Coder"]} loop />
      <div className="flex space-x-4 mt-6">
        <a href="#projects" className="px-6 py-3 bg-purple-500 rounded-xl hover:bg-purple-600">View Projects</a>
        <a href="#contact" className="px-6 py-3 border border-purple-400 rounded-xl hover:bg-purple-400 hover:text-black">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
