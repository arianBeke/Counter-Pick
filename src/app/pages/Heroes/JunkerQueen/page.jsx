"use client"
import { Disclosure, Transition } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Navbar from '../../../components/Navbar/page';

const faqs = [
  {
    question: "What are Junker Queen's abilities?",
    img1: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f2e438e49ffae25e094d79f876a8538149ff2aefd7cdf962da4556bd3551184e.png",
    img2: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7aff09649e4e2daeec13cfcca4d5e369b4ddc0160587637bb607761ecf89f16c.png",
    img3: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1809c57884dafcfd1aab89eb80d2ad8fe0c64ce0036646a3e19c05f48c322c9d.png",
    img4: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/74c40565f02f550ed362d8a5aaed21de94a3ff1915185cb4b93d6ce6207f03ab.png",
    img5: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/68b7d33215b777410b834ba2e9e7202d5ecff15fe012712facd974ec32895c36.png",
    img6: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e1706243e4996af6844e7f8233bbd3f98f04583a223cd3ad926d40ef6c4c8557.png",
  }, 
];

const hero = [
  {
    name: 'Junker Queen',
    role: 'Passive/Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cef2406b2244b80506f83b8fb9ebaf214f41fa8795cbeef84026cd8018561d04.png',
  },
];
const counters = [
  {
   title: "Who are Junker Queen's counters?",
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png',
    descriptionName: 'PHARAH',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png',
    descriptionName: 'WIDOWMAKER',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png',
    descriptionName: 'MEI',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
    descriptionName: 'ANA',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png',
    descriptionName: 'KIRIKO',
  },
];
const counters2 = [
  {
   title: "Who does Junker Queen counter?",
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png',
    descriptionName2: 'REINHARDT',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png',
    descriptionName2: 'WINSTON',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png',
    descriptionName2: 'SYMMETRA',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png',
    descriptionName2: 'TORBJORN',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
    descriptionName2: 'BASTION',
  },
];
export default function Example() {
  return (
    <div>
      <Navbar />
      <div className=" mt-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">JUNKER QUEEN</h2>
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
                     Armed with her axe, Carnage, and her electromagnetic gauntlet, the cutthroat leader of the Junkers is on a mission to rule the world.
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Role: <span className="text-[#00df9a]">Tank</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Nationality: <span className="text-[#00df9a]" >Australia</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Birthday: Jun 14 <span className="text-[#00df9a]" >(Age: 31)</span>
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
                        <div className=" mt-9 grid grid-cols-1 lg:grid-cols-6 gap-8">
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img1} alt="" />
                            <p className="text-center text-white mt-5">SCATTERGUN</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img2} alt="" />
                            <p className="text-center text-white mt-5">JAGGED BALDE</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img3} alt="" />
                            <p className="text-center text-white mt-5">COMMANDING SHOUT</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img4} alt="" />
                            <p className="text-center text-white mt-5">CARNAGE</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img5} alt="" />
                            <p className="text-center text-white mt-5">RAMPAGE</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img6} alt="" />
                            <p className="text-center text-white mt-5">ADRENALINE RUSH</p>
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
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-5 gap-8">
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
                    </Transition >
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
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-5 gap-8">
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