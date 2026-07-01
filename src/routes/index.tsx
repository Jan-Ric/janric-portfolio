import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero } from "@/components/portfolio/Hero";
import { BentoOverview } from "@/components/portfolio/BentoOverview";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Affiliations } from "@/components/portfolio/Affiliations";
import { Education } from "@/components/portfolio/Education";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jan Ric Hogat — Electronics & Data Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Jan Ric Maranan Hogat — Licensed Electronics Engineer building toward Data Engineering and Analytics.",
      },
      {
        property: "og:title",
        content: "Jan Ric Hogat — Electronics & Data Engineer",
      },
      {
        property: "og:description",
        content:
          "Projects, credentials, and experience — bridging hardware roots with modern data engineering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <BentoOverview />
        <Experience />
        <Projects />
        <Certifications />
        <Affiliations />
        <Education />
        <ContactSection />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </div>
  );
}
