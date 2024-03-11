// "use client"
// import Navbar from "../../components/Navbar/page"
// import Link from 'next/link'
// import { db } from "../../firebase"
  
//   export default function Example() {
//     return (
//       <>
//       <Navbar />
//       <div className="py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
//           <div className="mx-auto max-w-2xl">
//             <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">FAVORITES</h2>
//             <p className="mt-4 text-lg leading-8 pt-8 text-gray-400">
//             Tanks in Overwatch are heroes with <span className="text-[#00df9a]">high health</span> and <span  className="text-[#00df9a]">defensive abilities</span>, used to <span  className="text-[#00df9a]">protect</span> teammates and control the battlefield!
//             </p>
//           </div>
//         </div>
//       </div>
//       </>
//     )
//   }    




  'use client';
import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase';

export default function Home() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [total, setTotal] = useState(0);

  // Read items from database
  useEffect(() => {
    const q = query(collection(db, 'items'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);

      // Read total from itemsArr
      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        );
        setTotal(totalPrice);
      };
      calculateTotal();
      return () => unsubscribe();
    });
  }, []);

  // Add item to favorites
  const addToFavorites = async (id) => {
    const itemToAdd = items.find((item) => item.id === id);
    if (itemToAdd) {
      setFavorites([...favorites, itemToAdd]);
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm '>
        <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
        <div className='bg-slate-800 p-4 rounded-lg'>
          <ul>
            {items.map((item) => (
              <li key={item.id} className='my-4 w-full flex justify-between bg-slate-950'>
                <div className='p-4 w-full flex justify-between'>
                  <span className='capitalize'>{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button
                  onClick={() => addToFavorites(item.id)}
                  className='ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16'
                >
                  Add to Favorites
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm '>
        <h1 className='text-4xl p-4 text-center'>Favorites</h1>
        <div className='bg-slate-800 p-4 rounded-lg'>
          <ul>
            {favorites.map((item) => (
              <li key={item.id} className='my-4 w-full flex justify-between bg-slate-950'>
                <div className='p-4 w-full flex justify-between'>
                  <span className='capitalize'>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

  
