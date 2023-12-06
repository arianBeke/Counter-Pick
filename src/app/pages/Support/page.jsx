"use client"
import ScrollButton from "@/app/components/ScrollButton/page";
import Navbar from "../../components/Navbar/page"


const heroes = [
  {
    name: 'ANA',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
  },
  {
    name: 'BAPTISTE',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png',
  },
  {
    name: 'BRIGITTE',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png',
  },
  {
    name: 'ILLARI',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ea986038f9d307bd4613d5e6f2c4c8e7f15f30ceeeabbdd7a06637a38f17e1f.png',
  },
  {
    name: 'KIRIKO',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png',
  },
  {
    name: 'LIFEWEAVER',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/39d4514f1b858bc228035b09d5a74ed41f8eeefc9a0d1873570b216ba04334df.png',
  },
  {
    name: 'LUCIO',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png',
  },
  {
    name: 'MERCY',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png',
  },
  {
    name: 'MOIRA',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png',
  },
  {
    name: 'ZENYATTA',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png',
  },
];

export default function Example() {
  return (
    <>
    <Navbar />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">SUPPORT</h2>
            <p className="mt-4 text-lg leading-8 pt-8 text-gray-400">
                Support heroes in Overwatch are dedicated to keeping their team <span className="text-[#00df9a]">alive and well.</span> They provide <span className="text-[#00df9a]">healing, utility, and protection</span> to ensure their teammates can push forward and <span className="text-[#00df9a]">secure victory.</span>
            </p>
          </div>
          <ul
            role="list"
            className=" mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {heroes.map((hero) => (
              <li key={hero.name} className="rounded-2xl hover:scale-105 duration-500 cursor-pointer hover:ring-[#00df9a] hover:ring-4 bg-gray-800 px-8 py-10">
                <img className="mx-auto h-48 w-48 ring-[#00df9a] ring-4 rounded-full md:h-56 md:w-56" src={hero.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{hero.name}</h3>
                <p className="text-sm leading-6 text-[#00df9a]">{hero.role}</p>
              </li>
            ))}
          </ul>
        </div>
        <ScrollButton />
      </div>
      </>    
  );
}
