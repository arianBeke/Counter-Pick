import Link from 'next/link';

export default function Hero() {
    return (
      <div className="relative isolate overflow-hidden h-screen">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className=" mt-40 mx-auto max-w-2xl text-center">
            <h2 className=" lg:text-6xl font-bold tracking-tight text-white sm:text-4xl">
              Pick your <span className="text-[#00df9a]">role!</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              To start learing more about the diffrent heroes, please select your role.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/pages/Tank">
                <button
                  className="rounded-md w-24 bg-[#00df9a] hover:text-[#00df9a] text-black hover:bg-gray-700 transition-colors duration-300  px-3.5 py-2.5 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                > 
                  Tank 
                </button> 
              </Link>
              <Link href="/pages/Damage">
                <button 
                  className="rounded-md w-24 bg-[#00df9a] hover:text-[#00df9a] text-black hover:bg-gray-700 transition-colors duration-300  px-3.5 py-2.5 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                > 
                  Damage 
                </button> 
              </Link>
              <Link href="/pages/Support">
                <button 
                  className="rounded-md w-24 bg-[#00df9a] hover:text-[#00df9a] text-black hover:bg-gray-700 transition-colors duration-300  px-3.5 py-2.5 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                > 
                  Support
                </button>
              </Link>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="#00df9a" />
              <stop offset={1} stopColor="#4D4E53" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    )
  }
  