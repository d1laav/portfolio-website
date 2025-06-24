import { useState } from "react";

const organizationData = [
  {
    date: "24 Nov 2021",
    title: "Joined Student Council",
    desc: "Organized events and led weekly meetings.",
  },
  {
    date: "23 Nov 2021",
    title: "Tech Club Member",
    desc: "Built internal tools and contributed to workshops.",
  },
  {
    date: "22 Nov 2021",
    title: "Volunteer Program",
    desc: "Participated in local community service.",
  },
  {
    date: "21 Nov 2021",
    title: "Hackathon Finalist",
    desc: "Created a mental health app with a team.",
  },
  {
    date: "20 Nov 2021",
    title: "Intern at XYZ Org",
    desc: "Assisted in backend development.",
  },
];

export const OrganizationSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="organization" className="bg-organization py-52 px-4 bg-background text-foreground min-h-screen snap-start">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Organization <span className="text-primary">Timeline</span>
        </h2>

        <div className="relative border-l-2 border-primary">
          {organizationData.map((item, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              {/* Bullet */}
              <div className="absolute -left-[8px] w-4 h-4 rounded-full border-2 bg-background border-yellow-400 z-10 flex items-center justify-center">
                {activeIndex === index && (
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                )}
              </div>

              {/* Content */}
              <div className="ml-3">
                <p className="text-primary text-xs mb-0.5">{item.date}</p>
                <p className="text-sm md:text-base font-medium leading-tight">{item.title}</p>

                {activeIndex === index && (
                  <div className="mt-1.5 flex items-start bg-card border border-yellow-500 rounded-md px-3 py-2 relative">
                    <div className="absolute -left-2 top-3 w-3 h-3 bg-card border-l border-t border-yellow-500 transform rotate-45" />
                    <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
