'use client';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase'; 
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };



  useEffect(() => {
    document.title = 'Forgot Password - Counter Pick';
  }, []);
  

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#00df9a] underline underline-offset-8">Counter Pick</h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Forgot Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => resetEmail()}
                disabled={!email}
                className="disabled:opacity-40 flex w-full justify-center rounded-md duration-300 bg-[#00df9a] hover:bg-gray-700 hover:text-[#00df9a] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send Forgot Password Email
              </button>
            </div>
          </div>
          <p className="mt-10 text-center space-x-2 text-sm text-gray-400">
            <button onClick={() => router.push('signin')} className="font-semibold leading-6 text-[#00df9a] hover:text-white">
              Sign In
            </button>
            <span>/</span>
            <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-[#00df9a] hover:text-white">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  )
}