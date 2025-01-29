import React from "react"; 
import { Loader2 } from "lucide-react"; // Icon for loading state

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  isLoading = false,
  className = "",
  highlight = false, // New prop to control the cyan background
  ...props
}) => {
  // Inline class merging function (instead of cn())
  const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

  const baseStyles = "flex items-center justify-center rounded-md font-medium transition-all";
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  // Add cyan background when highlight is true
  const highlightVariant = highlight ? "bg-cyan-400 text-white hover:bg-cyan-500" : variants[variant];

  return (
    <button
      className={mergeClasses(
        baseStyles,
        sizes[size],
        highlight ? highlightVariant : variants[variant],
        isLoading && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="animate-spin w-5 h-5" />
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon className="w-5 h-5 mr-2" />}
          {children}
          {Icon && iconPosition === "right" && <Icon className="w-5 h-5 ml-2" />}
        </>
      )}
    </button>
  );
};

export default Button;
