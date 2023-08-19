export interface CandidatesTableData {
  id: number;
  candidate: { profile: string; name: string };
  rating: number;
  stages: { name: string; color: string; progress: number };
  appliedDate: Date;
  owner: { profile: string; name: string };
}

export const candidates = [
  {
    id: 1,
    candidate: {
      profile: "/images/profilePics/CameronWilliamson.png",
      name: "Cameron Williamson",
    },
    rating: 4.9,
    stages: { name: "Shortlist", color: "bg-blue", progress: 2 },
    appliedDate: new Date(2023, 2, 22),
    owner: {
      name: "Theresa Webb",
      profile: "/images/profilePics/TheresaWebb.png",
    },
  },
  {
    id: 2,
    candidate: {
      profile: "/images/profilePics/LeslieAlexander.png",
      name: "Leslie Alexander",
    },
    rating: 4.7,
    stages: { name: "Interview", color: "bg-red", progress: 2 },
    appliedDate: new Date(2023, 2, 22),
    owner: {
      name: "Jerome Bell",
      profile: "/images/profilePics/JeromeBell.png",
    },
  },
  {
    id: 3,
    candidate: {
      profile: "/images/profilePics/BrooklynSimmons.png",
      name: "Brooklyn Simmons",
    },
    rating: 4.2,
    stages: { name: "New Applied", color: "bg-pink", progress: 3 },
    appliedDate: new Date(2023, 2, 21),
    owner: {
      name: "Kathryn Murphy",
      profile: "/images/profilePics/KathrynMurphy.png",
    },
  },
  {
    id: 4,
    candidate: {
      profile: "/images/profilePics/RobertFox.png",
      name: "Robert Fox",
    },
    rating: 3.2,
    stages: { name: "Test", color: "bg-violet", progress: 4 },
    appliedDate: new Date(2023, 2, 21),
    owner: {
      name: "Arlene McCoy",
      profile: "/images/profilePics/ArleneMcCoy4.png",
    },
  },
  {
    id: 5,
    candidate: {
      profile: "/images/profilePics/JacobJones.png",
      name: "Jacob Jones",
    },
    rating: 4.2,
    stages: { name: "Design Chalange", color: "bg-green", progress: 5 },
    appliedDate: new Date(2023, 2, 21),
    owner: {
      name: "Eleanor Pena",
      profile: "/images/profilePics/EleanorPena2.png",
    },
  },
  {
    id: 6,
    candidate: {
      profile: "/images/profilePics/CodyFisher.png",
      name: "Cody Fisher",
    },
    rating: 4.9,
    stages: { name: "Shortlist", color: "bg-blue", progress: 2 },
    appliedDate: new Date(2023, 2, 21),
    owner: {
      name: "Floyd Miles",
      profile: "/images/profilePics/FloydMiles2.png",
    },
  },
  {
    id: 7,
    candidate: {
      profile: "/images/profilePics/FloydMiles.png",
      name: "Floyd Miles",
    },
    rating: 2.4,
    stages: { name: "Interview", color: "bg-red", progress: 2 },
    appliedDate: new Date(2023, 2, 20),
    owner: {
      name: "Bessie Cooper",
      profile: "/images/profilePics/BessieCooper2.png",
    },
  },
  {
    id: 8,
    candidate: {
      profile: "/images/profilePics/ArleneMcCoy2.png",
      name: "Arlene McCoy",
    },
    rating: 3.9,
    stages: { name: "New Applied", color: "bg-blue", progress: 2 },
    appliedDate: new Date(2023, 2, 20),
    owner: {
      name: "Savannah Nguyen",
      profile: "/images/profilePics/SavannahNguyen.png",
    },
  },
  {
    id: 9,
    candidate: {
      profile: "/images/profilePics/ArleneMcCoy3.png",
      name: "Arlene McCoy",
    },
    rating: 2.9,
    stages: { name: "Test", color: "bg-green", progress: 5 },
    appliedDate: new Date(2023, 2, 20),
    owner: {
      name: "Cody Fisher",
      profile: "/images/profilePics/CodyFisher2.png",
    },
  },
  {
    id: 10,
    candidate: {
      profile: "/images/profilePics/CourtneyHenry.png",
      name: "Arlene McCoy",
    },
    rating: 4.8,
    stages: { name: "Design Challenge", color: "bg-violet", progress: 2 },
    appliedDate: new Date(2023, 2, 20),
    owner: {
      name: "Savannah Nguyen",
      profile: "/images/profilePics/LeslieAlexander.png",
    },
  },
];
