import cover from "../assets/cliniq-cover.jpg";
import cliniqDashboard from "../assets/cliiniq.netlify.app_html_dashboard.html (3).png";
import cliniqMcqPractice from "../assets/cliiniq.netlify.app_html_mcqs.png";
import cliniqCommunity from "../assets/cliiniq.netlify.app_html_community.png";
import cliniqProgress from "../assets/cliiniq.netlify.app_html_tracker.png";
import sicklecareCover from "../assets/sicklecare new.jpg";
import sicklecareLaptop from "../assets/Sicklecare laptop screen.jpg";
import sicklecareTablet from "../assets/sicklecare tab screen.jpg";
import sicklecarePhone from "../assets/sicklecare phone screen.jpg";
import rotaractCover from "../assets/Rotaracts-cover.jpg";

// Case studies. Text in [square brackets] shows as a highlighted placeholder
// on the page; replace it with real information when you have it.
export const CASE_STUDIES = {
  rotaract: {
    name: "Rotaract Club Website",
    tagline:
      "A digital home that shows a service club at work and makes joining it effortless.",
    category: "Community & Non-profit · Club Website",
    client: "Rotaract Club",
    role: "Strategy, design, and development",
    year: "2026",
    services: "Strategy, UX/UI design, development, and deployment",
    audience: "Prospective members, partners, and the local community",
    platforms: "Web · Fully responsive",
    stack: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
    image: rotaractCover,
    live: "https://rotaractrr.netlify.app",
    overview: [
      "Rotaract is a global, youth-led service organisation for adults aged 18 and over, sponsored by Rotary International. Its members plan and run community projects, build leadership skills, and grow their networks. The club needed a website that matched the energy of its work.",
      "We delivered a modern, mobile-first website that tells the club's story, showcases its work, and gives prospective members a clear path to get involved.",
    ],
    challenge: [
      "Rotaract clubs do a great deal: service projects in education, health, clean water, and the environment, alongside workshops, guest speakers, and regular meetings. Much of that work can be hard to discover from outside the club.",
      "Visibility matters: newcomers need an easy way to understand what the club stands for. Credibility matters too: partners and local leaders should be able to find a professional, clear introduction to the club.",
      "And when someone is ready to get involved, they need a clear next step instead of having to search for how to join.",
    ],
    goalsIntro: "We shaped the experience around four goals:",
    goals: [
      ["Explain Rotaract clearly", "Help visitors quickly understand what Rotaract is and what this club does."],
      ["Show the work", "Give community projects and leadership activities a place to be discovered."],
      ["Make getting involved simple", "Give prospective members a clear way to take the next step."],
      ["Build trust on every screen", "Present the club professionally in a responsive experience."],
    ],
    goalsQuestion: "",
    research: [
      "We started with the people the site needs to serve: prospective members, partners, and the local community. Each should be able to understand the club and find a relevant next step.",
      "We organised the story around Rotaract's service work, leadership and professional growth, member-led governance, and networking.",
    ],
    researchNote:
      "We prioritised the information prospective members and community partners need first: what the club does, the impact of its service work, and how to take the next step. This keeps the website useful both as an introduction for newcomers and as a shareable reference for the club.",
    visual:
      "The design balances an energetic community feel with a professional, trustworthy presentation. Clear hierarchy and direct calls to action help visitors find the club's work and opportunities quickly.",
    screens: [],
    responsive:
      "The website is designed to work smoothly across mobile, tablet, and desktop.",
    designImages: [],
    build: [
      ["A clear introduction", "The site introduces the club and its purpose so new visitors can quickly understand what Rotaract is."],
      ["A place for the work", "The experience makes room for the club's service projects and leadership activities."],
      ["A path to get involved", "Calls to action make it easier for prospective members to take the next step."],
    ],
    buildNote:
      "Built with React and JavaScript, using Vite for the development and production build. Semantic HTML and responsive CSS provide a clear, accessible foundation that adapts across screen sizes.",
    results:
      "The club now has a professional online home that presents its work clearly and gives newcomers a direct way to get involved.",
    resultSlots: [
      ["Membership enquiries", "Prospective members can learn what the club does and follow a clear path to contact the team about getting involved."],
      ["Club feedback", "The website gives members a consistent place to direct people for information about the club, its service projects, and opportunities to participate."],
      ["Milestones", "Launched and live online, giving the Rotaract Club a dedicated digital home to share with prospective members, partners, and the wider community."],
    ],
    next: [
      "Keep the site current with new service projects, events, and club announcements.",
      "Add project stories and photo galleries to show the impact of the club's work.",
      "Make it easier for prospective members to express interest and find upcoming meetings.",
      "Expand the site with partner and volunteer information as the club's community grows.",
    ],
  },
  cliniq: {
    name: "ClinIQ",
    tagline:
      "A focused exam-preparation platform that gives medical students structured MCQ practice, clear progress tracking, and a community to learn with.",
    category: "EdTech · Medical Education",
    role: "Product design, frontend development, and platform architecture",
    year: "2026",
    timeline: "2 weeks",
    services:
      "Product strategy, UI/UX design, frontend development, backend integration",
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Supabase"],
    image: cover,
    live: "https://cliiniq.netlify.app",
    overview: [
      "Medical students prepare for some of the most demanding exams in higher education, yet their study tools are scattered across question banks, notes apps, and group chats. ClinIQ came to us with a clear brief: bring practice, progress, and peer learning into one platform that students would actually want to open every day.",
      "We designed and built ClinIQ end to end, from the first interface prototype to a scalable, production-ready web application.",
    ],
    challenge: [
      "Medical students rarely struggle with access to content. They struggle with structure. Practice questions live in one place, performance data in another (usually nowhere), and discussion happens in group chats where useful explanations get buried within hours.",
      "The result is that students can't easily tell what they know, what they don't, and where their time is best spent. Existing tools tend to do one of these jobs well and ignore the rest.",
      "ClinIQ's brief was to close that gap: one platform where a student can practise, see exactly where they stand, and learn alongside peers.",
    ],
    goalsIntro: "We defined success around three requirements:",
    goals: [
      ["Practice that mirrors the exam", "MCQ sessions that feel like the real thing, with immediate, useful feedback."],
      ["Progress that is visible", "A student should be able to see their strengths and weak areas at a glance, without doing any analysis themselves."],
      ["Learning that is social", "A community space where questions and explanations stay organised and easy to find."],
    ],
    goalsQuestion: "We measured the product against one question: does a student come back tomorrow?",
    research: [
      "We started from the student's day, not the feature list. Every proposed feature had to answer one question: does it help a student study better this week?",
      "That filter shaped the scope. The core of the platform became MCQ practice, a progress tracker, a dashboard that brings both together, and a community page. We also designed full onboarding and authentication flows, because a study tool that is hard to start is a study tool that doesn't get used.",
      "Features that were interesting but not essential to the first release were deliberately left out, so the core experience could be built well.",
    ],
    researchNote: "",
    visual:
      "Medical study involves long sessions, so the interface needed to be calm and easy on the eyes. We combined a warm cream base with dark and green accents. The palette keeps the platform professional and clinical without feeling cold, and it stays comfortable over hours of use.",
    screens: [
      ["Dashboard", "A single view of recent activity, progress, and what to study next."],
      ["MCQ practice", "A distraction-free question flow with clear feedback."],
      ["Progress tracker", "Performance made visible by topic, so effort goes where it matters."],
      ["Community", "Organised discussion that supports learning instead of adding noise."],
      ["Onboarding and authentication", "A short path from landing page to first question."],
    ],
    responsive:
      "The interface was designed to work across desktop, tablet, and mobile, since students study wherever they are.",
    designImages: [
      { title: "Dashboard", src: cliniqDashboard },
      { title: "MCQ practice", src: cliniqMcqPractice },
      { title: "Community", src: cliniqCommunity },
      { title: "Progress tracker", src: cliniqProgress },
    ],
    build: [
      ["Prototype", "We built ClinIQ in stages. The first version was a complete multi-page prototype in HTML, CSS, and JavaScript, which let us validate the layout, navigation, and interactions before committing to an architecture."],
      ["Platform", "We then moved the platform to React for a component-based structure that scales as features are added, with Tailwind CSS keeping the design system consistent across every screen. Supabase handles authentication and data, which gives students secure accounts and gives the platform a solid base for growth."],
      ["Standard", "The migration was held to a strict standard: the interface students had already seen stayed exactly as designed. Every page, interaction, and navigation path carried over intact, and only the foundation underneath changed."],
    ],
    buildNote: "",
    results:
      "ClinIQ brings MCQ practice, progress tracking, and peer learning together in one study platform. Since launch, it has grown to more than 50 users.",
    resultSlots: [
      ["Users", "More than 50 users have joined ClinIQ."],
      ["Usage", "Students can practise MCQs, review progress, and learn with peers in one place."],
      ["Student experience", "A more focused study journey, with practice, progress, and peer learning brought together."],
      ["Milestone", "Launched and surpassed 50 users."],
    ],
    next: [
      "Full-stack expansion with a dedicated backend and richer user accounts",
      "Deeper analytics on student performance",
      "A larger and more structured question bank",
      "Refinements driven by direct student feedback",
    ],
  },
  sicklecare: {
    name: "Sicklecare",
    tagline:
      "A single, trusted platform for people living with sickle cell disease, on the web, Android, and iOS.",
    category: "HealthTech · Patient Support Platform · Web & Mobile",
    role: "Design and development",
    year: "2026",
    timeline: "Less than 2 months",
    services:
      "Product strategy, UX/UI design, front-end and back-end development, mobile packaging",
    stack: ["React 18", "Vite", "React Router", "Supabase", "Capacitor"],
    image: sicklecareCover,
    live: "https://sicklecare.netlify.app",
    overview: [
      "Sicklecare is a patient-focused platform for people living with sickle cell disease. It works in any browser and is built to run as native Android and iOS apps from the same codebase.",
      "Patients get one dependable place for support tools, and the client gets one product to maintain instead of three.",
    ],
    challenge: [
      "Sickle cell care depends on consistency: taking medication on time, tracking symptoms, and knowing what to do when something changes. Patients were relying on scattered information and memory, with nothing built around their daily needs.",
      "The client needed a platform patients could rely on every day. It had to work on any device, send timely reminders, support more than one language, and remain simple to use when someone isn't feeling well.",
    ],
    goalsIntro: "The platform was shaped around five requirements:",
    goals: [
      ["Reach patients on any device", "Serve web, Android, and iOS without maintaining separate products."],
      ["Protect patient data", "Securely store each patient's data and account."],
      ["Deliver timely reminders", "Use on-device notifications to support medication routines."],
      ["Support multiple languages", "Make the experience accessible to people using different languages."],
      ["Keep the experience simple", "Make the platform calm, clear, and fast to use."],
    ],
    goalsQuestion:
      "The guiding question: can patients access dependable support on the device they already use?",
    research: [
      "We started from the patient’s day, not the feature list. Every function had to support the realities of living with sickle cell disease: taking medication on time, tracking symptoms, checking routines, and finding reliable guidance when something changes.",
      "That shaped the product around the moments patients need support most: morning reminders, ongoing symptom tracking, quick access to education, and clear tools that reduce stress during flare-ups or periods of uncertainty.",
      "We kept the experience simple, supportive, and easy to return to, so patients could use it without extra effort when they were unwell.",
    ],
    researchHeading: "Start from the patient's day.",
    researchNote:
      "The first release focused on the highest-value patient needs: medication reminders, symptom tracking, daily routines, and education that feels easy to understand when someone is unwell. More advanced clinical features were intentionally left for later phases so the core experience could stay clear, useful, and dependable.",
    visual:
      "The design is calm, readable, and reassuring, with clear hierarchy and generous spacing. It is built mobile-first because that's where patients use it.",
    screens: [
      ["Dashboard", "A quick overview of care routines, symptom updates, and important health information."],
      ["Medication reminders", "Scheduled reminders help patients stay consistent with their treatment plan."],
      ["Symptom tracker", "Daily symptom logging makes it easier to monitor changes over time."],
      ["Education & support", "Accessible guidance helps patients understand their condition and what to do next."],
    ],
    responsive:
      "The interface is responsive across mobile, tablet, and desktop.",
    designImages: [
      { title: "Laptop", src: sicklecareLaptop },
      { title: "Tablet", src: sicklecareTablet },
      { title: "Phone", src: sicklecarePhone },
    ],
    build: [
      ["Interface", "React and Vite provide a fast, component-based interface for daily patient routines and care tasks."],
      ["Accounts and data", "Supabase provides secure authentication, patient data handling, and a stable backend foundation."],
      ["Web and mobile", "Capacitor packages the same React codebase for native Android and iOS apps without duplicating the product."],
      ["On-device reminders", "Local notifications help patients stay consistent with treatment plans, even when they have no internet connection."],
      ["Reliability", "Automated tests cover the core care flow, reminder logic, and multilingual content so the platform remains dependable across devices."],
    ],
    buildNote: "The biggest challenge was designing for a patient audience who may be in pain, stressed, or fatigued, while still creating a fast, responsive, cross-platform experience from one codebase. We kept the interface simple and reassuring, and used shared logic to support web, Android, and iOS without compromising clarity or usability.",
    results:
      "Sicklecare is live on the web, with native Android and iOS builds ready from the same codebase.",
    resultSlots: [
      ["Platforms", "Web, Android, and iOS from one codebase."],
      ["Store status", "Published on the website and available for download, while the separate native app has not yet been created."],
      ["Milestones", "Testing phase with 20 participants."],
    ],
    next: [
      "Expanded symptom tracking with trend analysis and care insights",
      "A more advanced reminder system for medication schedules and follow-up care",
      "Deeper multilingual support and accessibility improvements",
      "Caregiver and clinic sharing features for supported self-management",
      "Native app release planning and store deployment for Android and iOS",
    ],
  },
};
