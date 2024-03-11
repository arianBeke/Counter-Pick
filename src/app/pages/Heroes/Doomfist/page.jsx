"use client"
import { Disclosure, Transition } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Navbar from '../../../components/Navbar/page';

const faqs = [
  {
    question: "What are Doomfist's abilities?",
    img1: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/49c404d5887c562cdb5aafb55979c5589a450c0e18fa9d62a3c8cc0ac585886e.png",
    img2: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aa2a067fe151ac2795fe77546711c07be5f0880d9ae5dce554cab0c933d927f0.png",
    img3: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20f721d5fd05f91e203d6e0007a137bdc90a161356f85d5aa88b2ab02b8da22b.png",
    img4: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/56267df764931eadeae09513e0f1b9594ae238eebba84878c501ba4b69acb71f.png",
    img5: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa96b2650987b3784a725a0fb1704f7191a686a4f42c9ccf61c404e2f08b158c.png",
  }, 
];

const hero = [
  {
    name: 'DOOMFIST',
    role: 'Dive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png',
  },
];
const counters = [
  {
   title: "Who are Doomfist's counters?",
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png',
    descriptionName: 'SOMBRA',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png',
    descriptionName: 'MEI',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png',
    descriptionName: 'REAPER',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png',
    descriptionName: 'BRIGITTE',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
    descriptionName: 'BASTION',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png',
    descriptionName: 'ORISA',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png',
    descriptionName: 'PHARAH',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png',
    descriptionName: 'CASSIDY',
  },
];
const counters2 = [
  {
   title: "Who does Doomfist counter?",
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
    descriptionName2: 'ANA',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png',
    descriptionName2: 'ZENYATTA',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png',
    descriptionName2: 'ASHE',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png',
    descriptionName2: 'WIDOWMAKER',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png',
    descriptionName2: 'HANZO',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png',
    descriptionName2: 'TORBJORN',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png',
    descriptionName2: 'SOLDIER 76',
  },
];
export default function Example() {
  return (
    <div>
      <Navbar />
      <div className=" mt-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">DOOMFIST</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid lg:-w-7xl gap-6 lg:mx-0 lg:gap-8"
          >
            {hero.map((hero) => (
              <li key={hero.name} className="rounded-2xl grid grid-cols-2   ring-[#00df9a] ring-4 bg-[#1D2128] px-8 py-10">
                <div className=" pr-52">
                  <img className="mx-auto h-48 w-48 ring-[#00df9a] ring-4 rounded-full md:h-56 md:w-56" src={hero.imageUrl} alt="" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{hero.name}</h3>
                  <p className="text-sm leading-6 text-[#00df9a]">{hero.role}</p>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-[#00df9a] inline border-b-3 border-[#00df9a]">ABOUT</h1>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Doomfist is the calculating leader of Talon, a terrorist organization and paramilitary force that works in direct opposition to Overwatch.
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Role: <span className="text-[#00df9a]">Tank</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Nationality: <span className="text-[#00df9a]" >Nigeria</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Birthday: May 25 <span className="text-[#00df9a]" >(Age: 47)</span>
                  </p>
                </div>
                <likeButton />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-7xl divide-y divide-white ">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-[#00df9a]">Abilities and counters</h2>
            <dl className="mt-10 space-y-6 divide-y divide-white">
              {faqs.map((faq, index) => (
                <Disclosure key={faq.question} as="div" className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center text-[#00df9a]">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 ">
                        <div className=" mt-9 grid grid-cols-1 lg:grid-cols-5 gap-8">
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128]  ring-[#00df9a] ring-4 rounded-full" src={faq.img1} alt="" />
                            <p className="text-center text-white mt-5">HAND CANNON</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img2} alt="" />
                            <p className="text-center text-white mt-5">ROCKET PUNCH</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img3} alt="" />
                            <p className="text-center text-white mt-5">SEISMIC SLAM</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img4} alt="" />
                            <p className="text-center text-white mt-5">POWER BLOCK</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img5} alt="" />
                            <p className="text-center text-white mt-5">METEOR STRIKE</p>
                          </div>
                        </div>
                      </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}


              <Disclosure key={counters[0].title} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{counters[0].title}</span>
                        <span className="ml-6 flex h-7 items-center text-[#00df9a]">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-8 gap-8">
                        {counters.slice(1).map((counter) => (
                            <div key={counter.descriptionName} className="flex flex-col items-center mt-9">
                              <img
                                className="mx-auto lg:h-30 lg:w-30 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full"
                                src={counter.imageUrl2}
                                alt=""
                              />
                              <p className="text-center text-white mt-5">{counter.descriptionName}</p>
                            </div>
                          ))}
                      </div>
                    </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>



              <Disclosure key={counters2[0].title} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{counters2[0].title}</span>
                        <span className="ml-6 flex h-7 items-center text-[#00df9a]">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-7 gap-8">
                        {counters2.slice(1).map((counters2) => (
                            <div key={counters2.descriptionName2} className="flex flex-col items-center mt-9">
                              <img
                                className="mx-auto lg:h-30 lg:w-30 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full"
                                src={counters2.imageUrl3}
                                alt=""
                              />
                              <p className="text-center text-white mt-5">{counters2.descriptionName2}</p>
                            </div>
                          ))}
                      </div>
                    </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}