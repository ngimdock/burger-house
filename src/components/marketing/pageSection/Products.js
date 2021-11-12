import React from 'react'
import Container from '../../elements/Container'
import HeadingTitle from '../../elements/DisplayTitle/HeadingTitle'
import Heading from '../../elements/DisplayTitle/Heading'

const Products = () => {
	return(
		<>
			<Container>

				<HeadingTitle>
					Toujours les delicieux burger
				</HeadingTitle>

				<Heading theme="secondary">
					choisissez et savourez
				</Heading>

				<p className="text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
					scrambled it to make a type specimen book since the 1500s
				</p>

			</Container>
			<div className="bg-secondary w-full h-72">
				
			</div>
		</>
	)
}

export default Products