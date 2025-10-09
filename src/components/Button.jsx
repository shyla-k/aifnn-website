export default function Button({ children, onClick, variant = "primary" }) {
  const baseStyles = `
    px-8 py-3 rounded-full font-semibold transition-all duration-300
  `;

  const variants = {
    primary: `
      text-white
      bg-gradient-to-b from-[#1e3a8a] to-[#0d1b2a]
      border border-blue-500
      shadow-[0_0_10px_rgba(14,33,54,0.7)]
      hover:shadow-[0_0_20px_rgba(30,64,175,0.9)]
      hover:scale-105
      active:scale-95
    `,
    secondary: `
      text-white
      border border-blue-500
      bg-transparent
      hover:bg-gradient-to-b hover:from-[#1e3a8a] hover:to-[#0d1b2a]
      shadow-[0_0_10px_rgba(14,33,54,0.7)]
      hover:shadow-[0_0_20px_rgba(30,64,175,0.9)]
      hover:scale-105
      active:scale-95
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
