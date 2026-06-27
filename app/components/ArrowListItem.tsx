export default function ArrowListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 group text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform flex-shrink-0"
      >
        <path d="M5 12h14" />
        <path d="M13 18l6-6" />
        <path d="M13 6l6 6" />
      </svg>
      {children}
    </li>
  );
}
