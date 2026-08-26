import Image from "next/image";

export default function ProjectCard({
  project,
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">

      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-500 mt-2">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          className="inline-block mt-4 text-purple-600 font-semibold"
        >
          View Project →
        </a>

      </div>

    </div>
  );
}