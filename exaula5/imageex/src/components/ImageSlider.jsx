//Este codigo faz com que você consiga usar o handle prev e o handle next pra alterar a anterior e a proxima imagem
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <img src={require(`./images/${images[currentImageIndex]}`)} alt="Imagem" />
      <button onClick={handlePrevImage}>Anterior</button>
      <button onClick={handleNextImage}>Próxima</button>
    </div>
  );
};

export default ImageSlider;
