import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg';
import bag from '../../../medias/svg/ico-bag-clickAndCollect.svg';
import Button from '../../elements/Button'

const Header = () => {
	return(
		<header className="relative z-10 flex item-center justify-between py-10">
			<div className="flex item-center">
				<img src={Logo} alt="Burger-house app" className="w-64"/>
			</div>
			<div>
				<div className="flex w-full justify-around">
					<img src={bag} alt="shop" className="w-5"/>
					<p>Commandez votre repas en ligne</p>
				</div>
				<div className="mt-3">
					<Button className="mr-3 tracking-widest shadow-lg">
						inscription
					</Button>
					<Button theme="secondary" className="shadow-lg tracking-widest">
						connexion
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header