import React, { ButtonHTMLAttributes } from "react";

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
}

export default function ButtonSecondary({
	label = "Login",
	...props
}: ButtonSecondaryProps) {
	return (
		<button
			className="flex py-[0.625rem] px-[1.25rem] items-center   text-brand-primary bg-neutral-silver rounded-md transition-all ease-in-out duration-300 relative 
			after:absolute after:w-0 after:h-[1px] after:bg-brand-primary after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:transition-all after:ease-in-out after:duration-300 after:hover:w-[100%]"
			{...props}
		>
			{label}
		</button>
	);
}
