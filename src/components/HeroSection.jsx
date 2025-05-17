import Lottie from "lottie-react"
import HeroAnimation from "@/assets/HeroAnimation.json"
import ProjectButton from "@/components/ProjectButton.jsx"
import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center">
            <div className="container z-10 flex flex-col md:flex-row justify-between items-center">
                {/* Right pages */}
                <div className="space-y-4 w-fit">
                    <p className="justify-start text-4xl md:text-6xl mx-auto text-center font-bold tracking-tight ">
                        <span className="opacity-0 animate-fade-in">Hello, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">{" "} David</span>
                        <span className="text-gradient mr-2 opacity-0 animate-fade-in-delay-2"> Immanuel</span>
                    </p>

                    <p className="max-w-2xl text-lg md:text-xl text-justify text-muted-foreground mx-auto mb-6 opacity-0 animate-fade-in-delay-3">
                        Dedicated and knowledgeable developer specializing in website and mobile application development, with a growing interest in machine learning.
                    </p>

                    <div className="flex justify-start opacity-0 animate-fade-in-delay-4">
                        <ProjectButton />
                    </div>

                </div>
                {/* Left pages */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="max-w-lg w-full">
                        <Lottie loop={true} autoplay={true} animationData={HeroAnimation} className="max-w-md mx-auto opacity-0 animate-fade-in-delay-2" />
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <ArrowDown className="h-8 w-8" />
                </div>
            </div>
        </section>
    )
}