import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const catProducts = [
    {
      id: 1,
      name: 'Arena para gatos',
      description: 'Arena de calidad premium para mantener limpia la caja de arena de tu gato.',
      price: 10,
      brand: 'CatComfort',
      stock: 50,
      imageUrl: 'https://example.com/arena.jpg',
    },
    {
      id: 2,
      name: 'Transportadora para gatos',
      description: 'Transportadora cómoda y segura para llevar a tu gato a donde necesites.',
      price: 30,
      brand: 'PetTraveler',
      stock: 30,
      imageUrl: 'https://example.com/transportadora.jpg',
    },
    {
      id: 3,
      name: 'Accesorios para gatos',
      description: 'Una variedad de accesorios divertidos y útiles para tu gato.',
      price: 15,
      brand: 'CatPlay',
      stock: 100,
      imageUrl: 'https://example.com/accesorios.jpg',
    },
  ];

  const { id } = useParams();
  const productId = parseInt(id, 10);

  const productDetails = catProducts.find(product => product.id === productId);

  return (
    <div>
      <h2>Detalle de Producto</h2>
      {productDetails ? (
        <div>
          <h3>{productDetails.name}</h3>
          <p>{productDetails.description}</p>
          <p>Precio: ${productDetails.price}</p>
          <p>Marca: {productDetails.brand}</p>
          <p>Stock disponible: {productDetails.stock} unidades</p>
          <img src={productDetails.imageUrl} alt={productDetails.name} style={{ maxWidth: '300px' }} />
        </div>
      ) : (
        <p>No hay detalles disponibles para este producto.</p>
      )}
    </div>
  );
};

export default ProductDetail;

