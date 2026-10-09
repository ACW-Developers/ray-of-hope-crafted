import { motion } from "framer-motion";
import { Sparkles, User, Users } from "lucide-react";
import nkundaFaustin from "@/assets/team/nkunda-faustin.jpeg";
import TeamMember from "@/assets/team/Team1.jpeg";
import TeamMember2 from "@/assets/team/Team2.jpeg";

const teamMembers = [
  {
    name: "Nkunda Faustin",
    role: "Chairman",
    photo: nkundaFaustin,
    bio: "Provides leadership and direction for Imbuto of Hope International, guiding our commitment to children and communities across East and Central Africa.",
  },
  {
    name: "Nelly Muhorakeye",
    role: "Secretary General",
    photo: TeamMember,
    bio: "Coordinates organizational activities and communication, ensuring effective collaboration and smooth implementation of our mission.",
  },
  {
    name: "Nathanael Mugenza",
    role: "Treasurer",
    photo: TeamMember2,
    bio: "Manages the financial resources of Imbuto of Hope International, ensuring transparency and accountability in all fiscal matters.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

export const Team = () => (
  <section className="bg-background py-20 sm:py-24 lg:py-28" aria-labelledby="team-title">
    <div className="container-page">
      <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          <Users className="h-4 w-4" aria-hidden="true" /> Our Team
        </p>
        <h2 id="team-title" className="text-title mt-5 text-foreground">
          The people behind the promise
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Lasting change begins with accountable people. Our leadership team guides every program
          with care, integrity, and a shared commitment to serve.
        </p>
      </motion.div>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map(({ name, role, photo, bio }, index) => (
          <motion.li
            key={`${name}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group flex overflow-hidden rounded-md border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-medium"
          >
            <div className="flex w-full flex-col">
              <div className="relative aspect-[5/5] overflow-hidden bg-muted">
                {photo ? (
                  <img
                    src={photo}
                    alt={`${name}, ${role}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-b border-dashed border-border">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <User className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Profile pending
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6 text-center">
                <h3 className="text-lg font-bold text-foreground">{name}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">{role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{bio}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

    </div>
  </section>
);
