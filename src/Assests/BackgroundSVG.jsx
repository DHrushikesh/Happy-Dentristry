export default function DentistryBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">

      {/* Tooth */}
      <svg
        className="absolute top-20 left-10 w-20 opacity-20 animate-floatSlow"
        viewBox="0 0 24 24"
        fill="#fb923c"
      >
        <path d="M12 2C8 2 5 4.5 5 9c0 3 1.5 4.5 2.5 6 .7 1 1 4 2.5 4s1.8-3 2-4c.2 1 1 4 2.5 4s1.8-3 2.5-4C17.5 13.5 19 12 19 9c0-4.5-3-7-7-7z"/>
      </svg>

      {/* Medical Cross */}
      <svg
        className="absolute bottom-32 right-16 w-16 opacity-20 animate-float"
        viewBox="0 0 24 24"
        fill="#22c55e"
      >
        <path d="M10 2h4v6h6v4h-6v6h-4v-6H4V8h6z"/>
      </svg>

      {/* Stethoscope */}
      <svg
        className="absolute top-1/2 right-1/3 w-24 opacity-10 animate-floatReverse"
        viewBox="0 0 24 24"
        fill="#0ea5e9"
      >
        <path d="M6 2v6a6 6 0 0012 0V2h-2v6a4 4 0 01-8 0V2H6zm12 14a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>

    </div>
  );
}
