import React, { ButtonHTMLAttributes } from "react";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
}

export default function ButtonPrimary({
	label = "Sign Up",
	...props
}: ButtonPrimaryProps) {
	return (
		<button
			className="flex py-[0.625rem] px-[1.25rem] items-center bg-brand-primary text-white rounded-md transition-all ease-in-out duration-300 hover:opacity-80"
			{...props}
		>
			{label}
		</button>
	);
}
