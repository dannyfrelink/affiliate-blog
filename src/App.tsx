import "./styles/App.css";
import { AppProvider } from "./config/AppContext";
import AppRouter from "./config/AppRouter";
import { HelmetProvider } from "react-helmet-async";

function App() {
	return (
		<HelmetProvider>
			<AppProvider>
				<AppRouter />
			</AppProvider>
		</HelmetProvider>
	);
}

export default App;
