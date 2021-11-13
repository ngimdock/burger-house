import React from 'react'
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css'
import '../../../css/carousel.css'

import Container from '../../elements/Container'
import Heading from '../../elements/DisplayTitle/Heading'
import imgEvent from '../../../medias/images/photos/demi-finale.jpg'
import burger1 from '../../../medias/images/products/burger1.jpg'

const handleDragStart = (e) => e.preventDefault();

const Event = () => {

	const items = [
	  <div className="flex items-center font-secondary ">
	  	<div className="p-3">
	  		<Heading>
	  			vivez la demi-finale chez nous
	  		</Heading>
		  	<p>
		  		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, est in finibus porttitor, dolor nunc elementum magna, nec laoreet risus massa non arcu. In efficitur dapibus rutrum. Nunc lobortis lectus lorem, a semper diam condimentum in. 
		  	</p>
	  	</div>
	  	<img src={burger1} className="block w-1/2 h-full" onDragStart={handleDragStart} />
	  </div>,

	  <div className="flex items-center font-secondary h-full">
	  	<div className="p-3">
	  		<Heading>
	  			vivez la demi-finale chez nous
	  		</Heading>
		  	<p>
		  		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, est in finibus porttitor, dolor nunc elementum magna, nec laoreet risus massa non arcu. In efficitur dapibus rutrum. Nunc lobortis lectus lorem, a semper diam condimentum in. 
		  	</p>
	  	</div>
	  	<div>
	  		<img src={burger1} className="block w-1/2 h-full" onDragStart={handleDragStart} />
	  	</div>
	  </div>
	];

	return (
		<Container>
		<div className="shadow-2xl w-full h-96 my-20 p-10">
			<AliceCarousel 
				mouseTracking
				items={items}
				// autoPlay
				// infinite
				// autoPlayInterval="4000"
				// animationType="fadeout"
				disableButtonsControls={true}
			/>
		</div>
		</Container>
	)
}

export default Event