import React from 'react';
import HeroTop from '../../components/marketing/pageSection/HeroTop';
import LastProducts from '../../components/marketing/pageSection/LastProducts';
import Products from '../../components/marketing/pageSection/Products';

const homePage = () => {
	return (
		<>
			<HeroTop />
			<LastProducts />
			<Products />
		</>
	);
};

export default homePage;