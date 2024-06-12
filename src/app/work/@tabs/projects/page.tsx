import Chip from "@/components/UI/Chip";
import { H2, H3, P } from "@/components/UI/Typography";
import { experience, projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ExternalLink } from "react-feather";

const ProjectsPage = () => {
  return (
    <>
      <H2>Projects</H2>
      <ul role="group" className="flex flex-col gap-12">
        {projects.work.map((project) => (
          <li
            key={project.name}
            className="grid lg:grid-cols-[2fr_3fr] grid-cols-1 lg:gap-8 gap-4 items-center"
          >
            <div className="relative w-full aspect-[1440/800] rounded-lg overflow-hidden border">
              <Image src={project.image} alt={project.name} fill />
            </div>
            <div className="">
              <H3 className="mb-1">
                <Link
                  href={project.href}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex gap-1 items-start"
                >
                  <span className="border-b-2 border-transparent hover:primary-border">
                    {project.name}
                  </span>
                  <ExternalLink size={14} />
                </Link>
              </H3>
              <P>{project.description}</P>
              <div className="">
                {project.stack.map((s) => (
                  <Chip key={s} label={s} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsPage;
