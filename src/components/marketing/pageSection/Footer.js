import React from 'react'
import Container from '../../elements/Container'
import bgFooter from '../../../medias/images/background/bg-footer.jpg'
import { FaBeer } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GiPositionMarker } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";



const Footer = () => {

	return(
		<Container >
		<footer className="relative bg-black w-full text-white px-10 pt-10 pb-5 font-sans">
			<img src={bgFooter} alt="des burger sur le planche" className="absolute top-0 left-0 w-full h-full z-0" />
			<div className="relative grid grid-cols-2 pt-10 z-10">
				<div className="">
					Logo

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis urna non nunc 
						facilisis pharetra. Etiam sit amet nibh nisl. Vivamus nulla leo, dapibus ut ultricies ut, 
						vehicula vitae nisl. Sed tortor ligula, viverra non vestibulum vitae, sagittis consectetur turpis. 
						Mauris quam velit, malesuada eget lacus nec, sodales euismod lorem. 
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
					<ul className="flex">
						<li><AiFillInstagram className=" text-2xl hover:text-primary"/></li>
						<li><BsFacebook className="ml-4 mr-4 text-2xl hover:text-primary"/></li>
						<li><AiFillTwitterCircle className="mr-4 text-2xl hover:text-primary"/></li>
						<li><IoLogoWhatsapp className=" text-2xl hover:text-primary"/></li>
					</ul>
				</div>
			</div>
		</footer>
		</Container>
	)
}

export default Footer