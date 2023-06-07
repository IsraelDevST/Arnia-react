import React from "react";
import ImageSlider from "./components/ImageSlider";

function App() {
  const images = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
    "imagem4.jpg"
  ];

  return (
    <div>
      <h1>Minha Aplicação</h1>
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
