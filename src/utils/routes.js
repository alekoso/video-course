import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

// Основные ссылки для хедера, бургера и других общих компонентов
export const routes = [
  { name: "nav1", path: "#structure" },
  { name: "nav2", path: "#about" },
  { name: "nav3", path: "#advantages" },
  { name: "nav4", path: "#reviews" },
  { name: "nav5", path: "#faq" },
];

// Ссылки, которые используются только в футере
export const footerLinks = [
  { name: "link1", path: "/legal-details" },
  { name: "link2", path: "/individual-entrepreneur" },
  {
    name: "link3",
    path: "(https://www.notion.so/19041afa825280cc96f6e6bf6b4d690a?pvs=21",
  },
  {
    name: "link4",
    path: "https://www.notion.so/19041afa8252805d95d3ca2124af1e9b?pvs=21y",
  },
];

// Соц.сети

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/aleko.so/",
    icon: FaInstagram,
  },
  { name: "TikTok", url: "https://www.tiktok.com/@aleko.so", icon: FaTiktok },
  { name: "Telegram", url: "https://www.t.me/aleko_ua", icon: FaTelegram },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@aleko_so/shorts",
    icon: FaYoutube,
  },
  { name: "Email", url: "mailto:aleko.you@gmail.com", icon: FaEnvelope },
];

export const socLinksAbout = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/aleko.so/",
    icon: FaInstagram,
  },
  { name: "TikTok", url: "https://www.tiktok.com/@aleko.so", icon: FaTiktok },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@aleko_so/shorts",
    icon: FaYoutube,
  },
];
