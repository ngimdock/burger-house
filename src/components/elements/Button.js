import React from 'react'

const Button = (props) => {
	const {
		children,
		theme,
		size,
		className
	} = props

	//theme
	let backgroundColor;
	if(theme === 'secondary'){ backgroundColor = "bg-secondary hover:bg-secondary-hover" }
	else if(theme === 'danger'){ backgroundColor = "bg-danger hover:bg-danger-hover" }
	else{ backgroundColor = "bg-primary hover:bg-primary-hover" }

	//size
	let padding, textSize
	if(size === 'small'){
		textSize = 'text-xs'
		padding = 'py-1 px-3'
	}
	else if(size === 'big'){
		textSize = 'text-base'
		padding = 'py-3 px-6'
	}
	else{
		textSize = 'text-base'
		padding = 'py-3 px-6'
	}

	return(
		<button className={`${className} ${backgroundColor} ${padding} ${textSize} text-white uppercase  font-medium`}>
			{children}
		</button>
	)
}

export default Button