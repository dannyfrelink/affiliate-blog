import React, { createContext, useState, useContext, useEffect } from "react";

interface AppContextProps {
	screenSize: number;
	navOpen: boolean;
	setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProps {
	children: JSX.Element;
}

export const AppProvider: React.FC<AppProps> = ({ children }) => {
	const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
	const [navOpen, setNavOpen] = useState<boolean>(false);

	useEffect(() => {
		const handleWindowResize = () => {
			setScreenSize(window.innerWidth);
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const contextValue: AppContextProps = {
		screenSize,
		navOpen,
		setNavOpen,
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
