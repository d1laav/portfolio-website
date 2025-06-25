import CV from "@/assets/CV_David_Immanuel_Resner.pdf";
import { Code, CodeXml, TabletSmartphone } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="bg-about py-52 px-4 relative min-h-screen snap-start">
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
                            I’ve built responsive, accessible websites, and developed features like user login, 
                            dashboards, and admin panels.
                        </p>
                        <p className="text-muted-foreground">
                        
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
                    <div className="grid grid-cols-1 gap-4">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <TabletSmartphone className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Mobile Development</h4>
                                    <p className="text-muted-foreground text-base">
                                        Creating mobile apps using Jetpack Compose 
                                        to get modern & Compact UI, and using Firebase 
                                        to handle authentication, database, and storage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover mt-2">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CodeXml className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground text-base">
                                        I develop websites using modern frameworks such as 
                                        React and Laravel to achieve contemporary user interfaces
                                        and implement unique, efficient data integration features.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </section>
    );
};