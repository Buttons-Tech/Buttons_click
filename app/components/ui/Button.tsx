import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button
        {...props}
        className={`px-6 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${props.className ?? ""}`}
    >
        {children}
    </button>
);

export default Button;