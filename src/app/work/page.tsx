import { FC } from "react";
import { ExternalLink } from "react-feather";

import Chip from "@/components/UI/Chip";
import { H1, H2, P } from "@/components/UI/Typography";
import { experience } from "@/constants";

interface Props {}

const WorkPage: FC<Props> = () => {
  return (
    <div>
      <section className="mb-14">
        <H1>Work</H1>
        <P>
          I have spent two years honking my skills. My passion for bulding web
          applications and user interfaces led me to improve my ReactJS game,
          allowing me to create dynamic applications. I have also hands on
          experience with NodeJS, ExpressJS and MongoDB.
        </P>
      </section>
      <section>
        <H2>Experience</H2>
        <ul role="group">
          {experience.map((e) => (
            <li
              key={e.companyName}
              className="grid md:grid-cols-[1fr_2fr] mb-8"
            >
              <div>
                <p className="hidden md:block">
                  {e.startDate} - {e.endDate}
                </p>
              </div>
              <div>
                <div className="mb-4">
                  <h4 className="font-medium">{e.position}</h4>
                  <p className="text-sm font-light italic flex items-center gap-1 opacity-80">
                    <a
                      href={e.companyWebsite}
                      target="_blank"
                      className="flex items-center gap-1"
                    >
                      {e.companyName}
                      <ExternalLink size={14} />
                    </a>
                  </p>
                  <p className="md:hidden text-xs font-light opacity-80">
                    {e.startDate} - {e.endDate}
                  </p>
                </div>
                <p className="mb-4">{e.description}</p>
                <div>
                  {e.tech.map((t) => (
                    <Chip key={t} label={t} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default WorkPage;
