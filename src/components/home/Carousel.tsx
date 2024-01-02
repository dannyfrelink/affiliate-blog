import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import H3 from "../typography/H3";

interface CarouselProps {
	items: { src: string; title: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
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
		appendDots: (dots: React.ReactNode) => (
			<div>
				<ArrowBackIosRoundedIcon onClick={prevSlide} />
				<ul className="flex justify-center list-none mx-2 [&>li>button::before]:!text-base [&>li>button::before]:!text-secondary">
					{dots}
				</ul>
				<ArrowForwardIosRoundedIcon onClick={nextSlide} />
			</div>
		),
	};

	return (
		<Slider
			ref={sliderRef}
			{...settings}
			className="[&>div.slick-dots]:!flex [&>div.slick-dots]:items-center [&>div.slick-dots]:justify-center [&>div.slick-dots]:relative [&>div.slick-dots]:bottom-0 [&>div.slick-dots]:mt-4"
		>
			{items.map((item, index) => (
				<div className="relative" key={index}>
					<img
						src={item.src}
						alt={`Slide ${index + 1}`}
						className="w-full h-96 object-cover object-center rounded-2xl"
					/>

					<H3
						color="white"
						className="absolute bottom-6 w-[90%] left-[5%]"
					>
						{item.title}
					</H3>
				</div>
			))}
		</Slider>
	);
};

export default Carousel;
