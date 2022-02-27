import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import Listings from './components/pages/Listings'
import ListingDetails from './components/pages/Listings'
import { Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './store/GlobalState';

function App() {
  return (
	<div className='App'>
		<Layout>
			<GlobalProvider>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='listings' element={<Listings/>} />
					<Route path='listings/:listing_id' element={<ListingDetails/>} />
				</Routes>
			</GlobalProvider>
		</Layout>
	</div>
  )
}

export default App
