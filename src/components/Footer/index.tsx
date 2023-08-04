import Link from "next/link";
import { AtSign } from "react-feather";

import { navLinks, socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer
      className="border-t border-line flex items-center"
      role="navigation"
    >
      <div className="flex flex-col items-center gap-4 w-full p-8">
        <div>
          {
            <ul className="flex gap-8">
              {navLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white opacity-60 hover:opacity-100"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          }
        </div>
        <div>
          <ul role="group" className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  className="text-white opacity-60 hover:opacity-100"
                  href={link.href}
                  target="_blank"
                >
                  <link.Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="group flex items-center text-white opacity-60 hover:opacity-100">
          <a href="mailto:kisankumavat85@gmail.com">kisankumavat85@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
