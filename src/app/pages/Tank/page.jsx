"use client"
import Navbar from "../../components/Navbar/page"

const heroes = [
    {
      name: 'D.VA',
      role: 'Dive Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png',
    },
    {
      name: 'DOOMFIST',
      role: 'Dive Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png',
    },
    {
      name: 'JUNKER QUEEN',
      role: 'Aggresive Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cef2406b2244b80506f83b8fb9ebaf214f41fa8795cbeef84026cd8018561d04.png',
    },
    {
      name: 'ORISA',
      role: 'Aggresive Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png',
    },
    {
      name: 'RAMATTRA',
      role: 'Shield Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png',
    },
    {
      name: 'REINHARDT',
      role: 'Shield Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png',
    },
    {
      name: 'ROADHOG',
      role: 'Aggresive Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png',
    },
    {
      name: 'SIGMA',
      role: 'Shield Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png',
    },
    {
      name: 'WINSTON',
      role: 'Dive Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png',
    },
    {
      name: 'WRECKING BALL',
      role: 'Dive Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png',
    },
    {
      name: 'ZARYA',
      role: 'Aggresive Tank',
      imageUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png',
    },
  ]
  
  
  export default function Example() {
    return (
      <>
      <Navbar />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">TANK</h2>
            <p className="mt-4 text-lg leading-8 pt-8 text-gray-400">
            Tanks in Overwatch are heroes with <span className="text-[#00df9a]">high health</span> and <span  className="text-[#00df9a]">defensive abilities</span>, used to <span  className="text-[#00df9a]">protect</span> teammates and control the battlefield!
            </p>
          </div>
          <ul
            role="list"
            className=" mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {heroes.map((hero) => (
              <li key={hero.name} className="rounded-2xl hover:scale-105 duration-500 cursor-pointer hover:ring-[#00df9a] hover:ring-4 bg-[#1D2128] px-8 py-10">
                <img className="mx-auto h-48 w-48 ring-[#00df9a] ring-4 rounded-full md:h-56 md:w-56" src={hero.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{hero.name}</h3>
                <p className="text-sm leading-6 text-[#00df9a]">{hero.role}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </>
    )
  }
  
