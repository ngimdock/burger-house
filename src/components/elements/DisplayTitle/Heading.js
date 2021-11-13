import React from 'react'

const Heading = (props) => {

	const {
		children,
		variant,
		theme,  //style
		colorP

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
				<div className="flex items-center justify-center my-5">
					<h3 className={`text-2xl ${defaultClass} ${font} ${color}`}>
						{children}
					</h3>
				</div>
			)
		default:
			return(
				<div className="flex items-center justify-center my-5">
					<h2 className={`${theme === "secondary" ? "text-5xl" : "text-3xl"} ${defaultClass} ${font} ${color}`}>
						{children}
					</h2>
				</div>
			)
	}
}

export default Heading