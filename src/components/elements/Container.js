import React from 'react';

const Container = ({children}) => {
	return(
		<section className="max-w-6xl h-full m-auto px-5 xl:px-0">
			{ children }
		</section>
	)
}

export default Container;