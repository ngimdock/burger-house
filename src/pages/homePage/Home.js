import React from 'react';
import HeroTop from '../../components/marketing/pageSection/HeroTop';
import LastProducts from '../../components/marketing/pageSection/LastProducts';
import Products from '../../components/marketing/pageSection/Products';
import Event from '../../components/marketing/pageSection/Event';
import Booking from '../../components/marketing/pageSection/Booking';
import Footer from '../../components/marketing/pageSection/Footer';

const homePage = () => {
	return (
		<>
		{/*<div className="w-full h-32 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-indigo-500 xl:bg-pink-500"></div>*/}
			<HeroTop />
			<LastProducts />
			<Products />
			<Event />
			<Booking />
			<Footer />
		</>
	);
};

export default homePage;