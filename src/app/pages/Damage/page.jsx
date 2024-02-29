"use client"
import Navbar from "../../components/Navbar/page"


const heroes = [
  {
    name: 'ASHE',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png',
  },
  {
    name: 'BASTION',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
  },
  {
    name: 'CASSIDY',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png',
  },
  {
    name: 'ECHO',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png',
  },
  {
    name: 'GENJI',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png',
  },
  {
    name: 'HANZO',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png',
  },
  {
    name: 'JUNKRAT',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png',
  },
  {
    name: 'MEI',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png',
  },
  {
    name: 'PHAHRAH',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png',
  },
  {
    name: 'REAPER',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png',
  },
  {
    name: 'SOJURN',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png',
  },
  {
    name: 'SOLDIER 76',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png',
  },
  {
    name: 'SOMBRA',
    role: '',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png',
  },
  {
    name: 'SYMMETRA',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png',
  },
  {
    name: 'TORBJORN',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png',
  },
  {
    name: 'TRACER',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png',
  },
  {
    name: 'WIDOWMAKER',
    role: 'Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png',
  },
];

export default function Example() {
  return (
    <>
    <Navbar />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">DAMAGE</h2>
            <p className="mt-4 text-lg leading-8 pt-8 text-gray-400">
              Damage heroes in Overwatch are all about <span className="text-[#00df9a]">dealing damage</span> to <span className="text-[#00df9a]">eliminate </span> foes and take control of the battles with their <span className="text-[#00df9a]">hitscan or projectile</span> abilities.
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
  );
}


