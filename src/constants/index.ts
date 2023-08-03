import { GitHub, Linkedin, Mail, Twitter } from "react-feather";

export const navLinks = [
  {
    name: "home",
    title: "Home",
    href: "/",
  },
  {
    name: "blog",
    title: "Blog",
    href: "/blog",
  },
  {
    name: "work",
    title: "Work",
    href: "/work",
  },
  {
    name: "space",
    title: "Space",
    href: "/space",
  },
];

export const socialLinks = [
  {
    name: "github",
    title: "Github",
    href: "https://github.com/kisankumavat85",
    Icon: GitHub,
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/kisan-kumavat-966186190/",
    Icon: Linkedin,
  },
  {
    name: "twitter",
    title: "Twitter",
    href: "https://twitter.com/KisanKumavat8",
    Icon: Twitter,
  },
  {
    name: "email",
    title: "Email",
    href: "mailto:kisankumavat85@gmail.com",
    Icon: Mail,
  },
];

export const experience = [
  {
    startDate: "Feb 2023",
    endDate: "Present",
    companyName: "Fullness Web Soluctions",
    companyWebsite: "https://www.fullness.io/",
    position: "Software Engineer",
    description:
      "Integrated multiple new features in KeystoneJS for client to 2x their CMS workflow. Build multiple landing pages for new agencies. Revamped the company's website using RemixJS and Styled components.",
    tech: [
      "ReactJS",
      "RemixJS",
      "NextJS",
      "Typescript",
      "KeystoneJS",
      "Styled Components",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    startDate: "Aug 2021",
    endDate: "Jan 2023",
    companyName: "Green Apex Technolabs",
    companyWebsite: "https://www.green-apex.com/",
    position: "Junior Software Engineer",
    description:
      "Developed, maintained and shipped production code for multiple projects including the company's own in-house product xpro.ai.",
    tech: [
      "ReactJS",
      "NextJS",
      "Typescript",
      "Redux",
      "Material UI",
      "Styled Components",
      "Formik",
      "Yup",
    ],
  },
];
