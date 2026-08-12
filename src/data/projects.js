export const projects = [
  {
    slug: "acorn-app",
    title: "Acorn App",
    type: "Mobile finance app",
    role: "Product design, UX flows, visual system",
    year: "2026",
    summary:
      "A gentle budgeting concept that turns weekly spending into a calm, visual check-in.",
    challenge:
      "Traditional budgeting tools can feel punitive and cluttered, especially for users who want quick emotional clarity instead of dense finance tables.",
    solution:
      "Zoey shaped a soft mobile flow with simple categories, friendly progress cues, and visual snapshots that help users understand their habits without pressure.",
    outcome:
      "The concept creates a lighter daily money ritual and a warmer tone for personal finance.",
    tags: ["Mobile UX", "Visual design", "Habit loops"],
  },
  {
    slug: "moody",
    title: "Moody",
    type: "Moodboarding web app",
    role: "Research, interaction design, prototype testing",
    year: "2026",
    summary:
      "A playful habit tracker for tiny routines, soft reminders, and low-pressure consistency.",
    challenge:
      "Many wellness products push streaks so hard that missed days feel like failure, which can make users abandon the product.",
    solution:
      "The experience focuses on small wins, forgiving reset moments, and lightweight reflection instead of rigid streak pressure.",
    outcome:
      "The result is a wellness concept that feels supportive, personal, and easy to re-enter.",
    tags: ["UX research", "Prototyping", "Interaction design"],
  },
  {
    slug: "acorn-website",
    title: "Acorn Website",
    type: "Corporate website redesign",
    role: "Information architecture, UI design, design systems",
    year: "2026",
    summary:
      "A sweet planning workspace for friends coordinating casual events without messy message threads.",
    challenge:
      "Group planning often spreads decisions across chats, screenshots, notes, and calendar links.",
    solution:
      "Zoey organized plans into shared lists, lightweight voting, and visual status cards so everyone can see what still needs attention.",
    outcome:
      "The concept makes social planning feel organized without becoming overly formal.",
    tags: ["IA", "Collaboration", "Design systems"],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
