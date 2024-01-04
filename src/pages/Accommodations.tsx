import { useEffect } from "react";
import { useAppContext } from "../config/AppContext";
import Header from "../components/header/Header";
import HeaderImage from "../images/mockup/hotel.png";
import Container from "../components/general/Container";
import H2 from "../components/typography/H2";
import BaseText from "../components/typography/BaseText";

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

			<Container>
				<H2 className="mb-2">
					Lorem ipsum dolor sit amet est explicabo blanditiis
				</H2>
				<div className="[&>*:not(:last-child)]:mb-3">
					<BaseText>
						Lorem ipsum dolor sit amet. Est explicabo blanditiis eum
						perferendis harum eum galisum voluptas quo natus nihil
						aut aspernatur voluptas rem ipsum dolorum aut fugiat
						cumque. Et officiis iure et asperiores totam quo sunt
						alias. Sed illum perferendis quo possimus inventore et
						reiciendis modi. Sed quos voluptate nam deleniti veniam
						ut nihil consequatur.
					</BaseText>
					<BaseText>
						Et dolorem rerum qui doloremque consectetur aut incidunt
						fugit ad voluptatibus dignissimos aut laborum excepturi
						et dicta dicta quo fuga enim. Est ipsum possimus a
						corporis dolores qui placeat dolor aut veritatis eveniet
						non cumque autem sed iure veritatis est suscipit sequi.
						Est asperiores porro non officia incidunt sed autem
						dolor est dolores illo et molestiae quas aut error
						totam.
					</BaseText>
					<BaseText>
						Et optio veniam aut veniam voluptatem et explicabo ullam
						id aperiam cumque aut neque laborum ex voluptatem
						facere. Eum rerum aperiam eos fugiat dolor et quis
						cupiditate sed animi enim et ducimus beatae. Et velit
						magni et fugiat voluptas est inventore recusandae eum
						nihil dolorum sed ipsa totam ea praesentium ipsum qui
						temporibus saepe.
					</BaseText>
				</div>
			</Container>
		</div>
	);
};

export default Accommodations;
