import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

interface CarouselProps {
	items: string[];
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
				<div className="mr-3" key={index}>
					<img
						src={item}
						alt={`Slide ${index + 1}`}
						className="w-full h-96 object-cover object-center rounded-2xl"
					/>
				</div>
			))}
		</Slider>
	);
};

export default Carousel;
