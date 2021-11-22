import React from 'react'
import Container from '../../elements/Container'
import AssietteBurger from '../../../medias/images/background/Assiette-burger-frites.png'
import Burger from '../../../medias/images/background/Burger.png'
import SaucePimente from '../../../medias/images/background/Sauce-pimente.png'
import Heading from '../../elements/DisplayTitle/Heading'

const Booking = () => {

	return(
		<Container>
			<div className="relative w-full my-20">
				<img src={Burger}  className="hidden lg:block absolute -top-20 -left-36" alt="" />
				<img src={SaucePimente} className="hidden lg:block absolute bottom-0 left-0" alt="une sauce pimente" />
				<img src={AssietteBurger} className="hidden lg:block absolute -bottom-44 -right-96 hidden lg:block" alt="une assiette hamberger frits" />

				<div className="max-w-3xl mx-auto px-5 py-20">
					<Heading variant="h3" align="center">
						réservation
					</Heading>
					<Heading theme="secondary" align="center" className="text-2xl my-5 text-center">
						Réservé votre table
					</Heading>
					<form className="grid md:grid-cols-2 md:grid-rows-3 gap-x-6 gap-y-4 mt-5 lg:mt-20">
						<div>
							<label htmlFor="name">Nom</label>
							<input
								type="text"
								name="name"
								id="name"
								autoComplete="off"
								placeholder="dan snow"
								className="w-full block  border-gray-200 rounded p-4 focus:ring-2 focus:ring-primary focus:border focus:ring-primary"
							/>
						</div>

						<div>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="off"
								placeholder="danSnow@gmail.com"
								className="w-full block  border-gray-200 rounded p-4 focus:ring-2 focus:ring-primary focus:border focus:ring-primary"
							/>
						</div>

						<div>
							<label htmlFor="date">Date</label>
							<input
								type="date"
								name="date"
								id="date"
								className="w-full block  border-gray-200 rounded p-4 focus:ring-2 focus:ring-primary focus:border focus:ring-primary"
							/>
						</div>

						<div>
							<label htmlFor="time">Heure</label>
							<input
								type="time"
								name="time"
								id="time"
								className="w-full block  border-gray-200 rounded p-4 focus:ring-2 focus:ring-primary focus:border focus:ring-primary"
							/>
						</div>

						<div>
							<label htmlFor="custumer">Nombre de personnes</label>
							<input
								type="number"
								name="custumer"
								id="custumer"
								min="1"
								className="w-full block  border-gray-200 rounded p-4 focus:ring-2 focus:ring-primary focus:border focus:ring-primary"
							/>
						</div>

						<div >
							<label htmlFor="submitBookink" className="invisible">
								Reserve le repas
							</label>
							<input
								type="button"
								value="Trouver une table"
								name="submitBookink"
								id="submitBookink"
								min="1"
								className="w-full block p-4 rounded bg-danger hover:bg-danger-hover font-secondary text-white uppercase tracking-widest"
							/>
						</div>
					</form>
			</div>
			</div>
		</Container>
	)
}

export default Booking