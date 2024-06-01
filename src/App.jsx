import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Champions } from './pages/champions/Champions';
import { Champion } from './pages/champion/Champion';
import { lazy, Suspense } from 'react';
// import { NavBar } from './components/navbar/NavBar';
// import { Footer } from './components/footer/Footer';
import { GlobalReset } from './styled-components/GlobalReset.styles';
import { Loader } from './styled-components/Loader.styles';
// import { NavBar } from './components/navbar/NavBar';
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbara/NavBar';
// import { NavBar } from './components/navbar/NavBar';
// import { Champion, Champions } from './pages';
// import { Champion, Champions, Universo, Regiones } from './pages';

// const Champion = lazy(() => import('./pages/Champion/Champion'));
// const Champions = lazy(() => import('./pages/Champions/Champions'));
// const Regiones = lazy(() => import('./pages/Regiones'));
// const Universo = lazy(() => import('./pages/Universo'));

export const App = () => {
	return (
		<>
			<GlobalReset />
			{/* <Suspense fallback={<Loader />}> */}
			<BrowserRouter>
				{/* <BrowserRouter basename='/league-of-legends'> */}
				<NavBar />
				<DataProvider>
					{/* <Champions/> */}
					<Routes>
						<Route path='/' element={<Champions />} />
						<Route path='/champion/:id/' element={<Champion />} />
						{/* <Route path='/champions/' element={<Champions />} /> */}
						{/* <Route path='/regions/' element={<Regiones />} /> */}
						{/* <Route path='/universe/' element={<Universo />} /> */}
						{/* <Route path='*' element={<Navigate to='/champions/' />} /> */}
					</Routes>
				</DataProvider>
				<Footer />
			</BrowserRouter>
			{/* </Suspense> */}
		</>
	);
};
