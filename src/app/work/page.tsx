import { FC } from "react";
import { ExternalLink } from "react-feather";

import Chip from "@/components/UI/Chip";
import { experience } from "@/constants";

interface Props {}

const WorkPage: FC<Props> = (props) => {
  const {} = props;

  return (
    <div>
      <section className="mb-14">
        <h1 className="text-6xl text-primary font-bold mb-4">Work</h1>
        <p className="mb-16">
          I have spent two years honking my skills. My passion for bulding web
          applications and user interfaces led me to improve my ReactJS game,
          allowing me to create dynamic applications. I have also hands on
          experience with NodeJS, ExpressJS and MongoDB.
        </p>
        <div className="">
          <h2 className="text-2xl font-medium mb-6">Experience</h2>
          <ul role="group">
            {experience.map((e) => (
              <li key={e.companyName} className="grid grid-cols-[1fr_2fr] mb-8">
                <div className="">
                  <p className="font-light">
                    {e.startDate} - {e.endDate}
                  </p>
                </div>
                <div className="">
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
                  </div>
                  <p className="mb-4">{e.description}</p>
                  <div className="">
                    {e.tech.map((t) => (
                      <Chip key={t} label={t} />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
