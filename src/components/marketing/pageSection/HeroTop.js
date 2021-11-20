import React from 'react';
import illustration from '../../../medias/images/background/bg-food.jpg';
import presentationImage from '../../../medias/images/heroTop/burger-hero-top.png';
import Container from '../../elements/Container'
import Header from './Header'
import Button from '../../elements/Button'

const HeroTop = () => {
  return (
    <div className="bg-primary w-full">
      <div className="bg-repeat w-full h-full pb-20 md:pb-40" style={{backgroundImage: `url(${illustration})`}} >
        <Container>
          <Header />

          <div className="relative mt-16 md:mt-24 text-secondary uppercase">
            <img 
              src={presentationImage} 
              alt="burger house" 
              className="hidden lg:block  absolute z-0 -top-64 right-0 mt-10"
              style={{width: "564px"}} />
            <div className="relative z-10 text-left md:text-center lg:text-left">
              <h1 className="font-sans uppercase font-medium">Le moment de gouter au gout des amburger</h1>
              <h2 className="font-secondary shadowTitleSecondary">
                <span className="text-7xl md:text-8xl bold block mt-6">BURGER</span>
                <span className="text-5xl md:text-6xl bold">HOUSE</span>
                <span className="text-4xl bold sm:ml-4 block sm:inline">Click<span className="text-danger">&</span>Collect</span>
              </h2>
              <Button
                theme="secondary"
                className="mt-7 rounded-sm w-full sm:w-auto md:w-1/2"
                size="big"
              >
                Creer mon compte
              </Button>
            </div>
            
            <div className="hidden lg:block  w-40 h-40 rounded-full bg-danger absolute -bottom-16 right-72 p-3 flex item-center justify-center">
              <div className="w-full h-full text-white rounded-full p-3 border-dashed border-2 border-white flex item-center justify-center">
                <div className="text-center  my-auto">
                  <span className="block font-bold">
                    <span className="text-extrabold text-4xl">5</span>,49€
                  </span>
                  <span className="font-semibold uppercase text-sm tracking-widest">seulement</span>
                </div>
              </div>
            </div>
          </div>


        </Container>
      </div>
    </div>
  );
};

export default HeroTop;