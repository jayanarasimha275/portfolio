import experience from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-10 lg:px-20"
    >
      <h2 className="text-5xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-8">

        {experience.map((item) => (
          <div
            key={item.company}
            className="border-l-4 border-purple-500 pl-6"
          >
            <h3 className="text-2xl font-semibold">
              {item.role}
            </h3>

            <p className="text-purple-600">
              {item.company}
            </p>

            <p className="text-gray-500">
              {item.duration}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}