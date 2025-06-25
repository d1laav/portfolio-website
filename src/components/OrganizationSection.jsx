import { useState } from "react";

const organizationData = [
  {
    date: "January 2023 - September 2023",
    title: "Person In Charge (PIC) of Introduction to Informatics study program (PPIF)",
    desc: "Becoming the PIC for the study program introduction during the campus environment introduction activities",
    logo: "/icon/ppifUMNOG.png",
  },
  {
    date: "December 2023 - May 2024",
    title: "Website Coordinator (TV On Air 9.0)",
    desc: "Developed and created the official website for the TV On Air 9.0 event.",
    logo: "/icon/TVONAIR9.0.png",
  },
  {
    date: "February 2024 - February 2025",
    title: "Head Of Division IT & Website (UMN TV)",
    desc: "Leading the IT & Website division at UMN TV, overseeing website and always update the latest articles.",
    logo: "/icon/UMNTV.png",
  },
  {
    date: "August 2024 - September 2024",
    title: "Master Of Ceremony (MC) at Informatics Student Peak Night (Infinite 2024)",
    desc: "Served as the MC for the peak night event.",
    logo: "/icon/infiniteUMN.png",
  },
  {
    date: "February 2025 - Present",
    title: "Head Of Techincal Department (UMN TV)",
    desc: "Responsible for managing two technical work programs aimed at ensuring the smooth operation of UMN TV,",
    logo: "/icon/UMNTV.png",
  },
];

export const OrganizationSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="organization"
      className="bg-organization py-52 px-4 text-foreground min-h-screen flex justify-center items-center snap-start"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Organization <span className="text-primary">Experience</span>
        </h2>

        <div className="overflow-x-auto">
          <div className="relative flex items-start space-x-12 w-max px-10 pb-20">
            {/* Full timeline line */}
            <div className="absolute top-[78px] left-0 right-0 h-1 bg-primary z-0" />

            {organizationData.map((item, index) => (
              <div key={index} className="relative w-56 shrink-0 text-center z-10">
                {/* Logo */}
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-16 h-16 object-contain mx-auto mb-2"
                />

                {/* Bullet Button */}
                <div className="relative z-10 mb-2">
                  <button
                    onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                    className="w-4 h-4 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg hover:scale-115 transition"
                    >
                    {/* Jika ingin efek inner bulatan saat aktif */}
                    {activeIndex === index && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                </button>

                </div>

                {/* Text */}
                <p className="text-xs text-primary">{item.date}</p>
                <p className="text-sm font-medium">{item.title}</p>

                {/* Description */}
                {activeIndex === index && (
                  <div className="mt-4 bg-card border border-black rounded-md px-3 py-2 text-left text-sm text-muted-foreground shadow-md transition-all duration-300">
                    {item.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
