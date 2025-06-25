import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react"

const navItems = [

    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Organization", href: "#organization"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/40 backdrop-blur-lg shadow-sm" : "py-5")}>
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> David Immanuel </span> Portfolio
                    </span>
                </a>

                {/* desktop navigation */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-200">{item.name}</a>
                    ))}
                </div>

                {/* mobile navigation */}
                <button
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    <Menu size={24} />
                </button>

                {/* backdrop */}
                <div
                    className={cn(
                        "fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 md:hidden",
                        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* sidebar menu */}
                <div
                    className={cn(
                        "fixed top-0 right-0 h-screen w-full bg-background z-50 flex flex-col items-center justify-start pt-[72px] shadow-lg transition-transform duration-300 md:hidden overflow-y-auto",
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                    style={{maxHeight: '100vh'}}
                >
                    {/* Tombol X di pojok kanan atas */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 p-2 rounded-md text-foreground bg-background z-50"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                    <div className="flex flex-col space-y-8 text-xl w-full items-center mt-8">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-200 w-full text-center py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </nav>
    )
}