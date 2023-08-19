export interface BenefitsCard {
  image: string;
  title: string;
  color: string;
  text: string;
  id: number;
}

export const benefits = [
  {
    id: 1,
    image: "/images/BenefitsCardImage1.png",
    title: "Time saving",
    color: "bg-green",
    text: `Reducing time and effort for candidates and employers - the first interview goes through an artificial intelligence system, which saves time on finding and evaluating candidates.`,
  },
  {
    id: 2,
    image: "/images/BenefitsCardImage2.png",
    title: "Increase your chances",
    color: "bg-violet",
    text: `The ability to create a resume on our website and select job openings based on your completed profile and resume helps you find a suitable candidate`,
  },
  {
    id: 3,
    image: "/images/BenefitsCardImage3.png",
    title: "High quality of candidates",
    color: "bg-apricot",
    text: `All candidates who post vacancies on our website are verified and reliable. We guarantee that candidates meet the requirements of the labor market.`,
  },
  {
    id: 4,
    image: "/images/BenefitsCardImage4.png",
    title: "Efficiency and accuracy",
    color: "bg-peach",
    text: `The artificial intelligence system allows you to create a more accurate portrait of the candidate and reduces the possibility of errors in the assessment.`,
  },
];
