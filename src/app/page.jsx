import Link from 'next/link';



export default function HomePage() {
  return (
    <div className=" lg:h-screen md:h-full">
      <div className="relative isolate lg:h-screen md:h-full overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center mt-24">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to <span className="text-[#00df9a]">counter pick!</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                The ultimate site for learning how to counter your enemies in Overwatch!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="pages/signin">
                <button
                  className="rounded-md w-64 bg-[#00df9a] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-700 hover:text-[#00df9a] transition-colors duration-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
    </div>
  )
}





