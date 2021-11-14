import React from 'react'
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css'
import '../../../css/carousel.css'

import Container from '../../elements/Container'
import Heading from '../../elements/DisplayTitle/Heading'
import imgEvent from '../../../medias/images/photos/demi-finale.jpg'
import imgEvent2 from '../../../medias/images/photos/event2.jpeg'
import imgEvent3 from '../../../medias/images/photos/event3.jpeg'


const Slide = (props) => {

	const{
		children,
		img,
		subTitle,
		title,
		alt
	} = props


	return(
		<div className="grid grid-cols-2 w-full p-5">
	  	<div className="p-5">
	  		<Heading variant="h4">
	  			{subTitle}
	  		</Heading>
	  		<Heading variant="h3" theme="secondary" className="my-2">
	  			{title}
	  		</Heading>
	  		<p className="leading-6 mt-3 text-lg tracking-wide leading-relaxed text-gray-600">
	  			{children}
	  		</p>
	  	</div>

	  	<div className="relative w-full h-full">
	  		<img src={img} alt={alt} className="absolute top-0 left-0 h-full w-full object-cover object-center" />
	  	</div>
	  </div>
	)
}


const Event = () => {

	const items = [
	  <Slide 
	  	img={imgEvent}
	  	subTitle="évennement à venir"
	  	title="vivez la demi-finale"
	  	alt="demi-finale en france"
	  >
	  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed rhoncus turpis, 
	  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed rhoncus turpis, 
	  	at aliquam diam. Integer libero leo, rhoncus sit amet sagittis imperdiet, 
	  </Slide>,
	  <Slide 
	  	img={imgEvent2}
	  	subTitle="Ce n'est pas une blague !"
	  	title="Un burger offert pour un but des blue"
	  	alt="votre surprise"
	  >
	  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed rhoncus turpis, 
	  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed rhoncus turpis, 
	  	at aliquam diam. Integer libero leo, rhoncus sit amet sagittis imperdiet, 
	  </Slide>,
	  <Slide 
	  	img={imgEvent3}
	  	subTitle="Il faut bien manger avant les match"
	  	title="Notre restaurant vous ouvre ses portes"
	  	alt="Notre restorant"
	  >
	  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed rhoncus turpis, 
	  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed rhoncus turpis, 
	  	at aliquam diam. Integer libero leo, rhoncus sit amet sagittis imperdiet, 
	  </Slide>
	];

	return (
		<Container>
			<div className="shadow-2xl my-20">
				<AliceCarousel 
					mouseTracking
					items={items}
					autoPlay
					infinite
					autoPlayInterval="4000"
					animationType="fadeout"
					disableButtonsControls={true}
				/>
			</div>
		</Container>
	)
}

export default Event