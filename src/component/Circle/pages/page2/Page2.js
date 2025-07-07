// src/components/Circle/pages/Page2.js
import Product from './Product';
import React, { useState } from 'react';

const Page2 = () => {
  
  const [products, setProduc] = useState([ // تغییر نام از Product به products
    {id:1,count:3,title:"pc",aboutProduc:"100,00"}, 
    {id:2,count:8,title:"phone",aboutProduc:"25,000"}, 
    {id:3,count:8,title:"airpod",aboutProduc:"5,000"}
  ]);

  return (
    <div className="d-flex justify-content-center flex-wrap gap-3 p-4 mt-5"> 
      <button className="btn btn-primary d-flex justify-content-center flex-wrap gap-3 p-4 mt-5"
      onClick={resetHandler}
      >reset</button>
      {products.map((p,index) => ( // استفاده از products به جای Product
        <Product onDelete={deleteHandler} 
        onPlus={plusHandler}
        onMinus={minusHandler}
        id={p.id} key={index} title={p.title} count={p.count}>
          <p>{p.aboutProduc}</p>
        </Product>
      ))}
    </div>
  );

  function plusHandler(ProductId){
    const newProduct = [...products];
    const index = newProduct.findIndex((p) => p.id === ProductId);
    newProduct[index].count += 1;
    setProduc(newProduct);
  }

  function minusHandler(ProductId){
    const newProduct = [...products];
    const index = newProduct.findIndex((p) => p.id === ProductId);
    newProduct[index].count -= 1;
    setProduc(newProduct);
  }

  function deleteHandler(ProductId) {
      const newProduct = products.filter(p => p.id !== ProductId);
      setProduc(newProduct);
    }

  function resetHandler (){
    const newProduct = products.map((p) => {
      p.count = 0;
      return p;
    })
    setProduc(newProduct);
  }  
};

export default Page2;