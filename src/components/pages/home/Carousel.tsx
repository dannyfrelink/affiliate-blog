import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import H3 from "../../typography/H3";
import { useAppContext } from "../../../config/AppContext";
import { Link } from "react-router-dom";
import { Destination } from "../../../pages/Blogs/BlogOverview";

interface CarouselProps {
	items: Destination[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
	const { screenSize } = useAppContext();
	const sliderRef = useRef<Slider>(null);

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: screenSize > 750 ? "28%" : "0",
		appendDots: (dots: React.ReactNode) => (
			<div>
				<ArrowBackIosRoundedIcon
					className={`cursor-pointer ${
						screenSize > 750 && "!text-3xl"
					}`}
					onClick={prevSlide}
				/>
				<ul
					className={`flex justify-center list-none [&>li>button::before]:!text-secondary [&>li>button::before]:flex [&>li>button::before]:items-center ${
						screenSize < 750
							? "mx-2 [&>li>button::before]:!text-base"
							: screenSize < 1250
							? "mx-3 [&>li]:!mx-3 [&>li>button::before]:!text-lg [&>li>button::before]:!top-[0.1rem]"
							: "mx-4 [&>li]:!mx-4 [&>li>button::before]:!text-xl [&>li>button::before]:!top-[0.1rem]"
					}`}
				>
					{dots}
				</ul>
				<ArrowForwardIosRoundedIcon
					className={`cursor-pointer ${
						screenSize > 750 && "!text-3xl"
					}`}
					onClick={nextSlide}
				/>
			</div>
		),
	};

	return (
		<Slider
			ref={sliderRef}
			{...settings}
			className={`[&>div.slick-dots]:!flex [&>div.slick-dots]:items-center [&>div.slick-dots]:justify-center [&>div.slick-dots]:relative [&>div.slick-dots]:bottom-0 ${
				screenSize < 750
					? "[&>div.slick-dots]:mt-4 [&>div.slick-list>div>div]:px-1"
					: `${
							screenSize < 1250
								? "[&>div.slick-list>div>div]:px-3"
								: screenSize < 1500
								? "[&>div.slick-list>div>div]:px-7"
								: "[&>div.slick-list>div>div]:px-10"
					  } [&>div.slick-dots]:mt-3 [&>div.slick-list>div>div]:pb-3`
			}`}
		>
			{items.map((item, index) => {
				const image = require(`../../../assets/mockup/${item.coverImage}`);

				return (
					<Link
						to={`/blogs/${item.id}`}
						className="relative"
						key={index}
					>
						<img
							src={image}
							alt={`Slide ${index + 1}`}
							className={`w-full object-cover object-center rounded-2xl ${
								screenSize < 750
									? "h-96"
									: `shadow-subtle ${
											screenSize < 1250
												? "h-[420px]"
												: "h-[470px]"
									  }`
							}`}
						/>

						<H3
							color="white"
							className="absolute bottom-6 w-[90%] left-[5%]"
						>
							{item.title}
						</H3>
					</Link>
				);
			})}
		</Slider>
	);
};

export default Carousel;
