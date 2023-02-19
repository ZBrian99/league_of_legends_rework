import { createContext } from 'react';
import { useChampionsExtra } from '../hooks';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const { championsExtra, isLoading} = useChampionsExtra();

  return <DataContext.Provider value={{ championsExtra, isLoading }}>{children}</DataContext.Provider>;
};
