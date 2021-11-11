import React from 'react';

const Container = ({children}) => {
	return(
		<section className="max-w-6xl h-full m-auto ">
			{ children }
		</section>
	)
}

export default Container;