import React from "react";
import { useAppContext } from "../../config/AppContext";

interface TitleProps {
	title: string;
	subTitle?: string;
	align?: string;
	size?: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle, align, size }) => {
	const { screenSize } = useAppContext();

	return (
		<section
			className={`${
				screenSize < 750
					? align === "center"
						? "justify-center items-center text-center"
						: "justify-end pb-5"
					: "justify-center items-center text-center"
			} ${
				screenSize < 750
					? size === "large"
						? "h-[90vh]"
						: "h-[40vh]"
					: "h-[90vh]"
			} flex flex-col w-5/6 mx-auto`}
		>
			<h1 className="font-extrabold text-2xl mb-3">{title}</h1>

			{subTitle && (
				<p
					className={`${
						screenSize < 750
							? align === "center"
								? "font-semibold w-3/4 mx-auto"
								: "text-[#C3C3C3]"
							: "font-semibold w-3/4 mx-auto"
					} text-sm`}
				>
					{subTitle}
				</p>
			)}
		</section>
	);
};

export default Title;
