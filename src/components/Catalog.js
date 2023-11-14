import React, { useState } from 'react';

const Catalog = () => {
  // Estado para almacenar los productos en el catálogo
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', price: 20 },
    { id: 2, name: 'Producto 2', price: 30 },
    // Agrega más productos según sea necesario
  ]);

  return (
    <div>
      <h2>Catálogo de productos</h2>
      {products.length === 0 ? (
        <p>No hay productos disponibles en el catálogo.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Catalog;
