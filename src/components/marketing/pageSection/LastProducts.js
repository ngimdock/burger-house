import React from 'react'
import Container from '../../elements/Container'
import imgProduct1 from '../../../medias/images/products/LastProducts-1.jpg'
import imgProduct2 from '../../../medias/images/products/LastProducts-2.jpg'
import imgProduct3 from '../../../medias/images/products/LastProducts-3.jpg'

const LastProducts = () => {

	return(
		<Container>
			<div className="grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-9 w-full h-96 px-11 my-20 text-white uppercase">

				<div className="relative row-span-2 bg-primary h-full rounded-md p-6">
					<img src={imgProduct1} className="absolute top-0 left-0 z-1 rounded-md w-full h-full object-cover" alt="Un delicieux hamburger pose sur un bois" />
					{/*<div className="absolute top-0 left-0 z-3 w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 opacity-10"></div>*/}
					<div className="relative z-3">
						<span className="block font-bold text-lg font-sans">killer burger</span>
						<span className="text-2xl font-black font-sans">burger le plus populaire</span>
					</div>
				</div>

				<div className="relative bg-primary h-full rounded-md p-6">
					<img src={imgProduct2} className="absolute top-0 left-0 z-1 rounded-md w-full h-full object-cover" alt="deux delicieux hamburger pose sur un bois" />
					{/*<div className="absolute top-0 left-0 z-3 w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 opacity-10"></div>*/}
					<div className="relative z-3">
						<span className="block font-bold text-lg font-sans">Island burger</span>
						<span className="block text-2xl font-black font-sans">Plus de plaisir</span>
						<span className="text-2xl font-black font-sans">plus de gout</span>
					</div>
				</div>

				<div className="relative bg-primary h-full rounded-md p-6">
					<img src={imgProduct3} className="absolute top-0 left-0 z-1 rounded-md w-full h-full object-cover" alt="Les elements de fabrication d'un hamburger" />
					{/*<div className="absolute top-0 left-0 z-3 w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 opacity-10"></div>*/}
					<div className="relative z-3">
						<span className="block font-bold text-lg font-sans">Orlando's burger</span>
						<span className="text-2xl font-black font-sans">frais & pimente</span>
					</div>
				</div>

			</div>
		</Container>
	)
}

export default LastProducts