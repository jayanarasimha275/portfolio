export default function SkillBar({ skill }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>

      <div className="w-full bg-gray-200 h-3 rounded-full">
        <div
          className="bg-purple-600 h-3 rounded-full"
          style={{
            width: `${skill.level}%`,
          }}
        />
      </div>
    </div>
  );
}