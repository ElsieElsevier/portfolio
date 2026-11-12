import { index, route } from "@react-router/dev/routes";

// One file per page. The URL on the left, the page component on the right.
export default [
  index("routes/home.jsx"),
  route("experience", "routes/experience.jsx"),
  route("projects", "routes/projects.jsx"),
  route("lab", "routes/lab.jsx"),
  route("skills", "routes/skills.jsx"),
  route("certifications", "routes/certifications.jsx"),
  route("research", "routes/research.jsx"),
  route("education", "routes/education.jsx"),
  route("*", "routes/not-found.jsx"),
];
