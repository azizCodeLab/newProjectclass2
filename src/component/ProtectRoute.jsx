import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectRoute = ({children}) => {
      const navigate = useNavigate()

//     useEffect(()=>{

//     let isLogin1 = localStorage.getItem("isLogin");
//     console.log(isLogin1);

//     if (isLogin1 == null || isLogin1 != "yes") {
//         console.log("user not login");
        
//         navigate('/')
//     }
// },[])
  return (children)
}

export default ProtectRoute
