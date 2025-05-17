import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    // create storage for theme  when the page loads
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        }
    }, [])

    // create a function to toggle the theme
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            // if the user is using light mode, send to storage n set the theme to light when the page loads it's still light
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            // if the user is using dark mode, send to storage n set the theme to dark when the page loads it's still dark
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }
    return (
        <div className={cn("fixed max-sm:hidden top-1.5 right-4 z-50 p-4 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
        )}>
            <div className="relative inline-block w-8 h-6 ">
                <input
                type="checkbox"
                id="toggle-theme"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="peer appearance-none w-11 h-6 bg-slate-800 rounded-full checked:bg-slate-100 cursor-pointer transition-colors duration-300"
                />
                <label
                htmlFor="toggle-theme"
                className="absolute top-0 left-0 w-6 h-6 rounded-full border border-slate-300 bg-white shadow-sm flex items-center justify-center 
                            transition-transform duration-300 cursor-pointer
                            peer-checked:translate-x-5 peer-checked:border-slate-800">
                {isDarkMode ? (
                    <Moon className="h-4 w-4 text-slate-700" />
                ) : (
                    <Sun className="h-4 w-4 text-yellow-400" />
                )}
                </label>
            </div>
        </div>
    )
}