import React from "react";
import { useNavigate } from "react-router-dom";

interface OrangeButtonProps {
  label: string;
  to: string;             // can be internal route ("/about") or external URL ("https://...")
  color?: string;         // optional, defaults to orange
  textcolor?: string;     // optional, defaults to black
  scrollToId?: string;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({
  label,
  to,
  color = "#FF6F00",
  textcolor = "black",
  scrollToId = null,
}) => {
  const navigate = useNavigate();

  const handleInternalClick = () => {
    navigate(to);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // delay to ensure DOM is ready
    }else{
      
    }
  };

  // Shared button content (so we don’t duplicate the markup)
  const ButtonContent = (
    <div className="relative inline-flex items-center">
      <div
        className="absolute left-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ease-out group-hover:w-full overflow-hidden bg-transparent"
        style={{ borderColor: color }}
      >
        <span
          className="absolute -inset-px opacity-0 transition-all duration-300 ease-out rounded-full group-hover:opacity-100"
          style={{ backgroundColor: color }}
        ></span>
        <svg
          className="absolute left-3 z-10 w-4 h-4 transition-all duration-300 group-hover:text-black"
          style={{ color }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <span className="relative z-10 mx-[3.25rem] font-bold text-lg mr-12">
        {label}
      </span>
    </div>
  );

  return (
    <div className="pt-4">
      {to.startsWith("http") ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex font-poppins font-bold hover:!text-white transition-colors duration-300"
          style={{ color: textcolor }}
        >
          {ButtonContent}
        </a>
      ) : (
        <button
          onClick={handleInternalClick}
          className="group relative inline-flex font-poppins font-bold hover:!text-white transition-colors duration-300"
          style={{ color: textcolor }}
        >
          {ButtonContent}
        </button>
      )}
    </div>
  );
};

export default OrangeButton;
