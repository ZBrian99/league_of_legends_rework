import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Champion, Champions, Regiones, Universo } from './pages';
import { GlobalReset } from './styled-components';

export const App = () => {
	return (
		<>
			<GlobalReset />
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/champion/:id' element={<Champion />} />
					<Route path='*' element={<Navigate to='/champions' />} />
					<Route path='/champions' element={<Champions />} />
					<Route path='/regiones' element={<Regiones />} />
					<Route path='/universo' element={<Universo />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
