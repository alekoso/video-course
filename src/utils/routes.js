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
  { name: "link1", path: "/" },
  { name: "link2", path: "/" },
  { name: "link3", path: "/" },
  { name: "link4", path: "/" },
];

// Соц.сети

export const socialLinks = [
  { name: "Instagram", url: "https://instagram.com", icon: FaInstagram },
  { name: "TikTok", url: "https://tiktok.com", icon: FaTiktok },
  { name: "Telegram", url: "https://t.me", icon: FaTelegram },
  { name: "YouTube", url: "https://youtube.com", icon: FaYoutube },
  { name: "Email", url: "mailto:your-email@example.com", icon: FaEnvelope },
];

export const socLinksAbout = [
  { name: "Instagram", url: "https://instagram.com", icon: FaInstagram },
  { name: "TikTok", url: "https://tiktok.com", icon: FaTiktok },
  { name: "YouTube", url: "https://youtube.com", icon: FaYoutube },
];
