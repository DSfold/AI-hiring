export interface IAboutCardData {
  id: number;
  title: string;
  heading: string;
  text: string;
  image: string;
  link?: string;
}

export const aboutCardData = [
  {
    id: 1,
    title: "Talent Acqusition",
    heading: "Hire for Potential",
    text: "Easily identify, engage and hire talent with the right skills and potential, to speed up hiring cycles and reduce costs.",
    image: "/images/TalentCardImage.png",
    link: "https://www.google.com",
  },
  {
    id: 2,
    title: "Talent Management",
    heading: "Manage you talents",
    text: "Some text that explains to you about managing your talent",
    image: "/images/TalentCardImage.png",
  },
  {
    id: 3,
    title: "Workforce Planning",
    heading: "Planning is Easy",
    text: "Some text that explains to you about planning workforce",
    image: "/images/TalentCardImage.png",
  },
  {
    id: 4,
    title: "Skills Intelligence",
    heading: "Just be smart",
    text: "Some text that explains to you about being smart or something... I don't know",
    image: "/images/TalentCardImage.png",
    link: "https://www.google.com",
  },
];
