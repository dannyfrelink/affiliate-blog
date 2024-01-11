import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	useRef,
} from "react";

interface AppContextProps {
	screenSize: number;
	navOpen: boolean;
	setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
	scrolled: number;
	scrolledUp: boolean;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProps {
	children: JSX.Element;
}

export const AppProvider: React.FC<AppProps> = ({ children }) => {
	const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
	const [navOpen, setNavOpen] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<number>(window.scrollY);
	const [scrolledUp, setScrolledUp] = useState<boolean>(false);
	const prevScrollYRef = useRef<number>(window.scrollY);

	useEffect(() => {
		const handleWindowResize = () => {
			setScreenSize(window.innerWidth);
		};

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrolled(currentScrollY);
			setScrolledUp(prevScrollYRef.current > currentScrollY);
			prevScrollYRef.current = currentScrollY;
		};

		window.addEventListener("resize", handleWindowResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const contextValue: AppContextProps = {
		screenSize,
		navOpen,
		setNavOpen,
		scrolled,
		scrolledUp,
	};

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};
