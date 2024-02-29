'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setPasswordAgain("");
        setError("");
        notify(); 
      })
      .catch((error) => {
        console.error('Signup failed:', error.message);
        setError(error.message);
      });
  };

  const notify = () => toast.success("Account created successfully!");

  useEffect(() => {
    document.title = 'Sign Up - Counter Pick';
  }, []);
  
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#00df9a] underline underline-offset-8">Counter Pick</h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign up
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
                  value={email}
                  placeholder='example@example.com'
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block bg-gray-700 w-full pl-4 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  value={password}
                  placeholder='6 characters minimum'
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block bg-gray-700 w-full pl-4 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordAgain"
                  value={passwordAgain}
                  placeholder='6 characters minimum'
                  name="passwordAgain"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPasswordAgain(e.target.value)}
                  required
                  className="block bg-gray-700 w-full pl-4 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500">{error}</div>
            )}

            <div>
              <button
                disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                onClick={signup}
                className="disabled:opacity-40 flex w-full justify-center rounded-md duration-300 bg-[#00df9a] hover:bg-gray-700 hover:text-[#00df9a] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign Up
              </button>
              <ToastContainer position="top-center" />
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <button onClick={() => router.push('signin')} className="font-semibold leading-6 text-[#00df9a] hover:text-white">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </>
  )
}