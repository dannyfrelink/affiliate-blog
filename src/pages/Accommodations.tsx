import { useEffect } from "react";
import { useAppContext } from "../config/AppContext";
import Header from "../components/header/Header";
import HeaderImage from "../images/mockup/hotel.png";

const Accommodations = () => {
	const { setBlogsPageActive } = useAppContext();
	useEffect(() => {
		setBlogsPageActive(false);
	}, []);

	return (
		<div>
			<Header
				size="small"
				align="bottom"
				Image={() => <img src={HeaderImage} alt="Hotel Room" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
			/>
		</div>
	);
};

export default Accommodations;
