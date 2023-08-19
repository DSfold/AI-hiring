export interface InfoLinksData {
  id: number;
  sectionName: string;
  links: { name: string; link: string }[];
}

export const links = [
  {
    id: 1,
    sectionName: "Company",
    links: [
      { name: "About", link: "#about" },
      { name: "FAQ", link: "#faq" },
      { name: "Testimonials", link: "#testimonials" },
      { name: "Contacts", link: "#contacts" },
    ],
  },
  {
    id: 2,
    sectionName: "Legal",
    links: [
      { name: "Terms of use", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "SOC-2", link: "/" },
    ],
  },
  {
    id: 3,
    sectionName: "Contact",
    links: [
      { name: "Twitter", link: "https://www.twitter.com" },
      { name: "Linkedin", link: "https://www.linkedin.com" },
      { name: "info@scalemate.com", link: "https://www.info@scalemate.com" },
    ],
  },
];
