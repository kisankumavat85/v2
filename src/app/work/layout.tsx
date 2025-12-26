import { ReactNode } from "react";

import { H1, P } from "@/components/UI/Typography";
import Tab from "@/components/UI/Tabs/Tab";
import TabList from "@/components/UI/Tabs/TabList";
import TabPanel from "@/components/UI/Tabs/TabPanel";

type Props = {
  tabs: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <section className="mb-14">
        <H1>Work</H1>
        <P>
          I have spent four years honing my skills. My passion for building web
          applications and user interfaces led me to improve my ReactJS game,
          allowing me to create dynamic applications. I have also hands-on
          experience with NodeJS, ExpressJS and MongoDB.
        </P>
      </section>
      <section className="mb-12">
        <TabList>
          <Tab href="/work">Experience</Tab>
          <Tab href="/work/projects">Projects</Tab>
          <Tab href="/work/personal">Personal</Tab>
        </TabList>
        <TabPanel>{props.tabs}</TabPanel>
      </section>
    </div>
  );
};

export default Layout;
