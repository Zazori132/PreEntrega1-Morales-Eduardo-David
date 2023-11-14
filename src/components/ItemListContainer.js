import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams();

  useEffect(() => {
    
    if (id) {
     
      console.log(`Cargar productos de la categoría: ${id}`);
      
    } else {
      
      console.log('Cargar todos los productos');
      
    }

    
    return () => {
      console.log('Cleanup del efecto');
    };
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Productos</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
