import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { ArrowRight, Repeat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['all', 'frontend', 'backend', 'mobile', 'tools'];

const skills = [
  { name: "HTML/CSS", level: "Advanced", icon: <Icon icon="simple-icons:html5" className="w-6 h-6 text-orange-600" />, category: "frontend" },
  { name: "JavaScript", level: "Intermediate", icon: <Icon icon="simple-icons:javascript" className="w-6 h-6 text-yellow-400" />, category: "frontend" },
  { name: "React", level: "Intermediate", icon: <Icon icon="simple-icons:react" className="w-6 h-6 text-cyan-400" />, category: "frontend" },
  { name: "Tailwind CSS", level: "Intermediate", icon: <Icon icon="simple-icons:tailwindcss" className="w-6 h-6 text-sky-400" />, category: "frontend" },
  { name: "Bootstrap", level: "Intermediate", icon: <Icon icon="simple-icons:bootstrap" className="w-6 h-6 text-purple-700" />, category: "frontend" },
  { name: "Firebase", level: "Advanced", icon: <Icon icon="simple-icons:firebase" className="w-6 h-6 text-amber-500" />, category: "backend" },
  { name: "PHP", level: "Intermediate", icon: <Icon icon="simple-icons:php" className="w-6 h-6 text-indigo-600" />, category: "backend" },
  { name: "Laravel", level: "Intermediate", icon: <Icon icon="simple-icons:laravel" className="w-6 h-6 text-red-500" />, category: "backend" },
  { name: "SQL", level: "Intermediate", icon: <Icon icon="simple-icons:mysql" className="w-6 h-6 text-blue-600" />, category: "backend" },
  { name: "Python", level: "Advanced", icon: <Icon icon="simple-icons:python" className="w-6 h-6 text-yellow-600" />, category: "backend" },
  { name: "Android Development", level: "Intermediate", icon: <Icon icon="simple-icons:android" className="w-6 h-6 text-green-600" />, category: "mobile" },
  { name: "Kotlin", level: "Intermediate", icon: <Icon icon="simple-icons:kotlin" className="w-6 h-6 text-purple-400" />, category: "mobile" },
  { name: "XML", level: "Intermediate", icon: <Icon icon="material-symbols:code" className="w-6 h-6 text-gray-500" />, category: "mobile" },
  { name: "Jetpack Compose", level: "Intermediate", icon: <Icon icon="simple-icons:jetpackcompose" className="w-6 h-6 text-indigo-400" />, category: "mobile" },
  { name: "Git/GitHub", level: "Advanced", icon: <Icon icon="simple-icons:github" className="w-6 h-6 text-[hsl(var(--foreground))]" />, category: "tools" },
  { name: "VSCode", level: "Advanced", icon: <Icon icon="simple-icons:visualstudiocode" className="w-6 h-6 text-blue-500" />, category: "tools" },
  { name: "Figma", level: "Intermediate", icon: <Icon icon="simple-icons:figma" className="w-6 h-6 text-pink-500" />, category: "tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categoryIndex = useRef(0);

  // Auto-switch category every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      categoryIndex.current = (categoryIndex.current + 1) % categories.length;
      setActiveCategory(categories[categoryIndex.current]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-52 px-6 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(category);
                categoryIndex.current = index;
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
              >
                {skill.icon}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.level}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};
