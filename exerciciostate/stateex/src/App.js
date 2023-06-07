import React, { useState } from "react";

function randomIntFromInterval (min, max) { 
  return Math.floor(Math.random() *(max - min + 1) + min);
}

const MotivacionalQuoteGenerator = () => {
  const [quote, setQuote] = useState("Clique no botão para gerar uma frase motivacional");
  const [number,setNumber] = useState(0);
   
  const generateQuote = () => {
    const quotes = [
      "Acredite em si mesmo e tudo será possível",
      "O sucesso nasce do querer, da determinação e da persistência em se chegar a um objetivo",
      "Se um problema não tem solução, solucionado está",
      "Nenhum obstáculo será grande se sua vontade de vencer for maior.",
      "Acredite,você é capaz e fazer coisas incriveis",
    ];

    const randomIndex = randomIntFromInterval(0,quotes.length -1);
    setQuote(quotes[randomIndex]);
  };
  const incrementNumber = () => {
    setNumber ((prevNumber) => prevNumber + 1);
  };
  const decrementNumber = () => {
  setNumber ((prevNumber) => prevNumber - 1);
};

  return (
    <div>
      <h2>{quote}</h2>
      <button onClick={generateQuote}>Gerar outra frase</button>
      <h2>Número:</h2>
      <p>{number}</p>
      <button onClick={decrementNumber}>Diminuir</button>
      <button onClick={incrementNumber}>Aumentar</button>
    </div>
    
  );
};

export default MotivacionalQuoteGenerator