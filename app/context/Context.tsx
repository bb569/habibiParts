// "use client";
// import { createContext, useContext, useState } from "react";
// type context = {
//   children: React.ReactNode;
// };
// type items = {
//   id: number;
//   qty: number;
// };
// type CartItems = {
//   cartItems: items[];
//   handleQty: (id: number) => void;
//   deHandleQty: (id: number) => void;
//   getQty: (id: number) => number;
//   cartQty: number;
//   allDelet: (id: number) => void;
// };
// const UserContext = createContext({} as CartItems);
// export const FunContext = () => {
//   return useContext(UserContext);
// };
// export default function CreatContext({ children }: context) {
//   let [cartItems, setcartItems] = useState<items[]>([]);
//   const getQty = (id: number) => {
//     return cartItems.find((item) => item.id == id)?.qty || 0;
//   };
//   const cartQty = cartItems.reduce((total, item) => {
//     return total + item.qty;
//   }, 0);
//   const handleQty = (id: number) => {
//     setcartItems((curntItem) => {
//       const isProduct = curntItem.find((item) => item.id == id) == null;
//       if (isProduct) {
//         return [...curntItem, { id: id, qty: 1 }];
//       } else {
//         return curntItem.map((item) => {
//           if (item.id == id) {
//             return { ...item, qty: item.qty + 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   };
//   const deHandleQty = (id: number) => {
//     setcartItems((curntItem) => {
//       let isProduct = curntItem.find((item) => item.id == id)?.qty == 1;
//       if (isProduct) {
//         return curntItem.filter((item) => item.id != id);
//       } else {
//         return curntItem.map((item) => {
//           if (item.id == id) {
//             return { ...item, qty: item.qty - 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   };
//   const allDelet = (id: number) => {
//     setcartItems((curntItem) => {
//       return curntItem.filter((item) => item.id != id);
//     });
//   };

//   return (
//     <UserContext.Provider
//       value={{ cartItems, handleQty, deHandleQty, getQty, allDelet, cartQty }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// }
"use client";
import { createContext, useContext, useState } from "react";

type context = {
  children: React.ReactNode;
};

type items = {
  id: number;
  qty: number;
};

type CartItems = {
  cartItems: items[];
  handleQty: (id: number) => void;
  deHandleQty: (id: number) => void;
  getQty: (id: number) => number;
  cartQty: number;
  allDelet: (id: number) => void;
};

const UserContext = createContext({} as CartItems);

export const FunContext = () => {
  return useContext(UserContext);
};

export default function CreatContext({ children }: context) {
  const [cartItems, setcartItems] = useState<items[]>([]);

  const getQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const cartQty = cartItems.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const handleQty = (id: number) => {
    setcartItems((curntItem) => {
      const isProduct = curntItem.find((item) => item.id == id) == null;
      if (isProduct) {
        return [...curntItem, { id: id, qty: 1 }];
      } else {
        return curntItem.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const deHandleQty = (id: number) => {
    setcartItems((curntItem) => {
      const isProduct = curntItem.find((item) => item.id == id)?.qty == 1;
      if (isProduct) {
        return curntItem.filter((item) => item.id != id);
      } else {
        return curntItem.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const allDelet = (id: number) => {
    setcartItems((curntItem) => {
      return curntItem.filter((item) => item.id != id);
    });
  };

  return (
    <UserContext.Provider
      value={{ cartItems, handleQty, deHandleQty, getQty, allDelet, cartQty }}
    >
      {children}
    </UserContext.Provider>
  );
}