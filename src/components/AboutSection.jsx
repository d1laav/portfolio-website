import CV from "@/assets/CV_David_Immanuel_Resner.pdf";
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Experienced Web Developer & Android Developer
                        </h3>
                        <p className="text-muted-foreground">
                            I have experience working on both front-end and back-end web projects. 
                            I’ve built responsive, accessible websites, handled API integrations, 
                            and developed features like user login, dashboards, and admin panels.
                        </p>
                        <p className="text-muted-foreground">
                            I use Jetpack Compose to build modern Android App and clean user interfaces. 
                            I’ve created apps with navigation, data integration, and interactive layouts 
                            using Compose.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cos-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a href={CV} download className="cos-button">
                                {" "}
                                Download CV
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};