import Link from "next/link";

export default function SocLinks({ socialLinks, variant = "footer" }) {
  return (
    <div className="flex gap-5">
      {socialLinks.map((social) => (
        <Link
          key={social.url}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-textColorWhite hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out"
        >
          <social.icon
            className={`${
              variant === "footer"
                ? "w-6 h-6"
                : "w-[34px] h-[34px] l:w-[40.32px] l:h-[40.32px]"
            }`}
          />
        </Link>
      ))}
    </div>
  );
}
