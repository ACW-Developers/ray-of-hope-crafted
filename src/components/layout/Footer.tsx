import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logos/logo2.png";

const quickLinks = [
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Projects", path: "/projects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Donate", path: "/donate" },
  { name: "Contact", path: "/contact" },
];

const programs = [
  "Education Support",
  "Child Protection",
  "Mentorship",
  "Community Empowerment",
  "Refugee Camp Support",
];

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-md bg-card p-1.5">
              <img src={logo} alt="Imbuto of Hope International logo" className="h-full w-full object-contain" />
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-bold">Imbuto of Hope</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] opacity-70">International</span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-75">
            Rebuilding lives and restoring hope for orphaned and vulnerable children across East and
            Central Africa through sustainable community programs.
          </p>
          <ul className="mt-6 flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-surface-dark-foreground/20 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="lg:col-span-2" aria-label="Footer">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Explore</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="link-underline text-sm opacity-85 hover:opacity-100">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Programs</h3>
          <ul className="mt-5 space-y-3">
            {programs.map((p) => (
              <li key={p}>
                <Link to="/programs" className="link-underline text-sm opacity-85 hover:opacity-100">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3 opacity-85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> East & Central Africa Region
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href="mailto:info@rayofhope.org" className="link-underline opacity-85 hover:opacity-100">
                info@rayofhope.org
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href="https://wa.me/15207361677" className="link-underline opacity-85 hover:opacity-100">
                +1 (520) 736-1677
              </a>
            </li>
          </ul>
          <Link
            to="/donate"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
          >
            Become a sponsor <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-surface-dark-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Imbuto of Hope International. All rights reserved.</p>
          <p>Every child matters. Every life counts.</p>
        </div>
      </div>
    </footer>
  );
};
