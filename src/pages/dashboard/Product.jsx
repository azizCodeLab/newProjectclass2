import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  // Delete function
  const deleteitem = (id) => {
    axios
      .delete(`https://68dcfc917cd1948060abf7d6.mockapi.io/api/product/${id}`)
      .then((res) => console.log(res.data));
  };

  const getProducts = () => {
    axios
      .get("https://68dcfc917cd1948060abf7d6.mockapi.io/api/product")
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Product Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    className="w-12 h-12 object-contain rounded"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-green-600 font-semibold">
                  {item.price}
                </td>
                <td className="px-6 py-4"> {item.description}</td>
                <td className="px-6 py-4 text-yellow-600 font-semibold">
                  {item.rating}
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => deleteitem(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
