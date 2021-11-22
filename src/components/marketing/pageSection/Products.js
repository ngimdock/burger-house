import React from 'react'
import Container from '../../elements/Container'
import HeadingTitle from '../../elements/DisplayTitle/HeadingTitle'
import Heading from '../../elements/DisplayTitle/Heading'
import Button from '../../elements/Button'
import Product1 from '../../../medias/images/products/Product-1.jpg'
import Product2 from '../../../medias/images/products/Product-2.jpg'
import Product3 from '../../../medias/images/products/Product-3.jpg'
import Product4 from '../../../medias/images/products/product-4.jpg'

const Products = () => {
	return(
		<>
			<Container>

				<HeadingTitle>
					Toujours les delicieux burger
				</HeadingTitle>

				<Heading theme="secondary" align="center" className="my-5 text-center">
					choisissez et savourez
				</Heading>

				<p className="text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
					scrambled it to make a type specimen book since the 1500s
				</p>

			</Container>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-5 lg:gap-2 w-full my-20 px-5 md:px-0">
				<div className="text-center m-auto sm:w-2/3 md:w-full">
					<img src={Product1} className="w-full" alt="un hambergur a la salade" />
					<Heading variant="h3" align="center" className="my-5">
						Lorem Ipsum is simply
					</Heading>
					<p className="px-5">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s
					</p>

					<Button size="medium" theme="danger" className="font-secondary mt-2">
						acheter
					</Button>
				</div>

				<div className="text-center m-auto sm:w-2/3 md:w-full">
					<img src={Product2} className="w-full" alt="un hambergur a la salade" />
					<Heading variant="h3" align="center" className="my-5">
						Lorem Ipsum is simply
					</Heading>
					<p className="px-5">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s
					</p>

					<Button size="medium" theme="danger" className="font-secondary mt-2">
						acheter
					</Button>
				</div>


				<div className="text-center m-auto sm:w-2/3 md:w-full md:pt-5 lg:pt-0">
					<img src={Product3} className="w-full" alt="un hambergur a la salade" />
					<Heading variant="h3" align="center" className="my-5">
						Lorem Ipsum is simply
					</Heading>
					<p className="px-5">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s
					</p>

					<Button size="medium" theme="danger" className="font-secondary mt-2">
						acheter
					</Button>
				</div>

				<div className="hidden md:block lg:hidden text-center m-auto sm:w-2/3 md:w-full md:pt-5 lg:pt-0">
					<img src={Product4} className="w-full" alt="un hambergur a la salade" />
					<Heading variant="h3" align="center" className="my-5">
						Lorem Ipsum is simply
					</Heading>
					<p className="px-5">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
					the industry's standard dummy text ever since the 1500s
					</p>

					<Button size="medium" theme="danger" className="font-secondary mt-2">
						acheter
					</Button>
				</div>
			</div>
		</>
	)
}

export default Products