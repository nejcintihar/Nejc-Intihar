import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col">
      <h1 className="text-7xl font-extrabold">
        Hello I'm{" "}
        <span className="bg-gradient-to-r from-[#008F8C] via-[#0CABA8] to-[#0FC2C0] bg-clip-text text-transparent">
          Nejc
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Hey everyone! Check out my projects! <br />
        This was built with NextJS & Sanity!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
        {projects.map((project) => (
          <Link
            key={project._id}
            className="border border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-[#008F8C] transition"
            href={`/projects/${project.slug}`}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-slate-900"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-[#008F8C] via-[#0CABA8] to-[#0FC2C0] bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
