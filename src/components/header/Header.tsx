import React from "react";

interface HeaderLargeProps {
	Image: React.FC<JSX.IntrinsicElements["img"]>;
	title: string;
	subTitle?: string;
	size?: "small" | "large";
	align?: "center" | "bottom";
}

const HeaderLarge: React.FC<HeaderLargeProps> = ({
	Image,
	title,
	subTitle,
	size = "large",
	align = "center",
}) => {
	return (
		<header
			className={`${
				size === "large"
					? "h-screen [&>img]:h-full"
					: "h-[50vh] [&>img]:h-1/2"
			} [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>img]:absolute [&>img]:z-[-1] text-primary`}
		>
			<Image />

			<section
				className={`${
					align === "center"
						? "justify-center items-center text-center"
						: "justify-end pb-5"
				} ${
					size === "large" ? "h-[90vh]" : "h-[40vh]"
				} flex flex-col w-5/6 mx-auto`}
			>
				<h1 className="font-extrabold text-2xl mb-3">{title}</h1>

				{subTitle && (
					<p
						className={`${
							align === "center"
								? "font-semibold w-3/4 mx-auto"
								: "text-[#C3C3C3]"
						} text-sm`}
					>
						{subTitle}
					</p>
				)}
			</section>
		</header>
	);
};

export default HeaderLarge;
