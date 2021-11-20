import React from 'react'
import Container from '../../elements/Container'
import bgFooter from '../../../medias/images/background/bg-footer.jpg'
import { MdEmail } from 'react-icons/md';
import { GiPositionMarker } from "react-icons/gi";

import logoWhite from '../../../medias/svg/Logo-burger-house-white.svg';
import instagram from '../../../medias/svg/instagram-brands.svg';
import facebook from '../../../medias/svg/facebook-f-brands.svg';
import twitter from '../../../medias/svg/twitter-brands.svg';
import whatsap from '../../../medias/svg/whatsapp-brands.svg';


const Footer = () => {

	return(
		<Container >
		<footer className="relative bg-black w-full text-white px-10 pt-10 pb-5 font-sans">
			<img src={bgFooter} alt="des burger sur le planche" className="absolute top-0 left-0 w-full h-full z-0" />
			<div className="relative grid grid-cols-2 pt-10 z-10">
				<div className="">
					<img src={logoWhite} alt="burger house" className="my-10 w-2/3" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis urna non nunc 
						facilisis pharetra. Etiam sit amet nibh nisl. Vivamus nulla leo, dapibus ut ultricies ut, 
						vehicula vitae nisl. Sed tortor ligula, viverra non vestibulum vitae, sagittis consectetur turpis. 
						Mauris quam velit, malesuada eget lacus nec, sodales euismod lorem. 
						<img src={facebook} alt="facebook" className="w-5" />
					</p>
				</div>
				<div className="flex justify-center items-end pb-5">
					<ul>
						<li className="flex items-center my-2">
							<GiPositionMarker className="text-3xl" />
							<span className="ml-2 uppercase font-extrabold text-lg traking-tighter">15 place Bellecours, 6900 Lion</span>
						</li>
						<li className="flex items-center  my-2">
							<MdEmail className="text-3xl"/>
							<span className="ml-2 uppercase font-extrabold text-lg traking-tighter">15 place Bellecours, 6900 Lion</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="relative flex justify-between mt-20 z-10">
				<div>
					<p>@Burger house 2021 tout droit reserve</p>
				</div>
				<div>
					<ul className="flex space-x-4">
						<a href="https://www.instagram.com/ngimdock/" target="_blank" rel="noreferrer">
							<li className="w-8 h-8 flex justify-center items-center rounded-full bg-white hover:bg-primary">
								<img src={instagram} alt="instagram z-10" className="w-5" />
							</li>
						</a>

						<a href="https://www.facebook.com/ngimdock" target="_blank" rel="noreferrer">
							<li className="w-8 h-8 flex justify-center items-center rounded-full bg-white hover:bg-primary">
								<img src={facebook} alt="facebook " className="w-5" />
							</li>
						</a>

						<a href="https://twitter.com/NZemfack" target="_blank" rel="noreferrer">
							<li className="w-8 h-8 flex justify-center items-center rounded-full bg-white hover:bg-primary">
								<img src={twitter} alt="twiter " className="w-5" />
							</li>
						</a>

						<a href="https://www.linkedin.com/in/ngimdock-zemfack/" target="_blank" rel="noreferrer">
							<li className="w-8 h-8 flex justify-center items-center rounded-full bg-white hover:bg-primary">
								<img src={whatsap} alt="whatsap " className="w-5" />
							</li>
						</a>
					</ul>
				</div>
			</div>
		</footer>
		</Container>
	)
}

export default Footer