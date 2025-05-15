import Lottie from "lottie-react"
import HeroAnimation from "@/assets/HeroAnimation.json"
import CVButton from "@/components/CVButton.jsx"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center">
            <div className="container z-10 flex flex-col md:flex-row justify-between items-center">
                {/* Right pages */}
                <div className="space-y-4 w-fit">
                    <h1 className="text-center text-5xl font-bold tracking-tight ">
                        <span className="opacity-0 animate-fade-in">Hello, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">{" "} David</span>
                        <span className="opacity-0 animate-fade-in-delay-2"> Immanuel</span>
                    </h1>

                    <p className="max-w-2xl text-lg text-justify opacity-0 animate-fade-in-delay-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

                    <CVButton />
                </div>
                {/* Left pages */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="max-w-lg w-full">
                        <Lottie loop={true} autoplay={true} animationData={HeroAnimation} className="max-w-md mx-auto opacity-0 animate-fade-in-delay-2" />
                    </div>
                </div>
            </div>
        </section>
    )
}