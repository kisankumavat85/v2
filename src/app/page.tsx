import Cards from "@/components/Cards";
import Articles from "@/components/Cards";
import { H1, P } from "@/components/UI/Typography";
import { socialLinks } from "@/constants";
import { getAllPostsMeta } from "@/utils";

// Removes email href
socialLinks.pop();

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <div>
      <section className="mb-14">
        <H1>Kisan Kumavat</H1>
        <P>
          Hello there! I am Kisan, a passionate Software engineer from India
          with a flair for crafting immersive web experiences.
        </P>
        <P>
          I have done an engineering degree in IT, and have 4 years of industry
          experience building web applications. I specialise in React, TypeScript and have
          experience working with Next.js, Remix.js and Express.js.
        </P>
        <div className="flex items-center gap-1">
          <span>Social Links:</span>
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
      <Cards posts={posts} sectionTitle="Current articles" />
    </div>
  );
}
