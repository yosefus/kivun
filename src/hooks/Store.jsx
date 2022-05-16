import React, { useState, createContext } from 'react';
import Popup from '../components/Pop-up';
import { useEffect } from 'react';
import { getToken } from '../functions/userApi';

export const StoreContext = createContext()
export const PopMessegeContext = createContext()

// export default function Store({ children }) {
//   const Store = useState({ user: localStorage.user|| undefined})
//   const [Pop, Setpop] = useState()
//   // const Store = useState({ userName: 'michael', accessToken: '', userPermission: '' })
//   return (
//     <StoreContext.Provider value={Store}>
//     <PopMessegeContext.Provider value={Setpop}>


//       <>{Pop} {children}</>
//     {/* <div>
//       {Popup(Setpop)}
//     </div> */}

//     </PopMessegeContext.Provider>
//     </StoreContext.Provider>
//   )}


// export const StoreContext = createContext();

export default function Store({ children }) {
  const Store = useState({ user: localStorage.user ? JSON.parse(localStorage.user) : undefined });

  useEffect(() => {
    getToken(Store?.user?.accsesToken);
  }, [Store[0]]);

  return <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>;
}
