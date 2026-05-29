"use client";

import { use } from "react";

const ProductsId = ({ params }: PageProps<"/products/[id]">) => {
  const { id } = use(params);
  return <div>ProductsId {id}</div>;
};

export default ProductsId;
