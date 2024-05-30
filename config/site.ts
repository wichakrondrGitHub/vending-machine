export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vending Machine",
  description:
    "this site create by nextjs+nextui , animation with framer motion ",
  navItems: [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "NEWS",
      href: "https://everymatrix.com/news/",
    },
    {
      label: "SERVICE",
      href: "https://everymatrix.com/services/",
    },
  ],
  links: {
    github: "https://github.com/wichakrondrGitHub",
    instagram:
      "https://www.instagram.com/coder_dear/?igsh=MzkwMWUxeHVmMHh5&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/wichakron-khunkhangsaeng-b59543229",
    gitlab: "https://gitlab.com/wichakrondr",
  },
};
