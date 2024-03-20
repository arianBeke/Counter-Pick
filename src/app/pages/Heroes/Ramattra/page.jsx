"use client"
import { Disclosure, Transition } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Navbar from '../../../components/Navbar/page';

const faqs = [
  {
    question: "What are Ramattras's abilities?",
    img1: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f9b14ddf35c743968761ca0abd260385d836df9ce7d196a688ee3b5f25a720ca.png",
    img2: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0a40466f823f39910c8453a42d9338e434d8d36d120c540a381c6a9a1557da78.png",
    img3: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1dd2e8ea208e8a79def7852a422924c0c5f791ee7f09a0541240271bd3ecb0e7.png",
    img4: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7a7334480013e1d2eccd7df8b4b1e2f484ca81dfe5719fd3506d1055ba79908c.png",
    img5: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dbffca5b7b1e0dcc7a0cceaffe1fedb1a6bf7af73e71218a15df2779fc97805f.png",
  }, 
];

const hero = [
  {
    name: 'RAMATTRA',
    role: 'Passive/Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png',
  },
];
const counters = [
  {
   title: "Who are Ramattra's counters?",
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png',
    descriptionName: 'ORISA',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
    descriptionName: 'BASTION',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png',
    descriptionName: 'SYMMETRA',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png',
    descriptionName: 'PHARAH',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png',
    descriptionName: 'REAPER',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
    descriptionName: 'ANA',
  },
];
const counters2 = [
  {
   title: "Who does Ramattra counter?",
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png',
    descriptionName2: 'WINSTON',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png',
    descriptionName2: 'REINHARDT',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png',
    descriptionName2: 'LUCIO',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png',
    descriptionName2: 'SIGMA',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png',
    descriptionName2: 'MERCY',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png',
    descriptionName2: 'ZENYATTA',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
    descriptionName2: 'ANA',
  },
];
export default function Example() {
  return (
    <div>
      <Navbar />
      <div className=" mt-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">RAMATTRA</h2>
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
                    The brutal leader of Null Sector will stop at nothing to see his vision for the world realized.
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Role: <span className="text-[#00df9a]">Tank</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Nationality: <span className="text-[#00df9a]" >Nepal</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Birthday: Mar 29 <span className="text-[#00df9a]" >(Age: 28)</span>
                  </p>
                </div>
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
                            <p className="text-center text-white mt-5">VOID ACCELERATOR (OMNIC FORM)</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128]  ring-[#00df9a] ring-4 rounded-full" src={faq.img2} alt="" />
                            <p className="text-center text-white mt-5">VOID BARRIER (OMNIC FORM)</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128]  ring-[#00df9a] ring-4 rounded-full" src={faq.img3} alt="" />
                            <p className="text-center text-white mt-5">PUMMEL (NEMESIS FORM)</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128]  ring-[#00df9a] ring-4 rounded-full" src={faq.img4} alt="" />
                            <p className="text-center text-white mt-5">RAVENOUS VORTEX</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128]  ring-[#00df9a] ring-4 rounded-full" src={faq.img5} alt="" />
                            <p className="text-center text-white mt-5">ANNIHILATION</p>
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
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-6 gap-8">
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