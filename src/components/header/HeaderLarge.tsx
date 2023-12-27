import React from "react";

interface HeaderLargeProps {
	align?: "center" | "bottom";
	Image: React.FC<JSX.IntrinsicElements["img"]>;
	title: string;
	subTitle: string;
}

const HeaderLarge: React.FC<HeaderLargeProps> = ({
	align = "center",
	Image,
	title,
	subTitle,
}) => {
	return (
		<header
			className={`${
				align === "center" && ""
			} h-screen [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>img]:absolute [&>img]:z-[-1]`}
		>
			<Image />

			<section
				className={`${
					align === "center"
						? "justify-center items-center text-center"
						: "justify-end pb-5"
				} flex flex-col h-[90vh] w-5/6 mx-auto text-white`}
			>
				<h1 className="font-extrabold text-2xl mb-3">{title}</h1>
				<p
					className={`${
						align === "center"
							? "font-semibold w-3/4 mx-auto"
							: "text-[#C3C3C3]"
					} text-sm`}
				>
					{subTitle}
				</p>
			</section>
		</header>
	);
};

export default HeaderLarge;
