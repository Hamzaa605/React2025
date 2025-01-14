import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/ProductService'
import ProductItem from './ProductItem'

function Product() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
      })
  }, [])


  return (
    <div>

      {/* Displaying Product: Start */}
      <div class="row row-cols-1 row-cols-md-2 g-4">


      {products.map((p) => {
        return (
          <ProductItem
            productName={p.productName}
            productDescription={p.productDescription}
            productPrice={p.productPrice}
          />
        )
      })}
      </div>

      {/* Displaying Product: Start */}
    </div>
  )
}

export default Product