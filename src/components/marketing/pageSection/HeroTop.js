import React from 'react';
import illustration from '../../../medias/images/background/bg-food.jpg';
import Container from '../../elements/Container'
import Header from './Header'

const HeroTop = () => {
  return (
    <div className="bg-primary w-full h-screen">
      <div className="bg-repeat w-full h-full" style={{backgroundImage: `url(${illustration})`}} >
        <Container>
          <Header />

          <div className="w-full text-secondary">
            <div>
              <h1 className=" uppercase">Le moment de gouter au gout de la amburger</h1>
              <h2>
                <span className="text-8xl bold block">BURGER</span>
                <span className="text-6xl bold">HOUSE</span>
                <span className="text-4xl bold">Click<span className="text-danger">&</span>Collect</span>
              </h2>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroTop;