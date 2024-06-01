import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { lazy, Suspense } from 'react';
import { GlobalReset } from './styled-components/GlobalReset.styles';
import { Loader } from './styled-components/Loader.styles';
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbar/NavBar';

const Champion = lazy(() => import('./pages/champion/Champion'));
const Champions = lazy(() => import('./pages/champions/Champions'));
// const Regiones = lazy(() => import('./pages/Regiones'));
// const Universo = lazy(() => import('./pages/Universo'));

export const App = () => {
	return (
		<>
			<GlobalReset />
			<Suspense fallback={<Loader />}>
				<BrowserRouter>
					{/* <BrowserRouter basename='/league-of-legends'> */}
					<NavBar />
					<DataProvider>
						<Routes>
							<Route path='/champions/' element={<Champions />} />
							<Route path='/champion/:id' element={<Champion />} />
							{/* <Route path='/regions/' element={<Regiones />} /> */}
							{/* <Route path='/universe/' element={<Universo />} /> */}
							<Route path='*' element={<Navigate to='/champions/' />} />
						</Routes>
					</DataProvider>
					<Footer />
				</BrowserRouter>
			</Suspense>
		</>
	);
};
