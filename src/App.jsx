import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { GlobalReset, Loader } from './styled-components';
import { DataProvider } from './context';
import { lazy, Suspense } from 'react';
import { Champion, Champions, Regiones, Universo } from './pages';
// const Champion = lazy(() => import('./pages/Champion/Champion'));
// const Champions = lazy(() => import('./pages/Champions'));
// const Regiones = lazy(() => import('./pages/Regiones'));
// const Universo = lazy(() => import('./pages/Universo'));
export const App = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<BrowserRouter>
					<GlobalReset />
					<NavBar />
					<DataProvider>
						<Routes>
							<Route path='/champion/:id' element={<Champion />} />
							<Route path='*' element={<Navigate to='/champions' />} />
							<Route path='/champions' element={<Champions />} />
							{/* <Route path='/regiones' element={<Regiones />} /> */}
							{/* <Route path='/universo' element={<Universo />} /> */}
						</Routes>
					</DataProvider>
					<Footer />
				</BrowserRouter>
			</Suspense>
		</>
	);
};
