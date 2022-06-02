import React from 'react';
import ButtonGroup from './ButtonGroup';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

  //Category of cloths
  const category= [{name:"All", category:""},{name:"Men's Wear", category:"men's clothing"},{name:"Women's Wear", category:"women's clothing"}, {name:"Jewelary", category:"jewelery"}, {name:"Electronics", category:"electronics"}
]

  return (
    <div>
        <div style={{marginTop:'80px'}}>
        <ButtonGroup category={category}></ButtonGroup>
        <ProductComponent></ProductComponent>
        </div>
    </div>
  )
}

export default ProductListing