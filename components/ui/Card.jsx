export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-md
        p-6
        hover:shadow-xl
        transition
        ${className}
      `}
    >
      {children}
    </div>
  );
}