import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg';
import bag from '../../../medias/svg/ico-bag-clickAndCollect.svg';
import Button from '../../elements/Button'

const Header = () => {
	return(
		<header className="flex item-center justify-between py-10 bg-gray-300">
			<div className="bg-red-300 flex item-center">
				<img src={Logo} alt="Burger-house app" className="w-64"/>
			</div>
			<div>
				<div className="flex w-full justify-around">
					<img src={bag} alt="shop" className="w-5"/>
					<p className="pl-1">Commandez votre repas en ligne</p>
				</div>
				<div className="mt-3">
					<Button className="mr-2 shadow-lg">
						inscription
					</Button>
					<Button theme="secondary" className="shadow-lg">
						connexion
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header