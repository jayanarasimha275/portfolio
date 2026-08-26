import skills from "@/data/skills";
import SkillBar from "../ui/SkillBar";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-10 lg:px-20 bg-slate-50"
    >
      <h2 className="text-5xl font-bold mb-12">
        Skills
      </h2>

      {skills.map((skill) => (
        <SkillBar
          key={skill.name}
          skill={skill}
        />
      ))}
    </section>
  );
}