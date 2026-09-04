import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  AlgoIcon,
  DatabaseIcon,
  ImageIcon,
  QueueIcon,
} from "@/components/ProjectIcons";

export default function Home() {
  const projects = [
    {
      icon: <AlgoIcon />,
      name: "Algo",
      description:
        "An intelligent DSA practice platform that recommends personalized coding problems based on a user's strengths, weaknesses, solving history, and learning goals",
      stars: 1,
      tags: ["typescript"],
      featured: true,
      href: "https://github.com/Pointdexter37/Algo",
    },
    {
      icon: <DatabaseIcon />,
      name: "Database-Backup-CLI",
      description:
        "A command-line utility in Go to backup various databases (PostgreSQL, MongoDB, SQLite), with features like compression, cloud/local storage upload, and scheduling",
      stars: 2,
      tags: ["go"],
      href: "https://github.com/Pointdexter37/Database-Backup-CLI",
    },
    {
      icon: <ImageIcon />,
      name: "PixelNest",
      description:
        "A wallpaper download website with a clean interface for browsing and saving high-quality wallpapers",
      tags: ["go"],
      href: "https://github.com/Pointdexter37/PixelNest",
    },
    {
      icon: <QueueIcon />,
      name: "BackgroundQueue",
      description:
        "A mini distributed task queue system for reliable background job processing with worker management",
      tags: ["typescript"],
      href: "https://github.com/Pointdexter37/BackgroundQueue",
    },
  ];

  return (
    <>
      <ThemeToggle />
      <main className="page-wrapper">
        <HeroSection />

        {/* Projects Section */}
        <section className="projects-section fade-in-up fade-in-up-delay-7">
          <h2 className="section-heading">Projects</h2>
          <div className="project-list">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </section>

        {/* Writing Section */}
        <section className="writing-section fade-in-up fade-in-up-delay-8">
          <h2 className="section-heading">Writing</h2>
          <div className="writing-placeholder">
            <span className="writing-placeholder-text">soon_</span>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
