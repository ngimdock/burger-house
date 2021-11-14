import React from 'react';
import HeroTop from '../../components/marketing/pageSection/HeroTop';
import LastProducts from '../../components/marketing/pageSection/LastProducts';
import Products from '../../components/marketing/pageSection/Products';
import Event from '../../components/marketing/pageSection/Event';
import Booking from '../../components/marketing/pageSection/Booking';

const homePage = () => {
	return (
		<>
			<HeroTop />
			<LastProducts />
			<Products />
			<Event />
			<Booking />
		</>
	);
};

export default homePage;