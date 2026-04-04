import { useState } from "react";

const ContactCard = ({ icon, label, value }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col items-center justify-center gap-3 px-8 py-10 rounded-xl flex-1 min-w-[220px] transition-all duration-300 ${
        hovered
          ? "bg-tarnary text-white shadow-lg"
          : "bg-white text-primary border border-quinary shadow-sm"
      }`}
    >
      {/* Icon */}
      <div className={hovered ? "text-white" : "text-tarnary"}>
        {icon}
      </div>

      {/* Label */}
      <p className={`paragraph-regular ${hovered ? "text-white/80" : "text-secondary"}`}>
        {label}
      </p>

      {/* Value */}
      <p className={`paragraph-bold ${hovered ? "text-white" : "text-primary"}`}>
        {value}
      </p>
    </div>
  );
};

export default ContactCard;