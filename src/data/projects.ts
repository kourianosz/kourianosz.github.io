export type Project = {
  id: string;
  description: string;
  meta: string;
  ctaText?: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  projectLink?: string;
  prototypeUrl?: string;
};

export const projects: Project[] = [
  {
    id: "acorn_app",
    description:
      "Acorn is a mobile outdoor gear e-commerce concept that integrates trip-based checklists into the shopping experience. Helping users plan upcoming trips, track what they already own, and find relevant products directly from checklist items.",
    meta: "Designer, 2026",
    ctaText: "View Case Study",
    imageRatio: 1024 / 768,
    image: "/acorn_app.jpg",
    imageAlt: "Acorn App mockup",
    projectLink:
      "https://www.behance.net/gallery/256327655/Acorn-Trip-Planning-Companion",
    prototypeUrl:
      "https://embed.figma.com/proto/BVB1tVFMv2chkeyuYlkGkx/Acorn-HiFi?embed-host=share",
  },
  {
    id: "moody",
    description:
      "Moody is a playful, collaborative, web-based platform where users create and share mood boards.",
    meta: "Designer, 2026",
    ctaText: "View Case Study",
    imageRatio: 1024 / 768,
    image: "/moody.jpg",
    imageAlt: "Moody mockup",
    projectLink:
      "https://www.behance.net/gallery/237678791/Moody-Shared-Creative-Canvas",
  },
  {
    id: "acorn_web",
    description:
      "Acorn Web focuses on designing mobile, tablet, and desktop websites that feel cohesive, accessible, and intuitive. It serves as the web adaptation of the Acorn app, translating its core functionality and visual identity into a browsing experience.",
    meta: "Designer, 2026",
    ctaText: "View Case Study",
    imageRatio: 1024 / 768,
    image: "/acorn_web.jpg",
    imageAlt: "Acorn Web mockup",
    projectLink:
      "https://www.behance.net/gallery/255973573/Acorn-Web-Browser-Trip-Planning-Companion",
  },
  // {
  //   id: "sbb",
  //   description:
  //     "A weekly digest that turns raw product data into a simple narrative. Built so you can read it on a Sunday with coffee.",
  //   meta: "Creator, 2026",
  //   ctaText: "Read More",
  //   imageRatio: 1024 / 768,
  //   image: "/sweet_bunny_bakery_thumbnail_notext.jpg",
  //   imageAlt: "Sweet Bunny Bakery mockup",
  // },
];
