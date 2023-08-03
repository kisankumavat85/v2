import Articles from "@/components/Articles";
import { socialLinks } from "@/constants";

// Removes email href
socialLinks.pop();

export default function Home() {
  return (
    <div>
      <section className="mb-14">
        <h1 className="text-6xl text-primary font-bold mb-4">Kisan Kumavat</h1>
        <p className="mb-4">
          Hello there! I am Kisan, a passionate Software engineer from India
          with a flair for crafting immersive web experiences.
        </p>
        <p className="mb-4">
          I have done engineering degree in IT, and have 2 years of industry
          experience building web applications. I specialize in React, and have
          experience working with Typescript, Next.js, Remix.js and Express.js.
        </p>
        <div className="flex items-center gap-1">
          <span className="">Social Links:</span>
          <div role="group" className="flex gap-1">
            {socialLinks.map((link, i) => (
              <a
                className="relative h-10 w-10 flex items-center justify-center group transition-all hover:rotate-6"
                key={link.name}
                href={link.href}
                target="_blank"
              >
                <link.Icon
                  className="text-white transition-all duration-300 group-hover:text-primary"
                  size={20}
                />
                <span className="absolute h-full w-full rounded-full border border-transparent transition-all duration-300 group-hover:border-dashed group-hover:border-primary"></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Articles sectionTitle="Recent articles" />
    </div>
  );
}
