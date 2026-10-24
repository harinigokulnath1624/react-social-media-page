export const PROFILES = [
  {
    id: 1,
    name: "Harini Gokul",
    role: "Illustrator & Trail Photographer",
    rating: 4.8,
    posts: 148,
    followers: 12480,
    scene: "desert",
    avatarBg: "#f6d9c3",
    skills: [
      { icon: "bi-brush", bg: "#f2a900" },
      { icon: "bi-camera", bg: "#10302f" },
    ],
  },
  {
    id: 2,
    name: "Gokul",
    role: "Sound Recordist & Podcaster",
    rating: 4.6,
    posts: 92,
    followers: 8350,
    scene: "forest",
    avatarBg: "#cfe5d6",
    skills: [
      { icon: "bi-mic", bg: "#2f7d5b" },
      { icon: "bi-headphones", bg: "#10302f" },
    ],
  },
  {
    id: 3,
    name: "Nilaah Gokul",
    role: "Product & Motion Designer",
    rating: 4.9,
    posts: 210,
    followers: 31200,
    scene: "dusk",
    avatarBg: "#d9d3f2",
    skills: [
      { icon: "bi-vector-pen", bg: "#6b5bd2" },
      { icon: "bi-play-circle", bg: "#e4572e" },
    ],
  },
];

export const compact = (n) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
