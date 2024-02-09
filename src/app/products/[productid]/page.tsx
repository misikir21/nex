import React from "react";

function product({ params }: { params: { productid: string } }) {
  return <h1>this is a detail page about{params.productid}</h1>;
}

export default product;
