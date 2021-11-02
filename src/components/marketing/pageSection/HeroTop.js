import React from 'react';
import illustration from '../../../medias/images/background/bg-food.jpg';
import presentationImage from '../../../medias/images/heroTop/burger-hero-top.png';
import Container from '../../elements/Container'
import Header from './Header'
import Button from '../../elements/Button'

const HeroTop = () => {
  return (
    <div className="bg-primary w-full h-screen">
      <div className="bg-repeat w-full h-full" style={{backgroundImage: `url(${illustration})`}} >
        <Container>
          <Header />

          <div className="relative w-full flex items-center text-secondary mt-32">
            <div>
              <h1 className="textFontSecondary uppercase font-semibold">Le moment de gouter au gout des amburger</h1>
              <h2 className="textFontPrimary">
                <span className="text-8xl bold block mt-6">BURGER</span>
                <span className="text-6xl bold">HOUSE</span>
                <span className="text-4xl bold">Click<span className="text-danger">&</span>Collect</span>
              </h2>
              <Button
                theme="secondary"
                className="mt-7"
                size="big"
              >
                Creer mon compte
              </Button>
            </div>

            <img src={presentationImage} alt="burger house" className="w-7/12 absolute z-1 -top-64 right-0" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroTop;