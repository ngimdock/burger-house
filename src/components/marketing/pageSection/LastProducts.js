import React from 'react'
import Container from '../../elements/Container'
import imgProduct1 from '../../../medias/images/products/LastProducts-1.jpg'
import imgProduct2 from '../../../medias/images/products/LastProducts-2.jpg'
import imgProduct3 from '../../../medias/images/products/LastProducts-3.jpg'

const LastProducts = () => {

	return(
		<Container>
			<div className="grid md:grid-cols-2 grid-rows-3  md:grid-rows-2 gap-y-5 md:gap-3 lg:gap-9 w-full h-96 px-0 lg:px-11 my-20 text-white uppercase">

				<div className="relative md:row-span-2 bg-primary h-full rounded-md p-6">
					<img src={imgProduct1} className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover" alt="Un delicieux hamburger pose sur un bois" />
					<div className="block sm:hidden rounded-md absolute top-0 left-0 z-10 w-full h-full bg-black opacity-50"></div>
					<div className="relative z-20">
						<span className="block font-bold text-lg font-sans">killer burger</span>
						<span className="text-xl lg:text-2xl font-black font-sans">burger le plus populaire</span>
					</div>
				</div>

				<div className="relative bg-primary h-full rounded-md p-6">
					<img src={imgProduct2} className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover" alt="deux delicieux hamburger pose sur un bois" />
					<div className="block sm:hidden rounded-md absolute top-0 left-0 z-10 w-full h-full bg-black opacity-50"></div>
					<div className="relative z-20">
						<span className="block font-bold text-lg font-sans">Island burger</span>
						<span className="block text-xl lg:text-2xl font-black font-sans">Plus de plaisir</span>
						<span className="text-xl lg:text-2xl font-black font-sans">plus de gout</span>
					</div>
				</div>

				<div className="relative bg-primary h-full rounded-md p-6">
					<img src={imgProduct3} className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover" alt="Les elements de fabrication d'un hamburger" />
					<div className="block sm:hidden rounded-md absolute top-0 left-0 z-10 w-full h-full bg-black opacity-50"></div>
					<div className="relative z-20">
						<span className="block font-bold text-lg font-sans">Orlando's burger</span>
						<span className="text-xl lg:text-2xl font-black font-sans">frais & pimente</span>
					</div>
				</div>

			</div>
		</Container>
	)
}

export default LastProducts