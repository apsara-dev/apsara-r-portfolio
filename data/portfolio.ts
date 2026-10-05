// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Apsara R",
  title: "Python Full Stack Developer",
  positioning:
    "I build responsive web apps with Django, REST APIs and React, and I have trained a deep-learning model to classify bird species from audio.",
  summary: [
    "I'm a Computer Science graduate (B.Tech, 2025) with hands-on experience in Python, Django and full-stack web development. I build responsive interfaces with ReactJS, HTML, CSS and JavaScript, and back them with REST APIs and relational databases.",
    "I worked as a Full Stack Python Developer Intern at Kompetenzen Technologies, where I built web pages, implemented CRUD operations on MySQL and helped test and debug applications as part of a team.",
    "I'm looking for an entry-level Python Developer or Web Developer role.",
  ],
  location: "Thiruvananthapuram, India",
  openTo: "Entry-level Python / Web Developer roles",
  email: "apsarababu77@gmail.com",
  phone: "+91 90376 80752",
  linkedin: "https://www.linkedin.com/in/apsara-rb59794280",
  github: "https://github.com/apsara-dev", // Add your GitHub profile URL to show it on the site
  resume: "/Apsara_R_Resume.pdf",
};

export const stackHighlights = ["Python", "Django", "ReactJS", "MySQL"];

export const projects = [
  {
    name: "Personal Expense Tracker",
    kind: "Full-stack web application",
    problem: "People need a simple way to record and review their personal finances.",
    solution:
      "A ReactJS front end with a Django REST backend for managing personal finances, with secure login and an interactive dashboard.",
    contribution: [
      "Built the full-stack application end to end",
      "Implemented JWT-based authentication",
      "Designed the REST APIs and CRUD operations",
      "Built the interactive dashboard",
    ],
    outcome: "Deployed and available as a live demo.",
    tech: ["ReactJS", "Django", "REST API", "JWT"],
    demo: "https://expense-tracker-frontend-one-chi.vercel.app/", // Paste your Live Demo URL here
    code: "https://github.com/apsara-dev/expense-tracker-frontend", // Paste the repository URL here
  },
  {
    name: "Bird Species Classification Through Audio Analysis",
    kind: "Deep learning project",
    problem: "Identify bird species from their recorded calls.",
    solution:
      "An audio classification model: audio is preprocessed with Librosa and classified by a BiLSTM network built in TensorFlow.",
    contribution: [
      "Developed the BiLSTM model for audio classification",
      "Performed audio preprocessing with Librosa",
    ],
    outcome: "Achieved 85% accuracy.",
    tech: ["TensorFlow", "BiLSTM", "Librosa", "Python"],
    demo: "",
    code: "",
  },
];

export const experience = [
  {
    role: "Full Stack Python Developer Intern",
    company: "Kompetenzen Technologies",
    place: "Thiruvananthapuram",
    period: "June 2025 – April 2026",
    points: [
      "Developed responsive web pages using HTML, CSS and JavaScript",
      "Assisted in backend development using Python and Django",
      "Implemented CRUD operations and integrated a MySQL database",
      "Tested and debugged applications",
      "Collaborated with team members",
    ],
  },
];

export const skills = [
  { group: "Language", items: ["Python"] },
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "ReactJS"] },
  { group: "Backend and database", items: ["Django", "MySQL"] },
  { group: "Web concepts", items: ["REST API", "MVC architecture", "CRUD operations", "Authentication"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
  { group: "Machine learning", items: ["TensorFlow", "Librosa"] },
];

export const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    school: "Vidya Academy of Science and Technology, Technical Campus, Kilimanoor",
    period: "2021 – 2025",
    detail: "CGPA 7.23 / 10",
  },
  {
    title: "Higher Secondary",
    school: "Govt HSS, Kilimanoor",
    period: "2021",
    detail: "86%",
  },
  {
    title: "Secondary Education",
    school: "Govt HMmSS Nagaroor Nedumparambu",
    period: "2019",
    detail: "98%",
  },
];
