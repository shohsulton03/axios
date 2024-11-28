import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";

const API_URL = "https://fakestoreapi.com/products";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${API_URL}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data.slice(5));
        })
        .catch((err) => console.log(err)).finally(() => {
            setLoading(false)
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const productsItems = data?.map((pro) => (
    <div className="p-3 shadow-lg bg-white" key={pro.id}>
      <img className="w-full h-60 object-contain" src={pro.image} alt="" />
      <h3>{pro.title}</h3>
      <p>${pro.price}-USD</p>
    </div>
  ));

  return (
    <div className="container max-w-[1250px] m-auto">
      {loading && <Skeleton />}
      <div className="grid grid-cols-4 gap-3 p-3 mt-10 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[450px]:grid-cols-1">
        {productsItems}
      </div>
    </div>
  );
};

export default Products;
