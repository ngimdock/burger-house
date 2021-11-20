import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg';
import pictoLogo from '../../../medias/svg/picto-burger-house.svg';
import bag from '../../../medias/svg/ico-bag-clickAndCollect.svg';
import Button from '../../elements/Button'

const Header = () => {
	return(
		<header className="relative z-10 flex items-center justify-between py-10">
			<div className="flex ">
				<img src={Logo} alt="Burger-house app" className="w-64 hidden md:block"/>
				<img src={pictoLogo} alt="Burger-house app" className="w-10 block md:hidden"/>
			</div>
			<div>
				<div className="hidden md:flex flex items-center  justify-end">
					<img src={bag} alt="shop" className="w-5 h-5 mr-1"/>
					<span className="font-sans">Commandez votre repas en ligne</span>
				</div>

				<div className="md:mt-5">
					<Button className="mr-1 md:mr-3 tracking-widest shadow-lg">
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