export default function DecorativeLeaf({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 10 C 140 30, 180 70, 180 110 C 180 150, 140 180, 100 190 C 60 180, 20 150, 20 110 C 20 70, 60 30, 100 10 Z"
        className="fill-brand-300"
      />
      <path
        d="M100 20 L 100 180"
        stroke="currentColor"
        className="text-brand-500"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 60 L 60 90 M100 90 L 140 120 M100 120 L 65 150"
        stroke="currentColor"
        className="text-brand-500"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
