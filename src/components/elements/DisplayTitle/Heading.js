import React from 'react'

const Heading = (props) => {

	const {
		children,
		variant,
		theme,  //style
		colorP,
		align,
		className

	} = props

	const defaultClass = "uppercase"
	let font, color

	switch(theme){
		case 'secondary':
			font = 'font-secondary'
			break
		default:
			font = 'font-sans tracking-tighter'
	}

	switch(colorP){
		case 'gray':
			color = 'text-gray-600'
			break
		default:
			color = 'text-secondary'
	}

	switch(variant){
		case 'h3':
			return(
				<div className={`flex justify-${[align]}`}>
					<h3 className={`text-2xl ${defaultClass} ${font} ${color} ${className}`}>
						{children}
					</h3>
				</div>
			)

		case 'h4':
			return(
				<div className={`flex justify-${[align]}`}>
					<h4 className={`text-lg ${defaultClass} ${font} ${color} ${className}`}>
						{children}
					</h4>
				</div>
			)
		default:
			return(
				<div className={`flex justify-${[align]}`}>
					<h2 className={`${theme === "secondary" ? "text-3xl lg:text-5xl" : "text-3xl"} ${defaultClass} ${font} ${color} ${className}`}>
						{children}
					</h2>
				</div>
			)
	}
}

export default Heading