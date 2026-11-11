import cliniq from "../assets/cliniq-cover.jpg";
import sicklecare from "../assets/sicklecare new.jpg";
import rotaract from "../assets/Rotaracts-cover.jpg";

// Edit the content below; the layout updates automatically.
// caseStudy: "#case-study-<id>" opens the page defined in caseStudies.js; "" hides the link.
export const PROJECTS = [
  {
    name: "ClinIQ",
    category: "EdTech · Medical Education",
    image: cliniq,
    desc: "A study platform built for medical students: exam-style MCQ practice, clear progress tracking, and a community to learn with.",
    tech: ["HTML/CSS/JS", "React", "Tailwind", "Supabase"],
    live: "https://cliiniq.netlify.app",
    caseStudy: "#case-study-cliniq",
  },
  {
    name: "Sicklecare",
    category: "HealthTech · Patient Support Platform",
    image: sicklecare,
    desc: "A patient-focused platform for people living with sickle cell disease, available on web, Android, and iOS from one codebase.",
    tech: ["React", "Vite", "Supabase", "Capacitor"],
    live: "https://sicklecare.netlify.app",
    caseStudy: "#case-study-sicklecare",
  },
  {
    name: "Rotaract Club Website",
    category: "Community & Non-profit · Club Website",
    image: rotaract,
    desc: "A digital home that shows a service club at work and makes joining it effortless.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
    live: "https://rotaractrr.netlify.app",
    caseStudy: "#case-study-rotaract",
  },
];
