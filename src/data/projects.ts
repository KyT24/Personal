import type { Project } from "../types";

export const localProjects: Project[] = [
  {
    slug: "ecommerce-gamestop-retail",
    title: "E-commerce Platform for gameshop Retail",
    summary: "A scalable online store with reviews, secure checkout, and real-time inventory.",
    image: "https://cdn.dribbble.com/userupload/4951337/file/original-ff41cb12cd57f704cd6a761adb91ba63.jpg?resize=752x&vertical=center",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    situation: "GameStop Retail wanted to expand into e-commerce and needed a platform for desktop and mobile users.",
    task: "Build the front-end and back-end and connect them to the inventory and payment systems.",
    action: "Built a responsive UI with React, REST APIs with Node.js and PostgreSQL, and set up a CI/CD pipeline on AWS.",
    result: "Online sales grew 35% in the first three months, and manual inventory work dropped.",
    liveUrl: "https://www.gsshop.id/home",
    repoUrl: "https://github.com/yourname/project",
  },
];