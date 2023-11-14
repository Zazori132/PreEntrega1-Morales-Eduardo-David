import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalles del Producto - ID: {id}</h2>
      {/* Lógica para mostrar detalles del producto */}
    </div>
  );
};

export default ItemDetailContainer;
