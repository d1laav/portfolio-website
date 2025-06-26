import { useEffect, useRef, useState } from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Toast from "@radix-ui/react-toast";
import "@/components/ui/toasterStyles.css";

export const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    clearTimeout(timerRef.current);

    try {
      const res = await fetch("https://david-immanuel-portofolio.vercel.app/api/discord-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json();
        alert("Failed to send message: " + (err.error || "Unknown error"));
        return;
      }

      timerRef.current = window.setTimeout(() => {
        eventDateRef.current = new Date();
        setOpen(true);
      }, 100);

      setForm({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <Toast.Provider swipeDirection="right">
      <>
        <section
          id="contact"
          className="bg-contact py-24 md:py-40 px-2 md:px-4 relative bg-secondary/30 min-h-screen snap-start"
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
              Have a project idea or looking for a collaborator? I'm open to
              exciting opportunities — feel free to reach out and let’s build
              something impactful together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4">
                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0 mb-1 md:mb-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href="mailto:davidimmanuel.network@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        davidimmanuel.network@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4">
                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0 mb-1 md:mb-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a className="text-muted-foreground hover:text-primary transition-colors">
                        +62 81513958120
                      </a>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4">
                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0 mb-1 md:mb-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <a className="text-muted-foreground hover:text-primary transition-colors">
                        South Tangerang, Banten, Indonesia
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 md:pt-8">
                    <h4 className="font-medium mb-3 md:mb-4 text-center md:text-left">
                      Connect With Me
                    </h4>
                    <div className="flex space-x-4 justify-center md:justify-start">
                      <a
                        href="https://www.linkedin.com/in/david-immanuel-resner/"
                        className="p-2 rounded-full border border-transparent hover:border-[#0072b1] hover:ring-2 hover:ring-[#0072b1]/50 transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" style={{ color: "#0072b1" }} />
                      </a>
                      <a
                        href="https://www.instagram.com/dimmanuel_/"
                        className="p-2 rounded-full border border-transparent hover:border-[#dd2a7b] hover:ring-2 hover:ring-pink-500/50 transition-all duration-300"
                      >
                        <Instagram className="w-5 h-5" style={{ color: "#dd2a7b" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="bg-card p-6 md:p-10 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="David Immanuel..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@gmail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Hello, I'm interested in collaborating on a project..."
                      rows={4}
                    />
                  </div>
                  <button
                    type="submit"
                    className={cn("cos-button w-full flex items-center justify-center gap-2")}
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Toast Notification */}
        <Toast.Root open={open} onOpenChange={setOpen} className="ToastRoot">
          <Toast.Title className="ToastTitle">Message Sent</Toast.Title>
          <Toast.Description className="ToastDescription">
            Thank you for your message! I’ll get back to you shortly.
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </>
    </Toast.Provider>
  );
};

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}
