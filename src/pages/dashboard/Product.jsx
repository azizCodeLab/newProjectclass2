import axios from "axios";
import React, { useEffect, useState } from "react";


const Product = () => {
  const [product,setProduct] =useState([])
  console.log(product);


  // Delete function
  const deleteitem=(id)=>{
       axios.delete(`https://fakestoreapi.com/products/${id}`)
       .then((res)=>console.log(res.data)
       )
  }


  

  useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
  .then((response)=>setProduct(response.data)
  )

  },[])
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3">Count</th>
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
                  {item.title}
                </td>
                <td className="px-6 py-4 text-green-600 font-semibold">
                  {item.price}
                </td>
                <td className="px-6 py-4">   {item.category}</td>
                <td className="px-6 py-4 text-yellow-600 font-semibold">
             {item.rating.rate}
                </td>
                <td className="px-6 py-4"> {item.rating.count}</td>
                <td className="px-6 py-4">
                  <button onClick={()=>deleteitem(item.id)}>Delete</button>
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
