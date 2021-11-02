import React from 'react';

const Container = ({children}) => {
	return(
		<div className="max-w-6xl h-full m-auto bg-white">
			{ children }
		</div>
	)
}

export default Container;