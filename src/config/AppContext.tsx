import React, { createContext, useState, useContext } from "react";

interface AppContextProps {
	// Define your context state and any functions you need
	count: number;
	increment: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProps {
	children: JSX.Element;
}

export const AppProvider: React.FC<AppProps> = ({ children }) => {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount(count + 1);
	};

	const contextValue: AppContextProps = {
		count,
		increment,
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
