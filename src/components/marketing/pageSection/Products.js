import React from 'react'
import Container from '../../elements/Container'
import HeadingTitle from '../../elements/DisplayTitle/HeadingTitle'
import Heading from '../../elements/DisplayTitle/Heading'
import Button from '../../elements/Button'
import Product1 from '../../../medias/images/products/Product-1.jpg'
import Product2 from '../../../medias/images/products/Product-2.jpg'
import Product3 from '../../../medias/images/products/Product-3.jpg'

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
			<div className="grid grid-cols-3 gap-x-1 w-full my-20">
				<div className="text-center">
					<img src={Product1} className="w-full" alt="un hambergur a la salade" />
					<Heading variant="h3">
						Lorem Ipsum is simply
					</Heading>
					<p className="px-5">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s
					</p>

					<Button size="medium" theme="danger" className="font-secondary mt-5">
						acheter
					</Button>
				</div>

				<div className="text-center">
					<img src={Product2} className="w-full" alt="un hambergur a la salade" />
					<Heading variant="h3">
						Lorem Ipsum is simply
					</Heading>
					<p className="px-5">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s
					</p>

					<Button size="medium" theme="danger" className="font-secondary mt-5">
						acheter
					</Button>
				</div>

				<div className="text-center">
					<img src={Product3} className="w-full" alt="un hambergur a la salade" />
					<Heading variant="h3">
						Lorem Ipsum is simply
					</Heading>
					<p className="px-5">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s
					</p>

					<Button size="medium" theme="danger" className="font-secondary mt-5">
						acheter
					</Button>
				</div>
			</div>
		</>
	)
}

export default Products