import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Gnexis — inicio"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gnexis-mark" x1="0" y1="0" x2="22" y2="22">
            <stop offset="0%" stopColor="#8052ff" />
            <stop offset="100%" stopColor="#15846e" />
          </linearGradient>
        </defs>
        <path d="M11 0L22 8.5 17.5 22 4.5 22 0 8.5Z" fill="url(#gnexis-mark)" />
      </svg>
      <span className="text-[15px] font-normal tracking-[-0.3px] text-white">
        Gnexis
      </span>
    </Link>
  );
}
