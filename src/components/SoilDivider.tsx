export default function SoilDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={flip ? 'rotate-180' : ''}>
      <svg viewBox="0 0 1440 80" className="w-full h-auto block" preserveAspectRatio="none">
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,72 1440,24 L1440,80 L0,80 Z"
          className="fill-brand-50"
        />
      </svg>
    </div>
  )
}
