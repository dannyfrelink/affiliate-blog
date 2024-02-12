import "./styles/App.css";
import { AppProvider } from "./config/AppContext";
import AppRouter from "./config/AppRouter";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
	return (
		<HelmetProvider>
			<div>Test</div>
			<AppProvider>
				<AppRouter />
			</AppProvider>
		</HelmetProvider>
	);
};

export default App;
