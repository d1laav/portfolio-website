import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

export const ContactSection = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {
            
        }, 1500);
    }
    return (
    <section id="contact"className="py-30 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project idea or looking for a collaborator?
            I'm open to exciting opportunities — feel free to reach out and
            let’s build something impactful together!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* LEFT SIDE - Contact Information */}
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                    <h4>Email</h4>
                    <a
                        href="mailto:davidimmanuel.network@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        davidimmanuel.network@gmail.com
                    </a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                    <h4>Phone</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                        +62 81513958120
                    </a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                    <h4>Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                        South Tangerang, Banten, Indonesia
                    </a>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                    <a href="#"><Linkedin /></a>
                    <a href="#"><Instagram /></a>
                    </div>
                </div>
                </div>
            </div>

            {/* RIGHT SIDE - Send a Message */}
            <div className="bg-card p-10 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
                <form action="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {" "}
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="David Immanuel..."
                    />
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {" "}
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@gmail.com"
                    />
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {" "}
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Hello, I'm interested in collaborating on a project..."
                    />
                </div>
                <button
                    type="submit"
                    className={cn("cos-button w-full flex items-center justify-center gap-2",
                    )}
                >
                    Send Message 
                    <Send size={16} />
                </button>
                </form>
            </div>
            </div>
        </div>
    </section>
    );
}
