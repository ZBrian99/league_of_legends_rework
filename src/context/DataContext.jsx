import { createContext } from 'react';
// import { useChampionsExtra } from '../hooks';
import { data as extraChamInfo } from '../data/extra-cham-info.json';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	// const { championsExtra, isLoading} = useChampionsExtra();
  // console.log({extraChamInfo});
	// console.log(extraChamInfo.find((e) => e.id === 'Ahri').race);

  return <DataContext.Provider value={{extraChamInfo}}>{children}</DataContext.Provider>;
};
