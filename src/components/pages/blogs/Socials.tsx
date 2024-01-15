import React from "react";
import H3 from "../../typography/H3";
import { Link } from "react-router-dom";

interface SocialsProps {}

const Socials: React.FC<SocialsProps> = () => {
	const socials = [
		{
			src: "icons8-instagram.svg",
			link: "https://www.instagram.com/reis.feeld/",
		},
		{
			src: "icons8-tiktok.svg",
			link: "https://www.tiktok.com/@reis.feeld",
		},
		{
			src: "icons8-youtube.svg",
			link: "https://www.youtube.com/@LisatenHoope",
		},
		{
			src: "icons8-facebook.svg",
			link: "",
		},
	];

	return (
		<div>
			<H3 className="mb-4">Volg ons op</H3>
			<div className="flex gap-3 [&>*]:w-10">
				{socials.map((social, index) => {
					const src = require(`../../../images/socials/${social.src}`);
					const alt = social.src.split("icons8-")[1].split(".svg")[0];

					return (
						<Link target="_blank" key={index} to={social.link}>
							<img src={src} alt={alt} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Socials;
