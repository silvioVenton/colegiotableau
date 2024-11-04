import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarrosselEnf= () => {
  const banners = [
    {
      image: '/images/enfermagem1.jpg',
      headline: 'Seja o Cuidado que Transforma Vidas',
      description: 'Como técnico em enfermagem, você estará na linha de frente, oferecendo suporte essencial e humanizado aos pacientes.',
    },
    {
      image: '/images/enfermagem2.jpg',
      headline: 'Carreira em Alta Demanda',
      description: 'O mercado de saúde está em constante crescimento e profissionais qualificados são sempre necessários.',
    },
    {
      image: '/images/enfermagem3.jpg',
      headline: 'Aprendizado Prático e Valioso',
      description: 'Obtenha experiência prática em cenários reais que farão a diferença na sua formação e no atendimento ao paciente.',
    },
    {
      image: '/images/enfermagem4.jpg',
      headline: 'Oportunidades de Crescimento Profissional',
      description: 'Desenvolva habilidades que podem abrir portas para uma carreira sólida e em constante evolução.',
    },
    {
      image: '/images/enfermagem5.jpg',
      headline: 'Contribua para um Futuro Melhor',
      description: 'Torne-se um profissional de saúde que impacta diretamente na vida das pessoas e da comunidade.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className={carrosselContainer}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className={slide}>
            <Image
              src={banner.image}
              alt={banner.headline}
              width={1200}
              height={600}
              className={image}
            />
            <div className={textContainer}>
              <h2 className={headline}>{banner.headline}</h2>
              <p className={description}>{banner.description}</p>
          
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarrosselEnf;
