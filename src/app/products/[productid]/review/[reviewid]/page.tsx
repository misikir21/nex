import React from "react";

function page({
  params,
}: {
  params: {
    reviewid: string;
    productid: string;
  };
}) {
  return (
    <h1>
      review {params.reviewid}for product{params.productid}
    </h1>
  );
}

export default page;
