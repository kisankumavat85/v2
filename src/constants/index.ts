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
    endDate: "Mar 2024",
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

export const books = [
  {
    name: "Just Keep Buying",
    authore: "Maggiulli Nick",
    ISBN: ["9789394407008", "9394407006"],
    genre: "Business & Economics",
    language: "English",
  },
  {
    name: "The Boy in the Striped Pyjamas",
    authore: "Boyne John",
    ISBN: ["9780099572862", "9780099572862"],
    genre: "Juvenile Fiction",
    language: "English",
  },
  {
    name: "The Rudest Book Ever",
    authore: "Gangwar Shwetabh",
    ISBN: ["9388754433", "9789388754439"],
    genre: "Self Help",
    language: "English",
  },
  {
    name: "How I quit Google to sell Samosas",
    authore: "Munaf Kapadia",
    ISBN: ["9789354222573", "9354222579"],
    genre: "Biography & Autobiography",
    language: "English",
  },
];

export const themes = [
  "default",
  "lavender",
  "charleston-green",
  "raisin-black",
  "charcoal-theme",
  "theme-x",
  "crayola-yellow",
];

export const projects = {
  work: [
    {
      name: "Cimet",
      description:
        "CIMET is a leading provider of white-label comparison platforms designed to help customers find the best deals on energy, solar, broadband, and mobile services",
      stack: ["Remix.js", "Keystone.js", "Tailwind CSS"],
      href: "https://www.cimet.com.au/",
      image: "/cimet.webp",
    },
    {
      name: "Lnk8",
      description:
        "Lnk8 is a URL shortener that allows you to transform long URLs into shorter, more manageable links.",
      stack: [
        "Next.js",
        "Keystone.js",
        "Styled Components",
        "Cloudflare Workers",
      ],
      href: "https://lnk8.co/",
      image: "/lnk8.webp",
    },
    {
      name: "Fullness.io",
      description:
        "The best utility comparison and management system that you can provide to your customers.",
      stack: ["Remix.js", "Keystone.js", "Styled Components", "AWS S3"],
      href: "https://www.fullness.io/",
      image: "/fullness.webp",
    },
    {
      name: "Upsyz",
      description:
        "Upsyz is a content creation and marketing company that specializes in providing high-quality, engaging content crafted by expert writers.",
      stack: ["Remix.js", "Keystone.js", "Styled Components", "AWS S3"],
      href: "https://www.fullness.io/",
      image: "/upsyz.webp",
    },
  ],
  personal: [
    {
      name: "Small link",
      description:
        "Small link is a simple URL shorting web app. Where you can see analytics like clicks, clicks by time, countries, browsers, OS.",
      stack: ["Next.js", "Cloudflare Workers", "Tailwind CSS", "Next Auth"],
      href: "https://yslp.vercel.app/",
      image: "/small-link.webp",
    },
  ],
};
