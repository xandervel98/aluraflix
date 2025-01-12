import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Banner = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error al cargar videos:', error));
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [videos]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex - 1 + videos.length) % videos.length
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const currentVideo = videos[currentIndex] || {};

  return (
    <BannerContainer>
      <ContentContainer isAnimating={isAnimating}>
        <TextContainer>
          <Category category={currentVideo.categoria}>
            {currentVideo.categoria || 'CATEGORÍA'}
          </Category>
          <Title>{currentVideo.titulo || 'Título del video'}</Title>
          <Description>
            {currentVideo.descripcion || 'Descripción del video destacado'}
          </Description>
        </TextContainer>
        <ImageContainer>
          <BannerImage
            src={currentVideo.imagen || '../../img/banner_imagen.png'}
            alt={currentVideo.titulo || 'Imagen del video'}
          />
        </ImageContainer>
      </ContentContainer>
      <Controls>
        <Arrow onClick={handlePrev}>&#9664;</Arrow>
        <Arrow onClick={handleNext}>&#9654;</Arrow>
      </Controls>
    </BannerContainer>
  );
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'FRONT END':
      return '#6BD1FF';
    case 'BACK END':
      return '#00C86F';
    case 'INNOVACIÓN Y GESTIÓN':
      return '#FFBA05';
    default:
      return '#555';
  }
};

const BannerContainer = styled.figure`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url('../../img/fondo-banner.jpg') no-repeat center center;
  background-size: cover;
  padding: 20px 0px;
  margin: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
  height: 80vh;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  transition: transform 0.5s ease, opacity 0.5s ease;
  ${(props) =>
    props.isAnimating &&
    css`
      transform: translateX(-20px);
      opacity: 0.5;
    `}
`;

const TextContainer = styled.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
`;

const Category = styled.div`
  background-color: ${(props) => getCategoryColor(props.category)};
  color: #fff;
  padding: 10px 20px;
  font-weight: 900;
  font-size: 3rem;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.875rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
`;

const ImageContainer = styled.div`
  max-width: 45%;
  position: relative;
  z-index: 2;
`;

const BannerImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 3;
`;

const Arrow = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  font-size: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    color: #000;
  }
`;

export default Banner;

