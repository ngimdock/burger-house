import React from 'react'

const Button = (props) => {
	const {
		children,
		theme,
		size,
		className
	} = props

	//theme
	let backgroundColor, backgroundOverColor, textColor;
	if(theme === 'secondary'){
		backgroundColor = "bg-secondary"
		backgroundOverColor = "bg-secondary-hover"
	}
	else if(theme === 'danger'){
		backgroundColor = "bg-danger"
		backgroundOverColor = "bg-danger-hover"
	}
	else{
		backgroundColor = "bg-primary"
		backgroundOverColor = "bg-primary-hover"
	}

	//size
	let padding, textSize
	if(size === 'small'){
		textSize = 'text-sm'
		padding = 'py-1 px-3'
	}
	else if(size === 'big'){
		textSize = 'text-1xl'
		padding = 'py-3 px-6'
	}
	else{
		textSize = 'text-base'
		padding = 'py-3 px-6'
	}

	return(
		<button className={`${className} ${backgroundColor} hover:${backgroundOverColor} ${padding} ${textSize} text-white uppercase  font-medium`}>
			{children}
		</button>
	)
}

export default Button