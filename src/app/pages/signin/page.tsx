"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    document.title = 'Sign In - Counter Pick';
  }, []);

  const notifySuccess = () => toast.success("Logged in!", { autoClose: 100000 });
  const notifyError =  () => toast.error("Sign in failed.", { autoClose: 3000 });

  const handleSignIn = async () => {
    const result = await signIn('credentials', { email, password, redirect: false });
    if (result?.error) {
      notifyError(); 
    } else {
      notifySuccess();
      router.push('/pages/Hero');
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 onClick={() => router.push('/')} className=" cursor-pointer text-center text-2xl font-bold leading-9 tracking-tight text-[#00df9a]  underline underline-offset-8">Counter Pick</h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
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
                  className="block w-full pl-4 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <div onClick={() => router.push('/pages/forgot-password')} className="cursor-pointer font-semibold text-[#00df9a] hover:text-white">
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-4 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleSignIn}
                disabled={!email || !password}
                className="disabled:opacity-40 flex w-full justify-center rounded-md duration-300 bg-[#00df9a] hover:bg-gray-700 hover:text-[#00df9a] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm"
              >
                Sign in
              </button>
              <ToastContainer position="top-center" />
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-[#00df9a] hover:text-white">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  )
}


