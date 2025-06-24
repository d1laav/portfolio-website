import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { OrganizationSection } from "../components/OrganizationSection";
import { SectionTransition } from "../components/SectionTransition";
import ScrollProgressBar from "../components/ScrollProgressBar";

export const Home = () => {

    return (

    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}

        {/* Main Content */}
        <div className="scroll-smooth">
            <main>
            <HeroSection />
            <SectionTransition from="tan" to="sage" />
            <AboutSection />
            <SectionTransition from="sage" to="sand" />
            <SkillsSection />
            <SectionTransition from="sand" to="clay" />
            <ProjectSection />
            <SectionTransition from="clay" to="moss" />
            <OrganizationSection />
            <SectionTransition from="moss" to="linen" />
            <ContactSection />
            </main>
      </div>

        {/* Footer */}
    </div>
    );
};