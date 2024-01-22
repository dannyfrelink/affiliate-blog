import Header from "../components/header/Header";
import HeaderImage from "../assets/header/accommodations.jpg";
import BaseText from "../components/typography/BaseText";
import Overview from "../components/pages/overview/Overview";
import Footer from "../components/general/Footer";
import data from "../data/accommodations.json";
import AccommodationList from "../components/pages/overview/AccomodationList";
import IntroOverview from "../components/pages/overview/IntroOverview";

export interface Destination {
	image: string;
	name: string;
	description: string;
	prices: {
		high: number;
		low: number;
	};
	link: string;
}

export interface AccommodationsData {
	[destination: string]: Destination[];
}

const Accommodations = () => {
	const accommodations: AccommodationsData = data.accommodations;
	const destinations = Object.keys(accommodations);

	return (
		<div>
			<Header
				size="small"
				align="bottom"
				Image={() => <img src={HeaderImage} alt="Hotels op Bali" />}
				imageHeight="small"
				title="Accommodaties"
			/>

			<Overview destinations={destinations}>
				<IntroOverview title="Accommodatie tips in Indonesië!">
					<BaseText>
						Zelf speuren wij altijd het internet af om op zoek te
						gaan naar de mooiste verblijven. Soms zoeken wij meer
						budget opties en af en toe verblijven we op een plek die
						wat duurder is. In Indonesië kan je echt van alles
						vinden: een guesthouse met lieve eigenaren, een luxe
						privé villa en alles wat hier tussenin zit. Een ding is
						zeker, al deze verblijven hebben onze ervaring een
						stukje mooier gemaakt. Wij hebben al op heel wat plekken
						verbleven en onze aanraders kan je op deze pagina
						vinden.
					</BaseText>
					<BaseText>
						Omdat Indonesië tegenwoordig heel populair is, is het
						verstandig van tevoren wat accommodaties vast te leggen.
						Dit kan vaak met gratis annulering, waardoor je altijd
						nog je plannen kan wijzigen.
					</BaseText>
				</IntroOverview>

				<AccommodationList
					accommodations={accommodations}
					destinations={destinations}
				/>
			</Overview>

			<Footer />
		</div>
	);
};

export default Accommodations;
