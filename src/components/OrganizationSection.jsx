import { useState, useEffect, useRef } from "react";

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
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Drag to scroll logic
    useEffect(() => {
        const slider = scrollRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        if (!slider) return;

        const mouseDownHandler = (e) => {
            isDown = true;
            slider.classList.add("cursor-grabbing");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        const mouseLeaveHandler = () => {
            isDown = false;
            slider.classList.remove("cursor-grabbing");
        };
        const mouseUpHandler = () => {
            isDown = false;
            slider.classList.remove("cursor-grabbing");
        };
        const mouseMoveHandler = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; // scroll speed
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener("mousedown", mouseDownHandler);
        slider.addEventListener("mouseleave", mouseLeaveHandler);
        slider.addEventListener("mouseup", mouseUpHandler);
        slider.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            slider.removeEventListener("mousedown", mouseDownHandler);
            slider.removeEventListener("mouseleave", mouseLeaveHandler);
            slider.removeEventListener("mouseup", mouseUpHandler);
            slider.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return (
        <section
            id="organization"
            className="bg-organization py-24 md:py-52 px-2 md:px-4 text-foreground min-h-screen flex justify-center items-center snap-start"
        >
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
                    Organization{" "}
                    <span className="text-primary">Experience</span>
                </h2>

                <div
                    ref={scrollRef}
                    className="overflow-x-auto scrollbar-hide cursor-grab select-none"
                >
                    <div className="relative flex items-start space-x-6 md:space-x-12 w-max px-4 md:px-10 pb-16 md:pb-20">
						{/* Full timeline line */}
						<div className="absolute top-[70px] md:top-[94px] left-0 right-0 h-0.5 bg-primary z-0" />

						{organizationData.map((item, index) => (
							<div
								key={index}
								className="relative w-40 md:w-56 shrink-0 text-center z-10 group"
								onClick={() => {
									if (isMobile) {
										setActiveIndex(activeIndex === index ? null : index);
									}
								}}
							>
								{/* Logo */}
								<img
									src={item.logo}
									alt={item.title}
									className="w-14 h-14 md:w-20 md:h-20 object-contain mx-auto mb-2 drop-shadow-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
								/>

								{/* Bullet (tidak perlu button) */}
								<div className="relative z-10 mb-2">
									<div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg transition">
										<div className="w-2 h-2 bg-white rounded-full" />
									</div>
								</div>

								{/* Text */}
								<p className="text-xs md:text-sm text-primary">
									{item.date}
								</p>
								<p className="text-xs md:text-sm font-medium">
									{item.title}
								</p>

								{/* Description muncul saat hover */}
								<div
									className={`
                                    mt-2
                                    mx-auto
                                    max-w-xs md:max-w-md
                                    bg-card border border-black rounded-md px-2 md:px-3 py-2
                                    text-left text-xs md:text-sm text-muted-foreground shadow-md
                                    opacity-0 scale-95 pointer-events-none
                                    transition-all duration-300 ease-in-out
                                    z-20
                                    group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                                    ${isMobile && activeIndex === index ? 'opacity-100 scale-100 pointer-events-auto' : ''}
                                `}
								>
									{item.desc}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
