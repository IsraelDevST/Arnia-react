import React from "react";

const products = [
  {
    name: "Isqueiro",
    stock: 0,
    price: 50.00
  },
  {
    name: "Porto faria",
    stock: 0,
    price: 17.50
  },
  {
    name: "Doce de leite",
    stock: 0,
    price: 2.20
  },
  {
    name: "Paiol",
    stock: 0,
    price: 10
  }
];

const ProductList = () => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      {products.map((produto, index) => (
        <div key={index}>
          <h3>{produto.name}</h3>
          {produto.stock > 0 ? (
            <div>
              <p>Preço: R${produto.price.toFixed(2)}</p>
              <button>Adicionar ao carrinho</button>
            </div>
          ) : (
            <p>Produto esgotado</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
