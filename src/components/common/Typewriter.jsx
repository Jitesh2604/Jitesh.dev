import { useTypewriter } from "../../hooks/useTypewriter";

const Typewriter = ({ words, loop }) => {
  const text = useTypewriter(words, loop);
  return (
    <p className="text-xl md:text-2xl text-gray-300 min-h-[2rem]">
      {text}<span className="text-purple-400">|</span>
    </p>
  );
};

export default Typewriter;
