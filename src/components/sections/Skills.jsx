import { skills } from "../../data/skills";
import SkillSticker from "../skills/SkillsSticker";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <SkillSticker key={i} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
