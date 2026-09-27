export type Project = {
  id: string;
  title?: string;
  description: string;
  meta: string;
  ctaText?: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  projectLink?: string;
};
// Reference demo mockups from Dribbble. Credit belongs to their original creators; replace before launch.
export const projects: Project[] = [
  {
    id: "acorn_app",
    // title: "Acorn",
    description:
      "Acorn is a mobile outdoor gear e-commerce concept that integrates trip-based checklists into the shopping experience. Helping users plan upcoming trips, track what they already own, and find relevant products directly from checklist items.",
    meta: "Designer, 2025",
    ctaText: "View Case Study",
    imageRatio: 1024 / 768,
    image: "/acorn_app.jpg",
    imageAlt: "Acorn App mockup",
  },
  {
    id: "acorn_web",
    // title: "Acorn Web",
    description:
      "Acorn Web focuses on designing mobile, tablet, and desktop websites that feel cohesive, accessible, and intuitive. It serves as the web adaptation of the Acorn app, translating its core functionality and visual identity into a browsing experience.",
    meta: "Designer, 2026",
    ctaText: "View Case Study",
    imageRatio: 1024 / 768,
    image: "/acorn_web.jpg",
    imageAlt: "Acorn Web mockup",
  },
  {
    id: "moody",
    // title: "Moody",
    description:
      "Moody is a playful, collaborative, web-based platform where users create and share mood boards.",
    meta: "Designer, 2025",
    ctaText: "View Case Study",
    imageRatio: 1024 / 768,
    image: "/moody.jpg",
    imageAlt: "Moody - Collaborative moodboarding and ideation tool mockup",
    projectLink:
      "https://www.behance.net/gallery/237678791/Moody-Shared-Creative-Canvas",
  },
  {
    id: "sbb",
    // title: "Sweet Bunny Bakery",
    description:
      "A weekly digest that turns raw product data into a simple narrative. Built so you can read it on a Sunday with coffee.",
    meta: "Creator, 2026",
    ctaText: "Read More",
    imageRatio: 1024 / 768,
    image: "/sweet_bunny_bakery_thumbnail_notext.jpg",
    imageAlt: "Sweet Bunny Bakery mockup",
  },
];

export function getProjectTitle(project: Project) {
  return (
    project.title ?? project.imageAlt.replace(/\s+mockup$/i, "").split(" - ")[0]
  );
}
